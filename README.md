# sample-botfuel-dialog-starter

This sample bot is used in [**Getting Started**](https://github.com/Botfuel/botfuel-dialog/blob/master/GETTING_STARTED.md).

## How to run the bot

Clone the repository:

```shell
git clone git@github.com:Botfuel/sample-botfuel-dialog-starter.git
```

Install dependencies:

```shell
cd sample-botfuel-dialog-starter
npm install
```

Start the bot:

```shell
BOTFUEL_APP_TOKEN=<YOUR BOT ID> BOTFUEL_APP_ID=<YOUR BOTFUEL_APP_ID> BOTFUEL_APP_KEY=<YOUR BOTFUEL_APP_KEY> npm start
```

If you set your app credentials right, you should see:

```shell
2017-12-07T16:12:09.131Z - info: [Config] You didn't specify any config file, using default config.
2017-12-07T16:12:09.131Z - info: [Bot] BOTFUEL_APP_TOKEN starter
2017-12-07T16:12:09.133Z - info: [Bot] BOTFUEL_APP_ID <YOUR_BOTFUEL_APP_ID>
2017-12-07T16:12:09.133Z - info: [Bot] BOTFUEL_APP_KEY <YOUR_BOTFUEL_APP_KEY>
> onboarding
```

Try typing `Hello` or `My name is <YOUR_NAME>`!

## Need help ?

- See [**Concepts**](https://github.com/Botfuel/botfuel-dialog/blob/master/CONCEPTS.md) for explanations about the internals of the SDK.

## License

See the [LICENSE](LICENSE.md) file.
