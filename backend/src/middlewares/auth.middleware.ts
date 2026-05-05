import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AuthError } from "../errors/index.ts";

export function useAuth(req: Request, res: Response, next: NextFunction) {
  //check if authorization header exists and contains bearer token
  const authHeader = req.headers.authorization;
  if (authHeader?.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];

    if (!token) {
      throw new AuthError("Token not found!");
    }

    //check if valid token
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET!);
      req.user = payload as { id: string };
      next();
    } catch (error) {
      throw new AuthError("invalid or expired token!");
    }
  } else {
    throw new AuthError("Auth header is missing!");
  }
}
