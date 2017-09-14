# gitbook-plugin-custom-favicon
Add your own favicon to gitbook themes.

Plugin deletes the gitbook favicon located at `"_book/gitbook/images/favicon.ico"` and `"_book/gitbook/images/apple-touch-icon-precomposed-152.png"` and replaces them with your favicons.

There is probably a better way to do this, but this at least works for _most_ use cases.  However, this is a hack :smiley:

## Install via gitbook

### In book.json

* Add `custom-favicon` to your `plugins` array
* Add path to your favicon in `favicon` under `pluginsConfig`
* Add path to your iOS favicon (152x152px .png image) in `iosFavicon` under `pluginsConfig`

#### book.json
```json
{
	"plugins" : ["custom-favicon"],
	"pluginsConfig" : {
		"favicon": "path/to/favicon.ico",
		"iosFavicon": "path/to/iosFavicon.png"
	}
}
```

### using gitbook-cli

```bash
gitbook install
```

### Using NPM
```bash
npm install gitbook-plugin-custom-favicon
```



