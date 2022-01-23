export const ARRAY = [];
const ARRAY_LIMIT = 12;
export function genRandom() {
  return Math.floor(Math.random() * (100 - 1) + 1);
}
for (let i = 0; i < ARRAY_LIMIT; i++) ARRAY.push(genRandom());
