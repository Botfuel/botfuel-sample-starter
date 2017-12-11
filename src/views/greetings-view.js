const { TextView } = require('@botfuel/bot-sdk2');

class GreetingsView extends TextView {
  getTexts() {
    return ['Hello human!'];
  }
}

module.exports = GreetingsView;
