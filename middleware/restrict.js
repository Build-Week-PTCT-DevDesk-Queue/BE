const jwt = require("jsonwebtoken")

function restrict() {
	return async (req, res, next) => {
		const authError = {
			message: "You must be logged in",
		}

        const token = req.cookies.token || req.headers['authorization'];
            
            if (!token) {
                return res.status(401).json({message: 'Token not found.'})
            }

		try {

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = decoded;

            next();

		} catch(err) {
			res.status(400).send('Invalid token.')
		}
	}
}

module.exports = restrict