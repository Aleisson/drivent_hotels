import { notFoundError } from "@/errors";
import hotelsRepository from "@/repositories/hotels-repository";

async function getHotels() {
  const hotels = hotelsRepository.findHotels();
  
  if(!hotels) {
    throw notFoundError();  
  }
  
  return hotels;
}

const hotelsService = {
  getHotels,
};

export default hotelsService;

