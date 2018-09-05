const {
  QuickrepliesMessage,
  BotTextMessage,
  BotImageMessage,
  BotTableMessage,
  ActionsMessage,
  View,
  CardsMessage,
  Card,
  Link,
  Postback,
} = require('botfuel-dialog');

const tableSchema = {
  schema: [
    { key: 'name', label: 'Name' },
    { key: 'city', label: 'City' },
  ],
  rows: [
    { name: 'John', city: 'New York' },
    { name: 'Peter', city: 'Paris' },
  ],
};

const messages = [
  /**
   new BotTextMessage('Text message'),
   new ActionsMessage([
   new Link('link test', 'https://www.google.fr/'),
   new Postback('postback test', 'name', [{ dim: 'product', values: [{ value: 'Addidas' }] }]),
   ]),
   new BotImageMessage('https://media.giphy.com/media/kEKcOWl8RMLde/giphy.gif'),
   new BotTableMessage(tableSchema),
   new CardsMessage([
   new Card(
   'Addidas sneakers',
   'https://media.giphy.com/media/kEKcOWl8RMLde/giphy.gif',
   [
   new Link('Details', 'https://www.google.fr/'),
   new Postback('Buy', 'name', [{ dim: 'product', values: [{ value: 'Addidas' }] }]),
   ],
   ),
   new Card(
   'New Balance sneakers',
   'https://www.jcrew.com/s7-img-facade/G1378_BL8133?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&wid=636&hei=636',
   [
   new Link('Details', 'https://www.google.fr/'),
   new Postback('Buy', 'name', [{ dim: 'product', values: [{ value: 'New balance' }] }]),
   ],
   ),
   new Card(
   'Nike sneakers',
   'https://static.highsnobiety.com/wp-content/uploads/2018/02/02184722/favorite-all-black-sneakers-buy-online-01-480x320.jpg',
   [
   new Link('Details', 'https://www.google.fr/'),
   new Postback('Buy', 'name', [{ dim: 'product', values: [{ value: 'Nike' }] }]),
   ],
   ),
   new Card(
   'Asics sneakers',
   'https://www.jcrew.com/s7-img-facade/H7079_EG6389?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&wid=636&hei=636',
   [
   new Link('Details', 'https://www.google.fr/'),
   new Postback('Buy', 'name', [{ dim: 'product', values: [{ value: 'Asics' }] }]),
   ],
   ),
   new Card(
   'Vans sneakers',
   'https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$',
   [
   new Link('Details', 'https://www.google.fr/'),
   new Postback('Buy', 'name', [{ dim: 'product', values: [{ value: 'Vans' }] }]),
   ],
   ),
   ]),
   */
  new QuickrepliesMessage(['quick', 'replies', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']),
];

class CardView extends View {
  render() {
    return messages;
  }
}

module.exports = CardView;
