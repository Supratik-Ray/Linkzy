import type { Request, Response } from "express";
import { BadRequestError } from "../errors/index.ts";

export async function shortenLink(req: Request, res: Response) {
  const { originalLink } = req.body;

  if (!originalLink)
    throw new BadRequestError("please provide the original link");
}
