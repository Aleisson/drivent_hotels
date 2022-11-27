import { notFoundError } from "@/errors";
import hotelsRepository from "@/repositories/hotels-repository";
import enrollmentRepository from "@/repositories/enrollment-repository";
import ticketRepository from "@/repositories/ticket-repository";
import paymentRepository from "@/repositories/payment-repository";

async function getHotels(userId: number) {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
    
  if(!enrollment) {
    throw notFoundError();
  }

  const ticket = await ticketRepository.findTicketByEnrollmentId(enrollment.id);

  if(!ticket || ticket.TicketType.includesHotel === false) {
    throw notFoundError();
  }

  const payment = await paymentRepository.findPaymentByTicketId(ticket.id);

  if(!payment) {
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

