import axios from "axios";
import { useEffect, useState } from "react";

export const useMultiCards = (input) => {

    const [cards, setCards] = useState('')

    const categ = input.categ;
    const createdBy = input.createdBy;
    const limit = input.limit;

    useEffect(() => {
        const fetchACard = async () => {
          try {
            const res = await axios.get(`http://localhost:5000/server/cards/multi/${categ}/${createdBy}/${limit}`);
            setCards(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchACard();
      }, [categ, createdBy, limit])

      return cards

}