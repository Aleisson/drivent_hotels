import { Router } from "express";
import { getHotels } from "@/controllers/hotels-controller.js";

const hotelsRouter = Router();

hotelsRouter
  .get("", getHotels);

export { hotelsRouter };
