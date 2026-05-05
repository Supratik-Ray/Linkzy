import type { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

export function useAuth(req: Request, res: Response, next: NextFunction) {
  //check if authorization header exists and contains bearer token
  const authHeader = req.headers.authorization;
  if (authHeader?.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: "invalid token",
      });
    }

    //check if valid token
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET!);
      req.user = payload as { id: string };
      next();
    } catch (error) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: "invalid token",
      });
    }
  } else {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: "auth header is missing!",
    });
  }
}
