const { WsExtractor } = require('botfuel-dialog');

class NameExtractor extends WsExtractor {}

NameExtractor.params = {
  dimensions: ['forename'],
};

module.exports = NameExtractor;
