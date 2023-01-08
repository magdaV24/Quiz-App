import axios from "axios";
import { useEffect, useState } from "react";

export const useFlipCards = (categ, createdBy) => {
    
  const [card, setCard] = useState('')

    useEffect(() => {
        const fetchACard = async () => {
          try {
            const res = await axios.get(`http://localhost:5000/server/cards/flip/${categ}/${createdBy}`);
            setCard(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchACard();
      }, [categ, createdBy])

      return card
}