const express = require('express')
const app = express()
const PORT = 8000

const islamicQuiz = {
    'Question One': {
        'Q': 'To have ______ in Allah is part of our iman. (a) love (b) faith (c) reliance',
        'A': 'faith'
    },
    'Question Two': {
        'Q': 'A Muslim has faith (Iman) in: Allah, _____, His Messengers, _____, Divine Destiny.',
        'A': 'His Books, The Day of Judgement'
    },
    'Question Three': {
        'Q': 'Allah sends His message to the Messenger through Angel ______. (a) Mikaa\'eel (b) Israafeel (c) Jibreel',
        'A': 'Jibreel'
    },
}

    


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.json(islamicQuiz)
})

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}! You better go catch it`)
})