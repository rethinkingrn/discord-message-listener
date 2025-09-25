const { Client, GatewayIntentBits } = require("discord.js");
const axios = require("axios");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log("✅ Bot is ready");
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (message.channel.id !== process.env.TARGET_CHANNEL_ID) return;

  try {
    await axios.get(process.env.WEBHOOK_URL);
    console.log("✅ GET request sent");
  } catch (error) {
    console.log("❌ Failed to send GET request");
  }
});

client.login(process.env.DISCORD_TOKEN);
