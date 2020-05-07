const express = require('express')

const server = express();
server.use(express.json())

const postRouter = require('./routers/post-router')

server.get('/', (req, res) => {

    res.json({query: req.query, params: req.params, headers: req.header})
})

server.use('/api/posts', postRouter)

server.listen(8000, () => console.log('\n == API is Running on localhost:8000 == \n'))