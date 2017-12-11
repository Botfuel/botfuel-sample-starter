'use strict';

const sdk2 = require('@botfuel/bot-sdk2');

class NameExtractor extends sdk2.WsExtractor {}

NameExtractor.params = {
  dimensions: ['forename'],
};

module.exports = NameExtractor;
