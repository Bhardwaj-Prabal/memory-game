// src/components/RandomArray.js

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function createUniqueRandomArray(length, min, max) {
  if (max - min + 1 < length) {
      throw new Error('Range is too small to generate the required number of unique values');
  }
  const arr = Array.from({ length: max - min + 1 }, (_, i) => i + min);
  return shuffleArray(arr).slice(0, length);
}

// Function to shuffle an array
export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}
