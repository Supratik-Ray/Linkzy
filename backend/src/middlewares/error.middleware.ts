import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors/ApiError.ts";

export function ErrorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (error instanceof ApiError) {
  }
}
