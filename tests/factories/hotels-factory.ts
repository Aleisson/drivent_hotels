import faker from "@faker-js/faker";
import { prisma } from "@/config";

export async function createTicketTypeHotels(includesHotel: boolean) {
  return prisma.ticketType.create({
    data: {
      name: faker.name.findName(),
      price: faker.datatype.number(),
      isRemote: faker.datatype.boolean(),
      includesHotel,
    }
  });
}
export async function createHotels() {
  return prisma.hotel.create({
    data: {
      name: faker.company.companyName(),
      image: faker.image.imageUrl(),
    }
  });
}

export async function creteRooms(hotelId: number) {
  return prisma.room.create({
    data: {
      name: faker.name.findName(),
      capacity: faker.datatype.number({ min: 1000, max: 9999 }),
      hotelId: hotelId
    }
  });
}

