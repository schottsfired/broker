const test = require('tap-only');

test('config', t => {
  const foo = process.env.FOO = 'bar';
  const token = process.env.BROKER_TOKEN = '1234';

  const config = require('../../lib/config');

  t.equal(config.foo, foo, 'foo');
  t.equal(config.brokerToken, token, 'BROKER_TOKEN');
  t.end();
});
