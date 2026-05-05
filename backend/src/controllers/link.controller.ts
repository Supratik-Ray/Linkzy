import type { Request, Response } from "express";
import { AuthError, BadRequestError, ServerError } from "../errors/index.ts";
import { generateCode } from "../utils/generateCode.ts";
import Link from "../models/Link.ts";
import { StatusCodes } from "http-status-codes";

export async function shortenLink(req: Request, res: Response) {
  if (!req.user) {
    throw new AuthError("You are unauthorized to access this page!");
  }

  const { originalUrl } = req.body;

  if (!originalUrl)
    throw new BadRequestError("please provide the original link");

  const shortCode = generateCode(6);

  try {
    await Link.create({
      originalUrl,
      shortCode,
      user: req.user.id,
    });

    return res.status(StatusCodes.CREATED).json({
      success: true,
      data: {
        originalUrl,
        shortCode,
      },
    });
  } catch (error) {
    throw new ServerError("failed to shorten link!");
  }
}
