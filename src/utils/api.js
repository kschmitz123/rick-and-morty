export async function getCharacterByID(id) {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
}
