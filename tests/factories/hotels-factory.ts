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
