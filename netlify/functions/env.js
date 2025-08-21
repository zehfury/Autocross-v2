exports.handler = async function handler(event, context) {
	const mapsApiKey = process.env.GOOGLE_MAPS_API_KEY || '';
	return {
		statusCode: 200,
		headers: {
			'Content-Type': 'application/javascript; charset=utf-8',
			'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
			'Netlify-CDN-Cache-Control': 'no-store'
		},
		body: `window.GOOGLE_MAPS_API_KEY = ${JSON.stringify(mapsApiKey)};`
	};
};


