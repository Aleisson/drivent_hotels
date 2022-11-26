import app, { init } from "@/app";
import supertest from "supertest";

beforeAll(async () => {
  await init();
});

const server = supertest(app);

describe("GET /hotels", () => {
  it("shoud respond with status 501", async () => {
    const response = await server.get("/hotels");

    expect(response.status).toBe(501);
  });
});
