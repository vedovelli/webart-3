/* eslint-disable no-undef */

/// <reference types="cypress" />

import { makeServer } from "../../src/miragejs";

let server;

beforeEach(() => {
  server = makeServer({ environment: "test" });
});

afterEach(() => {
  server.shutdown();
});

describe("Movies", () => {
  it("can get a list of movies", () => {
    cy.visit("http://localhost:8080");

    cy.get('[data-testid="search-input"]').type("movie1");

    cy.get('[data-testid="search-form"]').submit();

    cy.get('[data-testid="movie-list"]').should("be.visible");
    cy.get('[data-testid="no-results"]').should("not.be.visible");
  });

  it("displays a message when no movie is found", () => {
    cy.visit("http://localhost:8080");

    cy.get('[data-testid="search-input"]').type("movieX");

    cy.get('[data-testid="search-form"]').submit();

    cy.get('[data-testid="movie-list"]').should("not.be.visible");
    cy.get('[data-testid="no-results"]').should("be.visible");
  });

  it("clears movie list if no term is present in the search input", () => {
    cy.visit("http://localhost:8080");

    cy.get('[data-testid="search-input"]').type("movie1");

    cy.get('[data-testid="search-form"]').submit();

    cy.wait(500);

    cy.get('[data-testid="search-input"]').clear();

    cy.get('[data-testid="movie-list"]').should("not.be.visible");
    cy.get('[data-testid="no-results"]').should("not.be.visible");
  });

  it.only("displays 5 movies for query movieX", () => {
    server.createList("movie", 30);
    server.createList("movie", 5, { title: "movieX" });

    cy.visit("http://localhost:8080");

    cy.get('[data-testid="search-input"]').type("movieX");

    cy.get('[data-testid="search-form"]').submit();

    cy.get('[data-testid="movie-card"]').should("have.length", 5);
  });
});
