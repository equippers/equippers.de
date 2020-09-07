# equippers.de

Equippers website for Germany. Built with Jekyll, hosted on [Cloudcannon](https://cloudcannon.com).

## Install

 ```sh
gem install bundler # only if needed
bundle install
```

 ## Develop

 ```sh
npm start
```

The dev server automatically re-generates js and css files on save and has live-reload enabled.

The following editor plugins are recommended:

* [Editorconfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [language-stylus](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus)
* [Liquid](https://marketplace.visualstudio.com/items?itemName=sissel.shopify-liquid)

 ## Build

 ```sh
npm run build # or
npm run build:prod # sets JEKYLL_ENV=production
```

## Workflow

Cloudcannon is set up to track changes on the `master` branch of this repository, so pushing to `master` automatically triggers a new build. Changes through the client interface will also be pushed into `master`.

If you work on major changes, please create a branch and then a pull request to merge back into `master`, and add someone for code review.

## Information

### Plugins

The **`bundle-js`** plugin takes care of installing npm packages and generating the Javascript bundle (`js/bundle.js`) before the `js` folder gets copied into the output. It is generated from the Tyepscript source files in `_js/src` and bundled using Rollup.

The **`stylus-converter`** plugin transpiles `styles/main.styl` (or any file with a front-matter) into a css file. (Note: for some reason this plugin does not work properly when the `--incremental` build flag for jekyll is set.)

### Documentation

* https://learn.cloudcannon.com
* https://docs.cloudcannon.com
* https://jekyllrb.com/docs/home
* http://stylus-lang.com

## License

Unlicensed. © Equippers - All rights reserved.
