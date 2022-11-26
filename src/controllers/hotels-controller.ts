import { AuthenticatedRequest } from "@/middlewares";
import { Response } from "express";
//import httpStatus from "http-status";

export async function getHotels(req: AuthenticatedRequest, res: Response) {
  return res.status(501).send("Ainda vou implementar");
}
