const { PromptView, BotTextMessage } = require('botfuel-dialog');

class NameView extends PromptView {
  render(userMessage, { matchedEntities }) {
    const name = matchedEntities.name && matchedEntities.name.values[0].value;

    if (name) {
      const [firstLetter, ...letters] = name;
      const capitalizedName = `${firstLetter.toUpperCase()}${letters.join('')}`;

      return [
        new BotTextMessage(`Nice to meet you ${capitalizedName}!`),
      ];
    }

    return [new BotTextMessage('Sorry, I did not understand!')];
  }
}

module.exports = NameView;
