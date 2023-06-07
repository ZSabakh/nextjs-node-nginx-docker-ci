const { expect } = require("chai");
const app = require("../app");
const request = require("supertest")(app);

describe("GET /", () => {
  it("should return status 200 and json object with title property", async () => {
    const res = await request.get("/");
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("text");
  });
});
