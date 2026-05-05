import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../errors/ApiError.ts";
import { StatusCodes } from "http-status-codes";

export function ErrorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (error instanceof ApiError) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: "Some internal error occured!",
  });
}
