![](https://img.shields.io/badge/Microverse-blueviolet)

# Leaderboard API

> The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external [Leaderboard API service](https://www.notion.so/microverse/Leaderboard-API-service-24c0c3c116974ac49488d4eb0267ade3).

## Built With

- JavaScript
- HTML
- CSS
- Webpack for JS

## Getting Started

To get a local copy up and running follow these simple example steps:

- Clone the repo with `git clone https://github.com/ad9311/leaderboard-api.git`
- Change directory to the root folder `cd leaderboard-api`
- Run `npm install`
- To start the server run `npm start`<br>

If make any changes, be sure to run `npm run build` to compiled them.<br>
To load the compile version it is necessary to use a 'live server' tool.<br>

## Live Version

There is a live version available in: [leaderboard-api](https://ad9311.github.io/leaderboard-api/dist/)

### Prerequisites

- [Node.Js](https://nodejs.org/en/)
- [NPM](https://github.com/ad9311/webpack-todo-list.git)

### Usage

> When you start the application for the very first time, it will send a request to the leaderboard API to get a brand new ID for your game.<br>
After that, you can add a new score. To see the score in the board, click the refresh button.<br>
If you close the application and open it again, and then click refresh, it will reload all the scores associated with the game ID.<br>
> **NOTE:** You may receive an error upon loading the app for the first time, please try again your action. Make sure you local storage has no key set to ad931lb-game-api

## Authors

👤 **Author1**

- GitHub: [@ad9311](https://github.com/ad9311)
- Twitter: [@adiaz9311](https://twitter.com/adiaz9311)
- LinkedIn: [Ángel Díaz](https://linkedin.com/in/adiaz9311)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/ad9311/leaderboard-api/issues).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](./LICENSE) licensed.
