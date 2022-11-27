import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getHotels, getHotelWithId } from "@/controllers/hotels-controller";

const hotelsRouter = Router();

hotelsRouter
  .all("/*", authenticateToken)
  .get("/:hotelId", getHotelWithId)
  .get("", getHotels);
 
export { hotelsRouter };
