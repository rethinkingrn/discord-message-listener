# Discord Message Listener

Listens for messages in a given channel, sends it to webhook (used for n8n workflow triggering)

Thanks to Deepseek once again 👍🏿

## Installation

- `git clone` the repository
- `cd discord-message-limiter`
- Configure `.env` (refer to the `.env` section)
- `npm install`

## Usage
- `node .`
- Test by having the correct role and pinging the bot
  - You will receive log message in the console if everything worked
### .env
- `DISCORD-TOKEN` - Bot token
- `WEBHOOK_URL` - Webhook url you want to trigger
- `TARGET_CHANNEL_ID` - Channel ID to listen from
- `REQUIRED_ROLE_ID` - Role ID needed to trigger the webhook
### Docker
- Configure everything above first then run the following:
```
docker build -t discord-message-listener .
docker run -d --name discord-message-listener --env-file .env discord-message-listener
```
> I'm not providing any support to this garbage code, you are on your own
