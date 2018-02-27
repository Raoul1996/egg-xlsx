# egg-xlsx

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-xlsx.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-xlsx
[travis-image]: https://img.shields.io/travis/eggjs/egg-xlsx.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-xlsx
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-xlsx.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-xlsx?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-xlsx.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-xlsx
[snyk-image]: https://snyk.io/test/npm/egg-xlsx/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-xlsx
[download-image]: https://img.shields.io/npm/dm/egg-xlsx.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-xlsx

> read the excel file content plugin for egg framework, based on [js-xlsx](https://github.com/SheetJS/js-xlsx)

## Install

```bash
$ npm i egg-xlsx --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.xlsx = {
  enable: true,
  package: 'egg-xlsx',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.xlsx = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

### Upload the xlsx file and get the content

```js
// {app_root}/app/controller/xlsx.js
const Contrller = require('egg').Controller

class XlsxController extends Contrller {
  async index() {
    const {ctx, app} = this
    const res = await app.xlsx.analysis(ctx)
    ctx.body = res
  }
}
module.exports = XlsxController
```
### More function
<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
