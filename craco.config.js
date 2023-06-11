const path = require('path')

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
	webpack: {
		alias: {
			'@components': resolvePath('src/components'),
			'@assets': resolvePath('src/assets'),
			'@hooks': resolvePath('src/hooks'),
			'@shared': resolvePath('src/shared'),
			'@store': resolvePath('src/store'),
			'@interfaces': resolvePath('src/interfaces'),
			'@utils': resolvePath('src/utils'),
			'@config': resolvePath('src/config'),
			'@pages': resolvePath('src/pages'),
		},
	},
}
