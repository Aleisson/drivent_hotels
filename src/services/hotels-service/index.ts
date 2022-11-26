import { notFoundError } from "@/errors";
import hotelsRepository from "@/repositories/hotels-repository";
import enrollmentRepository from "@/repositories/enrollment-repository";

async function getHotels(userId: number) {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
    
  if(!enrollment) {
    throw notFoundError();
  }
    
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

