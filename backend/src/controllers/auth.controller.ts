import bcrypt from "bcryptjs";
import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import User from "../models/User.ts";
import { AuthError, ConflictError } from "../errors/index.ts";

export async function signup(req: Request, res: Response) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(StatusCodes.BAD_REQUEST).json({
      message: "Please provide all fields!",
    });
  }

  //hash password
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const passwordHash = await bcrypt.hash(password, salt);

  //create user and if email duplicate then return duplicate email error

  try {
    const user = await User.create({ name, email, passwordHash });

    const payload = { id: user.id, name: user.name, email: user.email };

    //create token
    const token = jwt.sign({ id: payload.id }, process.env.JWT_SECRET!, {
      expiresIn: "7d",
    });

    return res.status(StatusCodes.CREATED).json({
      message: "successfully signed up!",
      token,
      user: payload,
    });
  } catch (err) {
    const error = err as { code: number };

    if (error.code === 11000) {
      throw new ConflictError("User with this email already exists!");
    }
  }
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  //check if the user exists
  const user = await User.findOne({ email });

  if (!user) {
    throw new AuthError("Invalid email or password!");
  }

  //check if password match
  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch) {
    throw new AuthError("Invalid email or password!");
  }

  const payload = { id: user.id, name: user.name, email: user.email };

  //create token
  const token = jwt.sign({ id: payload.id }, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });

  return res.status(StatusCodes.OK).json({
    message: "logged in successfully!",
    user: payload,
    token,
  });
}
