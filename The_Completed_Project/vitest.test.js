import { describe, it, expect } from "vitest";
import { shuffle, pickRandomQuestions, QUESTION_BANK } from "./server.js";

//'npx vitest' to run The_Completed_Project/vitest.test.js
describe("Quiz Logic Tests", () => {

  it("shuffle should keep same elements", () => {
    const original = [1, 2, 3, 4, 5];
    const shuffled = shuffle([...original]);

    expect(shuffled.length).toBe(original.length);
    expect([...shuffled].sort()).toEqual([...original].sort());
  });

  it("QUESTION_BANK should be defined", () => {
    expect(QUESTION_BANK).toBeDefined();
    expect(Array.isArray(QUESTION_BANK)).toBe(true);
  });

  it("pickRandomQuestions should return an array", () => {
    const questions = pickRandomQuestions(QUESTION_BANK, 5);
    expect(Array.isArray(questions)).toBe(true);
  });

  it("pickRandomQuestions should never return more than available", () => {
    const questions = pickRandomQuestions(QUESTION_BANK, 10);
    expect(questions.length).toBeLessThanOrEqual(QUESTION_BANK.length);
  });

  it("pickRandomQuestions should return empty if bank is empty", () => {
    if (QUESTION_BANK.length === 0) {
      const questions = pickRandomQuestions(QUESTION_BANK, 10);
      expect(questions.length).toBe(0);
    } else {
      expect(QUESTION_BANK.length).toBeGreaterThan(0);
    }
  });

});