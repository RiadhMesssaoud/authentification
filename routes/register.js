const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

//register user


router.post("/", [
        body('firstname').isAlpha(),
        body('lastname').isAlpha(),
        body('email').isEmail(),
        body('phone').isNumeric(),
        body('password').isLength({ min: 5 })
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        res.send(req.body);
    });
module.exports = router;