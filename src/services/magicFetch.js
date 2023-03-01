export async function fetchCards() {
  const resp = await fetch('https://api.magicthegathering.io/v1/cards');
  const data = await resp.json();
  return data.cards;
}
