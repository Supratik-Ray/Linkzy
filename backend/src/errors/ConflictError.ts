import { StatusCodes } from "http-status-codes";
import { ApiError } from "./ApiError.ts";

export class ConflictError extends ApiError {
  constructor(message: string) {
    super(StatusCodes.CONFLICT, message);
  }
}
