const { View, ActionsMessage, Postback } = require('botfuel-dialog');

class TestView extends View {
  render() {
    return [
      new ActionsMessage([
        new Postback('Sangoku', 'name', [{ dim: 'forename', values: [{ value: 'Sangoku' }] }]),
        new Postback('Wonder Woman', 'name', [{ dim: 'forename', values: [{ value: 'Wonder Woman' }] }]),
        new Postback('Superman', 'name', [{ dim: 'forename', values: [{ value: 'Superman' }] }]),
      ]),
    ];
  }
}

module.exports = TestView;
