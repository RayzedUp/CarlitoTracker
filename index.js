require('dotenv').config()
const express = require("express");
const app = express()

app.listen(3000, () => {
  console.log("Project is running!");
})

app.get("/" , (req, res) => {
  res.send("Hello world!");
})

const Discord = require("discord.js");
const keep_alive = require('./keep_alive.js')
const client = new Discord.Client({ intents: ["Guilds", "GuildMessages", "MessageContent"]})

client.on("messageCreate", message => {
  if(message.content === "ping") {
        message.channel.send("pong")
  }
})

client.login(process.env.token);
