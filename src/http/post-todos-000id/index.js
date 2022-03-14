// src/http/post-todos-000id/index.js
const arc = require('@architect/functions')
const { upsert } = require('@architect/shared/crud')

exports.handler = arc.http.async(http)

async function http (req) {
	await upsert(req.session.accountID, { ...req.body, id: req.params.id})

	return {
		location: `/`
	}
}