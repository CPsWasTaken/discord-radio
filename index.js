const { ILOVE, BASS, LOFI, JAVAN, POP, LOFIPANDA, KPOP, LOFIANIME } = require('discord-radio')
const DATA = require('./data/config.json')

ILOVE({
    channelID: DATA.ILOVE.vcid,
    guildID: DATA.GUILD,
    logID: DATA.LOG,
    TOKEN: DATA.ILOVE.token
})

BASS({
    channelID: DATA.BASS.vcid,
    guildID: DATA.GUILD,
    logID: DATA.LOG,
    TOKEN: DATA.BASS.token
})

LOFI({
    channelID: DATA.LOFI.vcid,
    guildID: DATA.GUILD,
    logID: DATA.LOG,
    TOKEN: DATA.LOFI.token
})

JAVAN({
    channelID: DATA.JAVAN.vcid,
    guildID: DATA.GUILD,
    logID: DATA.LOG,
    TOKEN: DATA.JAVAN.TOKEN
})

POP({
    channelID: DATA.POP.vcid,
    guildID: DATA.GUILD,
    logID: DATA.LOG,
    TOKEN: DATA.POP.token
})

LOFIPANDA({
    channelID: DATA.LOFIPANDA.vcid,
    guildID: DATA.GUILD,
    logID: DATA.LOG,
    TOKEN: DATA.LOFIPANDA.token
})

KPOP({
    channelID: DATA.KPOP.vcid,
    guildID: DATA.GUILD,
    logID: DATA.LOG,
    TOKEN: DATA.KPOP.token
})

LOFIANIME({
    channelID: DATA.LOFIANIME.vcid,
    guildID: DATA.GUILD,
    logID: DATA.LOG,
    TOKEN: DATA.LOFIANIME.token
})