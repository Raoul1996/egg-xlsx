'use strict';
const path = require('path');
const { uploadFile } = require('../utils/koasub');
const { sprintf } = require('printj');
const { IncomingForm } = require('formidable');
const { fork } = require('child_process');
const logit = require('../utils/_logit');
const subprocess = fork(path.join(__dirname, '../utils/koasub.js'));
const get_data = async (ctx, type) => {
  await new Promise((resolve, reject) => {
    const cb = (data) => {
      ctx.response.body = Buffer(data);
      subprocess.removeListener('message', cb);
      resolve();
    };
    subprocess.on('message', cb);
    subprocess.send([ 'get data', type ]);
  });
};

const get_file = async (ctx, file) => {
  await new Promise((resolve, reject) => {
    const cb = (data) => {
      ctx.response.body = Buffer(data);
      subprocess.removeListener('message', cb);
      resolve();
    };
    subprocess.on('message', cb);
    subprocess.send(['get file', file]);
  });
};

const load_data = async (ctx, file) => {
  await new Promise((resolve, reject) => {
    const cb = data => {
      ctx.response.body = data;
      subprocess.removeListener('message', cb);
      resolve(data);
    };
    subprocess.on('message', cb);
    subprocess.send(['load data', file]);
  });
};

const post_data = async (ctx) => {
  const keys = Object.keys(ctx.request._files), k = keys[0];
  const data = await load_data(ctx, ctx.request._files[k].path);
};


class Xlsx {
  constructor(app) {
    this.config = app.config.xlsx;
  }
  async analysis(ctx) {
    const form = new IncomingForm();
    const data = {};
    await new Promise((resolve, reject) => {
      form.parse(ctx.req, (err, fields, files) => {
        if (err) return reject(err);
        ctx.request._fields = fields;
        ctx.request._files = files;
        resolve();
      });
    }).then(async () => {
      if (ctx.request.query.f) {
        await load_data(ctx, ctx.request.query.f);
      } else {
        await post_data(ctx);
      }
    });
    return ctx.response.body[1];
  }
}
const mount = app => {
  app.xlsx = new Xlsx(app);
};
module.exports = mount;
