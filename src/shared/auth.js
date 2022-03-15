// src/shared/auth.js
const arc = require('@architect/functions');
const jwt_decode = require('jwt-decode');
const jwt = require('jsonwebtoken');

module.exports = { auth }

async function auth(req) {

	const token = req.headers.authorization;

	try {
		console.log('DECODING');
		let decoded = jwt.verify(token, process.env.AUTH0_CLIENT_SECRET);
		console.log('DECODED********', decoded);

	} catch (err) {
		return {
			status: 401,
			json: { errors: [ 'invalid_jwt' ] }
		}
	}

	//
	// if (!token) {
	// 	return {
	// 		status: 401,
	// 		json: { errors: [ 'authorization_token_missing' ] }
	// 	}
	// }
	//
	// try {
	// 	const decoded = jwt_decode(token)
	// 	console.log('decoded', decoded)
	// 	if (decoded.azp !== process.env.AUTH0_CLIENT_ID) {
	// 		return {
	// 			status: 401,
	// 			json: { errors: [ 'token_audience_invalid' ] }
	// 		}
	// 	}
	// } catch (err) {
	// 	return {
	// 		status: 401,
	// 		json: { errors: [ 'invalid_jwt' ] }
	// 	}
	// }
	// return
}