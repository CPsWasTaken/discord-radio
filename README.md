<h1 align="center">
  <img src="https://cdn.discordapp.com/attachments/780443230176280596/946798705867104326/Logo-de-World-Hits-Radio-removebg-preview.png" width="224px" alt="radio"/>
<br/>
Discord Radio
</h1>
<h3 align="center">An <a href="https://nodejs.org/">NODE</a> Module For Playing Avalible Stations Into Discord Voice Channel Called <a href="https://www.npmjs.com/package/discord-radio">Discord-Radio</a></h3>
<h3 align="center">Using : <a href="https://www.npmjs.com/package/@discordjs/voice">@discordjs/voice</a> | <a href="https://www.npmjs.com/package/discord.js">discord.js </a> | <a href="https://www.npmjs.com/package/ffmpeg-static">ffmpeg-static</a> | <a href="https://www.npmjs.com/package/opusscript">opusscript</a> | <a href="https://www.npmjs.com/package/libsodium-wrappers">libsodium-wrappers</a></h3>

# 
## Functions :
</br>
<h4 align="center">
ARAB - BASS  - DANCE  - DISCO  - ELECTRONIC  - FARDA  - ILOVE  - JAVAN  - JAZZ  - KPOP  - LOFI  - LOFIANIME  - LOFIPANDA  - POP  - ROCK
</h4>

# 

## Function Object Info :
</br>

```
channelID : The Voice Channel ID That You Want To Play The Radio
```
```
guildID : The Server ID That Voice Channel Is There
```
```
logID : The Text Channel ID To Log The Bot Actions (Make Sure Bot Has SEND_MESSAGES Permission)
```
```
TOKEN : Bot Token 
```
## Example Of Usage :

```js
const { KPOP , JAZZ } = require('discord-radio')

KPOP({
    channelID: 'VOICE_ID',
    guildID: 'SERVER_ID',
    logID: 'LOG_CHANNEL_ID',
    TOKEN: 'YOUR_BOT_TOKEN'
})

JAZZ({
    channelID: 'VOICE_ID',
    guildID: 'SERVER_ID',
    logID: 'LOG_CHANNEL_ID',
    TOKEN: 'YOUR_BOT_TOKEN'
})

// --------- OR --------- //

const RADIO = require('discord-radio')

RADIO.JAZZ({
    channelID: 'VOICE_ID',
    guildID: 'SERVER_ID',
    logID: 'LOG_CHANNEL_ID',
    TOKEN: 'YOUR_BOT_TOKEN'
})

RADIO.POP({
    channelID: 'VOICE_ID',
    guildID: 'SERVER_ID',
    logID: 'LOG_CHANNEL_ID',
    TOKEN: 'YOUR_BOT_TOKEN'
})

```
Or Visit [test](https://github.com/hadiazt/discord-radio/blob/main/index.test.js) File 

</br>

<p align="center">
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/hadiazt/discord-radio">
    &nbsp;
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/hadiazt/discord-radio">
    &nbsp;
    <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
    &nbsp;
    <img src="https://img.shields.io/badge/IR-flag.svg?color=555555&style=flat&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwMCIgaGVpZ2h0PSI1NzIuMiIgdmlld0JveD0iLTcuMjE3IC00LjEyOSAxMDAwIDU3Mi4yIj48cGF0aCBkPSJNLTcuMjE3LTQuMTI5aDEwMDB2NTcyLjJoLTEwMDB6IiBmaWxsPSIjMjM5ZjQwIi8+PHBhdGggZD0iTS03LjIxNyAyODEuOTcxaDEwMDB2Mjg2LjFoLTEwMDB6IiBmaWxsPSIjZGEwMDAwIi8+PHBhdGggZD0iTS03LjIxNyAxODYuNTcxaDEwMDB2MTkwLjc1aC0xMDAweiIgZmlsbD0iI2ZmZiIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03LjIxNyAxNTUuNDcxKSBzY2FsZSg0LjQ0NDUpIj48ZyBpZD0iZSI+PGcgaWQ9ImMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiI+PHBhdGggaWQ9ImIiIGQ9Ik0zIC41aDEzTTMuNSA1VjIuNWg0djJoNHYtMkg5bS00IDJoMW0xMCAwaC0yLjV2LTJoNG0wLTIuNXY0LjVoNFYwbS0yIDB2NC41Ii8+PHBhdGggaWQ9ImEiIGQ9Ik0zIDdoOW0xIDBoOSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHVzZSB4bGluazpocmVmPSIjYSIgeT0iNDIuOTEzIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PHVzZSB4bGluazpocmVmPSIjYiIgeT0iNTEuOTEzIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9nPjxnIGlkPSJkIj48dXNlIHhsaW5rOmhyZWY9IiNjIiB4PSIyMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjx1c2UgeGxpbms6aHJlZj0iI2MiIHg9IjQwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PHVzZSB4bGluazpocmVmPSIjYyIgeD0iNjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L2c+PC9nPjx1c2UgeGxpbms6aHJlZj0iI2QiIHg9IjYwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PHVzZSB4bGluazpocmVmPSIjZSIgeD0iMTQwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9nPjxnIHRyYW5zZm9ybT0ibWF0cml4KDY5LjI4NSAwIDAgNjkuMjg1IDQ5Mi43ODMgMjgxLjk3MSkiIGZpbGw9IiNkYTAwMDAiPjxnIGlkPSJmIj48cGF0aCBkPSJNLS41NDguODM2QS45MTIuOTEyIDAgMCAwIC4zMjktLjcyMiAxIDEgMCAwIDEtLjU0OC44MzYiLz48cGF0aCBkPSJNLjYxOC42NjFBLjc2NC43NjQgMCAwIDAgLjQyMi0uNzQgMSAxIDAgMCAxIC42MTguNjYxTTAgMWwtLjA1LTFMMC0uNzg3YS4zMS4zMSAwIDAgMCAuMTE4LjA5OVYtLjFsLS4wNC45OTN6TS0uMDItLjg1TDAtLjgzMWEuMTQ0LjE0NCAwIDAgMCAuMjUyLS4xMzdBLjEzNi4xMzYgMCAwIDEgMC0uOTI1Ii8+PC9nPjx1c2UgeGxpbms6aHJlZj0iI2YiIHRyYW5zZm9ybT0ic2NhbGUoLTEgMSkiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L2c+PC9zdmc+" alt="ir">
</p>

<br/>
<br/>
<br/>

## 📊 Repo Stats

<p align="left">
    <img src="https://img.shields.io/github/forks/hadiazt/discord-radio.svg" alt="forks">
    <img src="https://img.shields.io/github/stars/hadiazt/discord-radio.svg" alt="stars">
    <img src="https://img.shields.io/github/watchers/hadiazt/discord-radio.svg" alt="watchers">
</p>

<br/>

## 🤝 Contributing
1. [Fork the repository](https://github.com/hadiazt/discord-radio/fork)
2. Clone your fork: `git clone https://github.com/your-username/discord-radio.git`
3. Create your feature branch: `git checkout -b my-new-feature`
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request

<br/>

# 🌟 Spread the word!

If you want to say thank you and/or support active development of the repo:
- Add a GitHub Star to the project!
- Join our discord servers [sosis](https://discord.gg/4zY83B9GnZ).
- Follow my profile [hadi-az](https://github.com/hadiazt)

Thanks so much for your interest in growing the reach of the repo!

<br/>

# ⚠️ License

This repo is free and open-source software licensed under the MIT General Public License v3.0. All designs were created by [hadi-az](https://github.com/hadiazt).

<br />
