import { StatusCodes } from "http-status-codes";
import { ApiError } from "./ApiError.ts";

export class ServerError extends ApiError {
  constructor(message: string) {
    super(StatusCodes.INTERNAL_SERVER_ERROR, message);
  }
}
