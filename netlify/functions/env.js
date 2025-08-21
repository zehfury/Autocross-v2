exports.handler = async function handler(event, context) {
	const mapsApiKey = process.env.GOOGLE_MAPS_API_KEY || '';
	return {
		statusCode: 200,
		headers: { 'Content-Type': 'application/javascript; charset=utf-8' },
		body: `window.GOOGLE_MAPS_API_KEY = ${JSON.stringify(mapsApiKey)};`
	};
};


