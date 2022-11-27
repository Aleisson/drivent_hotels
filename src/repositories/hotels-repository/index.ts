import { prisma } from "@/config";
import { Room } from "@prisma/client";

async function findHotels() {
  return prisma.hotel.findMany();
}

async function findHotelsIdWithRoom(hotelId: number) {
  return prisma.hotel.findFirst({
    where: {
      id: hotelId
    },
    include: {
      Rooms: true,
    }
  });
}

const hotelsRepository = {
  findHotels,
  findHotelsIdWithRoom
};

export default hotelsRepository;
