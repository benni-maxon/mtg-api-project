import React from 'react';
import { useCards } from '../../hooks/magicHook.js';
import './List.css';

export default function List() {
  const { cards } = useCards();
  return (
    <div className="list-container">
      {cards.map((card) => (
        <img className="card-img" key={card.id} src={card.imageUrl} />
      ))}
    </div>
  );
}
