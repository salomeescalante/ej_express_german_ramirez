const express = require('express');

const app = express();

app.get('/me', (request, response) => {
    response.status(200).json({
        name: 'German',
        age: 44,
        country: 'Colombia',
        verb: request.method
    })
})


app.post('/metas', (request, response) => {
    response.status(200).json({
        hobbies: 'play chesse, movies, to travel',
        verb: request.method
    })
})

app.patch('/business', (request, response) => {
    response.status(200).json({
        goals: 'I hope to work freely within the world of web development',
        verb: request.method
    })
})

app.put('/business', (request, response) => {
    response.status(200).json({
        companies: 'Amazon, Globant, Facebook',
        verb: request.method
    })
})

app.listen(8000, () => {
    console.log('Server started at port 8000')
})