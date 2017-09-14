var fs = require('fs');
var path = require('path');


module.exports = {
	// Map of hooks
	hooks: {

		"finish" : function () {
			// favicon.ico - pluginsConfig.favicon setting
			var pathFile = this.options.pluginsConfig && this.options.pluginsConfig.favicon;
			var favicon = path.join(process.cwd(), pathFile);
			var gitbookFaviconPath = path.join(process.cwd(), '_book', 'gitbook', 'images', 'favicon.ico');
			if (pathFile && fs.existsSync(pathFile) && fs.existsSync(gitbookFaviconPath)){
				fs.unlinkSync(gitbookFaviconPath);
				fs.createReadStream(favicon).pipe(fs.createWriteStream(gitbookFaviconPath));
			}
			// apple-touch-icon-precomposed-152.png - pluginsConfig.iosFavicon setting
			var iosPathFile = this.options.pluginsConfig && this.options.pluginsConfig.iosFavicon;
			var iosFavicon = path.join(process.cwd(), iosPathFile);
			var gitbookIosFaviconPath = path.join(process.cwd(), '_book', 'gitbook', 'images', 'apple-touch-icon-precomposed-152.png');
			if (iosPathFile && fs.existsSync(iosPathFile) && fs.existsSync(gitbookIosFaviconPath)){
				fs.unlinkSync(gitbookIosFaviconPath);
				fs.createReadStream(iosFavicon).pipe(fs.createWriteStream(gitbookIosFaviconPath));
			}
		}
	},

	// Map of new blocks
	blocks: {},

	// Map of new filters
	filters: {}
};
