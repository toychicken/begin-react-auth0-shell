const arc = require('@architect/functions');
const { upsert } = require('@architect/shared/crud');
const { auth } = require('@architect/shared/auth');
const { read } = require('@architect/shared/crud');

const handler = async (req) => {

	let session = await arc.http.session.read(req)
	let items = await read(session.accountID)

	try {
		return {
			statusCode: 200,
			headers: {
				'content-type': 'application/json; charset=utf8',
				'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
			},
			body: JSON.stringify(items)
		}


	} catch (e) {

		return {
			statusCode: 500,
			headers: {
				'content-type': 'application/json; charset=utf8',
				'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
			},
			body: `{"message" : "Error retrieving to do list"}`
		}
	}
}

exports.handler = arc.http.async(auth, handler);