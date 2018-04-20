const {
  Bot, BotTextMessage, UserTextMessage,
} = require('botfuel-dialog');
const config = require('../test-config');

describe('Test bot answers', () => {
  test('Bot says hello', async () => {
    const bot = new Bot(config);
    const { userId } = bot.adapter;
    await bot.play([
      new UserTextMessage('Hello!'),
    ]);
    expect(bot.adapter.log).toEqual([
      new UserTextMessage('Hello!'),
      new BotTextMessage('Hello human!'),
    ].map(o => o.toJson(userId)));
  });

  test('Bot greets with name', async () => {
    const bot = new Bot(config);
    const { userId } = bot.adapter;
    await bot.play([
      new UserTextMessage('My name is Bob'),
    ]);
    expect(bot.adapter.log).toEqual([
      new UserTextMessage('My name is Bob'),
      new BotTextMessage('Nice to meet you Bob!'),
    ].map(o => o.toJson(userId)));
  });

  test('Bot should not understand.', async () => {
    const bot = new Bot(config);
    const { userId } = bot.adapter;
    await bot.play([
      new UserTextMessage('Make me a sandwich'),
    ]);
    expect(bot.adapter.log).toEqual([
      new UserTextMessage('Make me a sandwich'),
      new BotTextMessage('Not understood.'),
    ].map(o => o.toJson(userId)));
  });
});
