import axios from "axios";
import { useEffect, useState } from "react";

export const useFlipCards = (categ, createdBy) => {
    
  const [cards, setCards] = useState('')

    useEffect(() => {
        const fetchACard = async () => {
          try {
            const res = await axios.get(`http://localhost:5000/server/cards/flip/${categ}/${createdBy}`);
            setCards(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchACard();
      }, [categ, createdBy])

      return cards
}