module.exports = ({ env }) => ({
	url: env('APP_URL'),
	proxy: true,
	app: {
		keys: env.array('APP_KEYS', ['7a006609dcdecc5b', '424308b58181ae7f'])
	}
});