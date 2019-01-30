const { BotfuelAdapter, BotTextMessage } = require('botfuel-dialog');

class BotfuelOkAdapter extends BotfuelAdapter {
  async handleMessage(userMessage) {
    await this.addUserIfNecessary(userMessage.user);
    const botMessage = this.extendMessage(new BotTextMessage('OK').toJson(userMessage.user));
    await this.sendMessage(botMessage);
  }
}

module.exports = BotfuelOkAdapter;
