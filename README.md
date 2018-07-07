# equippers.de

Equippers website for Germany. Built with Jekyll, hosted on [Cloudcannon](https://cloudcannon.com).

## Install

```
sudo gem install bundler
git clone git@github.com:equippers/equippers.de
cd equippers.de
bundle install
```

## Development

These editor plugins are recommended:

* [Editorconfig](https://editorconfig.org/#download)
* [Stylus Language Support](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus)
* [Jekyll Syntax Support](https://marketplace.visualstudio.com/items?itemName=ginfuru.ginfuru-vscode-jekyll-syntax)

To start a local development server, run

```
bundle exec jekyll serve --host=0.0.0.0
```

Then you can open http://localhost:4000 in your browser. Adding the `--host=0.0.0.0` cli argument to be able to access the site from other devices in your network (like your phone) by opening `http://<LOCAL_IP_OF_HOST>:4000` in the device's browser (or `http://<HOST_NAME>.local:4000` on Apple devices).

## Workflow

Cloudcannon is set up to track changes on the `master` branch of this repository, so pushing to `master` automatically triggers a new build. Changes through the client interface will also be pushed into `master`.

If you work on major changes, please create a branch and then a pull request to merge back into `master`, and add someone for code review.

## Documentation

* https://learn.cloudcannon.com
* https://docs.cloudcannon.com
* https://jekyllrb.com/docs/home
* http://stylus-lang.com

## License

Unlicensed. © Equippers Deutschland - All rights reserved.
