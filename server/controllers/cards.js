import db from '../config/db.js'

export const createMulti = (req, res) => {
    const q = 'INSERT INTO four_choices (question, option_1, option_2, option_3, option_4, answer, category, createdBy) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'

    const question = req.body.question;
    const optionOne = req.body.optionOne;
    const optionTwo = req.body.optionTwo;
    const optionThree = req.body.optionThree;
    const optionFour = req.body.optionFour;
    const answer = req.body.answer;
    const categoryMulti = req.body.categoryMulti;
    const createdBy = req.body.createdBy

    db.query(q, [question, optionOne, optionTwo, optionThree, optionFour, answer, categoryMulti, createdBy], (err, result) => {
        if(err) throw err
        res.send("The card has been created!")
    })
}

export const createFlip = (req, res) => {
    const q = 'INSERT INTO flip_cards (face, back, category, createdBy) VALUES (?, ?, ?, ?)'

    const face = req.body.face;
    const back = req.body.back;
    const categoryFlip = req.body.categoryFlip;
    const createdBy = req.body.createdBy;

    db.query(q, [face, back, categoryFlip, createdBy], (err, result) =>{
        if(err) throw err
        res.send("The card has been created!")
    })
}