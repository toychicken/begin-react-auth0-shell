// src/http/post-todos/index.js
const arc = require('@architect/functions')
const { upsert } = require('@architect/shared/crud')

exports.handler = arc.http.async(http)

async function http (req) {
	await upsert(req.session.accountID, req.body)

	return {
		location: `/`
	}
}