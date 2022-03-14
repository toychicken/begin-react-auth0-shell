// src/shared/auth.js
const arc = require('@architect/functions')
const jwt_decode = require('jwt-decode')

module.exports = { auth }

async function auth(req) {
	// const session = await arc.http.session.read(req)

	const token = req.headers.authorization;

	if (!token) {
		return {
			status: 401,
			json: { errors: [ 'authorization_token_missing' ] }
		}
	}

	try {
		const decoded = jwt_decode(token)
		console.log('decoded', decoded)
		if (decoded.aud !== process.env.AUTH0_CLIENT_ID) {
			return {
				status: 401,
				json: { errors: [ 'token_audience_invalid' ] }
			}
		}
	} catch (err) {
		return {
			status: 401,
			json: { errors: [ 'invalid_jwt' ] }
		}
	}
	return
}