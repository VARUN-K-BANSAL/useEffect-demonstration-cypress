import React from "react";
import Counter from "./Counter";
import App from "../App";

describe("<Counter />", () => {

  beforeEach(() => {
    cy.window().then((win) => {
      cy.spy(win.console, "log").as("logSpy");
    });
  })

  
  it("renders", () => {
    cy.mount(<Counter />);
    cy.get("h1").should("contains.text", "Count: 0");
    cy.get("button").should("contains.text", "Increment");
    cy.get("input").should("exist");
  });

  it("check if increment works", () => {
    cy.mount(<Counter />);
    cy.get("h1").should("contains.text", "Count: 0");
    cy.get("#increment").should("contains.text", "Increment").click();
    cy.get("h1").should("contains.text", "Count: 1");
    cy.get("@logSpy").should("be.calledWith", "Count updated");
  });

  it("updates text on input change", () => {
    cy.mount(<Counter />);
    cy.get("input").type("Hello, world!");
    cy.get('input').should('have.value', 'Hello, world!')
    cy.wait(1000);
    cy.get('@logSpy').should('be.calledWith', 'Text updated');
  });

  it("clears interval on unmount", () => {
    cy.mount(<App />);
    cy.get('#unmount').click();
    cy.get("@logSpy").should("be.calledWith", "Interval cleared");
  });

  it('Count changes on anyother state change', () => {
    cy.mount(<Counter />);
    cy.get("input").type("Hello, world!");
    cy.get('input').should('have.value', 'Hello, world!')
    cy.get('#countValField').should('have.text', '1')
  })
  
  it('Text changes on anyother state change', () => {
    cy.mount(<Counter />);
    cy.get("#increment").should("contains.text", "Increment").click();
    cy.get('#textValField').should('have.text', '1')
  })
});
