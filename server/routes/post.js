import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('It work')
})

export default router