import { truncateWords } from "./helpers";

describe("helpers", () => {
  it("should not truncate words when the word is shorter than specified length", () => {
    const word = "Hello World";
    const truncatedWord = truncateWords(word, 15);

    expect(truncatedWord.length).toBe(word.length);
  });
//   it("should truncate word when the word is greater than specified length", () => {
//     const word = "Hello World";
//     const truncatedWord = truncateWords(word, 1);

//     expect(truncatedWord.length).toBe(`${truncatedWord}...`.length);
//   });
});
