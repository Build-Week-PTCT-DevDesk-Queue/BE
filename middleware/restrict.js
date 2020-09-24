const jwt = require("jsonwebtoken")

function restrict() {
	return async (req, res, next) => {
		const authError = {
			message: "You must be logged in",
        }
        
        const token = req.headers['token'] || req.cookies.token;

        if (!token){
            return res.status(401).send('Access denied - no token found.')
        };


		try {
            jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {

                req.token = decoded

                next()
            })
		} catch(err) {
			next(err)
		}
	}
}

module.exports = restrict