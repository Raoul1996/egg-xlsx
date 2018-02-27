'use strict';

const mock = require('egg-mock');

describe('test/xlsx.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/xlsx-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, xlsx')
      .expect(200);
  });
});
