export const truncateWords = (word: string, length: number) => {
  const truncateWord = `${word.substring(0, length)}...`;
  return truncateWord;
};
