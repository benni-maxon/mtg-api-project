import { useEffect } from 'react';
import { useState } from 'react';
import { fetchCards } from '../services/magicFetch';

export function useCards() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // set loading state
    setLoading(true);
    // set up async fetch call
    const fetchData = async () => {
      // load cards
      const resp = await fetchCards();
      // set card state
      setCards(resp);
    };
    // fetch cards
    fetchData();
    // end loading state
    setLoading(false);
  }, []);

  return { cards, loading };
}
