import { faker } from "@faker-js/faker";

describe("Create folder and note", async () => {
  beforeEach(async () => {
    await cy.request("POST", "http://localhost:4000/e2e/reset", {});
  });

  const user = {
    name: faker.lorem.words(1),
    email: faker.internet.email(),
    image: faker.image.animals(),
    password: faker.internet.password(10),
  };

  await it("user login", async () => {
    const folderName = faker.lorem.words(1);
    const title = faker.lorem.words(2);
    const body = faker.lorem.words(10);

    cy.request("POST", `http://localhost:4000/signup`, user);

    cy.visit("http://localhost:3000/");

    cy.get('input[placeholder="E-mail"]').type(user.email);
    cy.get('input[placeholder="Senha"]').type(user.password);
    cy.contains("Entrar").click();

    cy.url().should("eq", "http://localhost:3000/home");

    cy.get("#addFolder").click();
    cy.get('input[placeholder="Folder Name"]').type(folderName);
    cy.get("#add").click();
    cy.contains(folderName).should("be.visible");

    cy.get("#addNote").click();
    cy.contains("Nova nota").should("be.visible");

    cy.contains("Nova nota").click();
    cy.get('textarea[placeholder="Escreva sua nota aqui..."]').type(body);
    cy.contains("Atualizar Campos").click();
  });
});
