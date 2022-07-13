const router = require('express').Router();
const successJson = {success: true};

router.get('/', (_, res) => {
    res.status(200).json(successJson)
})

module.exports = router;