const router = require('express').Router();
const bcrypt = require('bcryptjs');
const users = require('./users-model');
const validateUser = require('../../middleware/validateUser');

router.post('/register', validateUser, async (req, res, next) => {
   try { 
    const {username, password, role} = req.body;
    const user = await users.findBy({username}).first();

    if(user){
        return res.status(409).json({message: 'Username already exists.'});
    }

    const newUser = await users.add({
        username,
        password: await bcrypt.hash(password, 16),
        role
    });

    res.status(201).json(newUser);
    } catch (err){
        next(err);
    }
});

router.post('/login', validateUser, async (req, res, next) => {
    try {
        const {username, password} = req.body;
        const user = await users.findBy({username}).first();

        if(!user){
            return res.status(401).json({message: 'Invalid username.'})
        }

        const validatePassword = await bcrypt.compare(password, user.password);

        if(!validatePassword) {
            res.status(401).json({message: 'Invalid password.'});
        };

        res.status(200).json(`Welcome, ${user.username}!`);

    } catch (err) {
        next(err);
    }
});

// router.get("/logout", authenticate, async (req, res, next) => {
// 	try {
// 		req.session.destroy((err) => {
// 			if (err) {
// 				next(err);
// 			} else {
// 				res.status(204).end();
// 			}
// 		});
// 	} catch (err) {
// 		next(err);
// 	}
// });

module.exports = router;