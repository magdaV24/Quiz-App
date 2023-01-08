import db from "../config/db.js";

// Creating a card with 4 options.

export const createMulti = (req, res) => {
  const q =
    "INSERT INTO four_choices (question, option_1, option_2, option_3, answer, category, createdBy) VALUES (?, ?, ?, ?, ?, ?, ?)";

  const question = req.body.question;
  const optionOne = req.body.optionOne;
  const optionTwo = req.body.optionTwo;
  const optionThree = req.body.optionThree;
  const answer = req.body.answer;
  const categoryMulti = req.body.categoryMulti;
  const createdBy = req.body.createdBy;

  db.query(
    q,
    [
      question,
      optionOne,
      optionTwo,
      optionThree,
      answer,
      categoryMulti,
      createdBy,
    ],
    (err, result) => {
      if (err) throw err;
      res.send("The card has been created!");
    }
  );
};

// Creating a flip card.

export const createFlip = (req, res) => {
  const q =
    "INSERT INTO flip_cards (face, back, category, createdBy) VALUES (?, ?, ?, ?)";

  const face = req.body.face;
  const back = req.body.back;
  const categoryFlip = req.body.categoryFlip;
  const createdBy = req.body.createdBy;

  db.query(q, [face, back, categoryFlip, createdBy], (err, result) => {
    if (err) throw err;
    res.send("The card has been created!");
  });
};

// Fetching the multi-choice cards.

export const getMultiCards = (req, res) => {
  const q = "SELECT * FROM four_choices";

  db.query(q, [req.query], (err, result) => {
    if (err) throw err;
    return res.status(200).json(result);
  });
};

// Fetching the flip cards.

export const getFlipCards = (req, res) => {
  const q = "SELECT * FROM flip_cards";

  db.query(q, [req.query], (err, result) => {
    if (err) throw err;
    return res.status(200).json(result);
  });
};

// Fetching the categories of the multi-choices cards.

export const getMultiCategs = (req, res) => {
  const createdBy = req.params.createdBy
  const q = `SELECT DISTINCT category FROM four_choices WHERE createdBy = "${createdBy}"`;

  db.query(q, [req.query], (err, result) => {
    if (err) throw err;
    return res.status(200).json(result);
  });
};

// Fetching a random number of multi-choice cards

export const getRandomMultiCards = (req, res) => {
  const limit = req.params.limit;
  const categ = req.params.categ;
  const createdBy = req.params.createdBy;
  const q = `SELECT * FROM four_choices WHERE category = "${categ}" AND createdBy = "${createdBy}"  ORDER BY RAND() LIMIT ${limit}`;

  db.query(q, [categ, createdBy, limit], (err, result) => {
    if (err) throw err;
    return res.status(200).json(result);
  });
};

// Fetching the categories of the flip cards.

export const getFlipCategs = (req, res) => {
  const createdBy = req.params.createdBy
  const q = `SELECT DISTINCT category FROM flip_cards WHERE createdBy = "${createdBy}"`;

  db.query(q, [req.query], (err, result) => {
    if (err) throw err;
    return res.status(200).json(result);
  });
};

// Fetching one flip card.

export const getRandomFlipCard = (req, res) => {
  const categ = req.params.categ;
  const createdBy = req.params.createdBy;
  const q = `SELECT * FROM flip_cards WHERE category = "${categ}" AND createdBy = "${createdBy}"`;

  db.query(q, [categ, createdBy], (err, result) => {
    if (err) throw err;
    return res.status(200).json(result);
  });
};
