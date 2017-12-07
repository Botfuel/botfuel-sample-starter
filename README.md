# Botfuel SDK Sample starter bot

## How to run the bot

Clone the repository:

```shell
git clone git@github.com:Botfuel/sample-bot-starter.git
```

Install dependencies:

```shell
cd sample-bot-starter
npm install
```

Start the bot:

```shell
BOTFUEL_APP_ID=<YOUR_BOTFUEL_APP_ID> BOTFUEL_APP_KEY=<YOUR_BOTFUEL_APP_KEY> npm start
```

If you set your app credentials right, you should see:

```shell
2017-12-07T16:12:09.131Z - info: [Bot] BOT_ID starter
2017-12-07T16:12:09.133Z - info: [Bot] BOTFUEL_APP_ID <YOUR_BOTFUEL_APP_ID>
2017-12-07T16:12:09.133Z - info: [Bot] BOTFUEL_APP_KEY <YOUR_BOTFUEL_APP_KEY>
> onboarding
```

Try typing `Hello` or `My name is <YOUR_NAME>`!

## License

See the [LICENSE](LICENSE.md) file.
