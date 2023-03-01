import React from 'react';
import { useCards } from '../../hooks/magicHook.js';
import './List.css';

export default function List() {
  const { cards } = useCards();
  console.log(cards);
  return (
    <div>
      <h1>List</h1>
      {cards.map((card) => (
        <img key={card.id} src={card.imageUrl} />
      ))}
    </div>
  );
}
