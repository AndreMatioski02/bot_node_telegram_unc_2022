// Importando as variáveis de ambiente
const env = require('../.env')

// Importando a biblioteca 'Telegraf'
const { Telegraf } = require('telegraf')

// Criando o objeto 'bot' e o instanciando como um novo objeto da classe 'Telegraf'
const bot = new Telegraf(env.token)

// Iniciando o 'bot'
bot.start(ctx => {
    const from = ctx.update.message.from
    console.log(from)
    if(from.id === 5593421462) {
        ctx.reply(`Olá! Seja bem vindo ${from.first_name}`)
    } else {
        ctx.reply(`Olá ${from.first_name}, você não é meu dono, SAIA DAQUI!`)
    }
})

// Dando continuidade à conversa
bot.on('text', async (ctx, next) => {
    await ctx.reply('Você é o André, irei conversar com você!')
    next()
})


// Iniciando o 'polling' com o servidor para verificar se há novas mensagens e/ou conversas
bot.startPolling()