const jwt = require("jsonwebtoken")

function restrict() {
	return async (req, res, next) => {
		const authError = {
			message: "You must be logged in",
		}

		try {
            const token = req.cookies.token
            
            if (!token) {
                return res.status(401).json({message: 'Cookie not found.'})
            }

            jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
                if (err) {
                    console.log(err)
                    return res.status(401).json({message: 'Cookie not verified'})
                }

                req.token = decoded

                next()
            })
		} catch(err) {
			next(err)
		}
	}
}

module.exports = restrict