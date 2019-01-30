const { BotfuelAdapter, BotTextMessage, Logger } = require('botfuel-dialog');
const convertHrtime = require('convert-hrtime');

const logger = Logger('BotfuelOkAdapter');

const measureTime = label => async (fn) => {
  const start = process.hrtime();
  const fnRes = await fn();
  const end = process.hrtime(start);

  logger.info(`[measure][${label}] ${convertHrtime(end).milliseconds.toFixed(1)} ms at ${new Date().toJSON()}`);
  return fnRes;
};

module.exports = measureTime;

class BotfuelOkAdapter extends BotfuelAdapter {
  /** @inheritDoc */
  async handleRequest(req, res) {
    logger.debug('handleRequest', req.body);
    res.sendStatus(200);
    await measureTime('Bot handled message')(() => this.handleMessage(req.body));
  }

  async handleMessage(userMessage) {
    await this.addUserIfNecessary(userMessage.user);
    const botMessage = this.extendMessage(new BotTextMessage('OK').toJson(userMessage.user));
    return this.sendMessage(botMessage);
  }
}

module.exports = BotfuelOkAdapter;
