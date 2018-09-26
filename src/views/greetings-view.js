const { View, BotTextMessage } = require('botfuel-dialog');

class GreetingsView extends View {
  render() {
    return [
      new BotTextMessage('Hello you!'),
    ];
  }
}

module.exports = GreetingsView;
