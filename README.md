# 🔌 Getting start
1. Make sure that you have [Node](https://nodejs.org/) on your machine (**LTS is recommended**)
2. First you need to install dependencies by using following command:
```shell
npm install

# OR

yarn

# OR

pnpm install
```
3. This app needs a **MongoDB Database address** from this [**Link** (login)](https://account.mongodb.com/account/login), please sign up and use your own **MongoDB Database address**. For doing this, you need
   to change the [.env.example](./.env.example) to `.env.local` and put your **MongoDB Database address** in the `MONGODB_URI`.


4. To run the app on development mode, you can use one of the commands below:
```shell
npm dev

# OR

yarn dev

# OR

pnpm dev
```

---
### 🚩 NVM
On Mac OS or Linux, you can use command below to install the exact node version which is used to create this app.
```shell
nvm use
```
### 🎬 Preview
![Showtime Preview](./src/assets/showtime-preview.gif)
