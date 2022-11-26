import { Router } from "express";
import { getHotels } from "@/controllers/hotels-controller";

const hotelsRouter = Router();

hotelsRouter
  .get("", getHotels);

export { hotelsRouter };
