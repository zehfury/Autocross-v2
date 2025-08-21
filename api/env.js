module.exports = (req, res) => {
	const mapsApiKey = process.env.GOOGLE_MAPS_API_KEY || '';
	const trackLatitude = process.env.TRACK_LATITUDE || '';
	const trackLongitude = process.env.TRACK_LONGITUDE || '';
	const trackName = process.env.TRACK_NAME || '';
	const trackAddress = process.env.TRACK_ADDRESS || '';
	res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
	res.status(200).send(
		`window.GOOGLE_MAPS_API_KEY = ${JSON.stringify(mapsApiKey)};\n` +
		`window.TRACK_LATITUDE = ${JSON.stringify(trackLatitude)};\n` +
		`window.TRACK_LONGITUDE = ${JSON.stringify(trackLongitude)};\n` +
		`window.TRACK_NAME = ${JSON.stringify(trackName)};\n` +
		`window.TRACK_ADDRESS = ${JSON.stringify(trackAddress)};\n`
	);
};


