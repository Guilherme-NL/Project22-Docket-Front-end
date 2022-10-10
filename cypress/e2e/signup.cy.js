import { faker } from "@faker-js/faker";

describe("POST signup", async () => {
  beforeEach(async () => {
    await cy.request("POST", "http://localhost:4000/e2e/reset", {});
  });

  const user = {
    name: faker.lorem.words(1),
    email: faker.internet.email(),
    image: faker.image.animals(),
    password: faker.internet.password(10),
  };
  console.log(user.email);

  await it("register new user", async () => {
    cy.visit("http://localhost:3000/signup");

    cy.get('input[placeholder="Nome"]').type(user.name);
    cy.get('input[placeholder="E-mail"]').type(user.email);
    cy.get('input[placeholder="Imagem"]').type(user.image);
    cy.get('input[placeholder="Senha"]').type(user.password);
    cy.contains("Cadastrar").click();

    cy.url().should("eq", "http://localhost:3000/");
  });
});
