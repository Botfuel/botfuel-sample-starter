'use strict';

const sdk2 = require('@botfuel/bot-sdk2');

class Name extends sdk2.PromptDialog {}

Name.params = {
  namespace: 'name',
  entities: {
    name: {
      dim: 'forename',
    },
  },
};

module.exports = Name;
