// Importando as variáveis de ambiente
const env = require('../.env')

// Importando a biblioteca 'Telegraf'
const { Telegraf } = require('telegraf')

// Criando o objeto 'bot' e o instanciando como um novo objeto da classe 'Telegraf'
const bot = new Telegraf(env.token)

// Iniciando o 'bot'
bot.start(ctx => {
    const name = ctx.update.message.from.first_name
    ctx.reply(`Seja bem vindo ${name}!
        Eu sou um 'bot' em treinamento!
        Por enquanto eu:
            - Repito o que você digita
            - Digo as coordenadas de latitude e longitudes se você me fornecer uma localização
            - Retorno o nome e o telefone de um contato que você me fornecer
            - Ouço uma mensagem de áudio e retorno a duração dela
            - Informo a resolução das fotos que você me enviar (cuidado hein =p)
    `)
})

// Tratando eventos de texto
bot.on('text', ctx => {
    const texto = ctx.update.message.text
    console.log(texto)
    ctx.reply(`O texto recebido foi: '${texto}'`)
})

bot.on('location', ctx => {
    const loc = ctx.update.message.location
    console.log(loc)
    ctx.reply(`OK! Você está em:
                Latitude: ${loc.latitude},
                Longitude: ${loc.longitude}`)
})

bot.on('contact', ctx => {
    const cont = ctx.update.message.contact
    console.log(cont)
    ctx.reply(`Legal! O telefone do ${cont.first_name}
                é: ${cont.phone_number}'`)
})

bot.on('voice', ctx => {
    const voz = ctx.update.message.voice
    console.log(voz)
    ctx.reply(`Audio de ${voz.duration} segundos.`)
})

bot.on('photo', ctx => {
    const foto = ctx.update.message.photo
    console.log(foto)
    console.log(foto.length)
    foto.forEach((photo, i) => {
        ctx.reply(`A ${i}º foto tem resolução de:
                    ${photo.width} X ${photo.height} Pixels!`)
    })
})

bot.on('sticker', ctx => {
    const stic = ctx.update.message.sticker
    console.log(stic)
    ctx.reply(`Você enviou o ${stic.emoji} do conjunto ${stic.set_name}`)
})


// Iniciando o 'polling' com o servidor para verificar se há novas mensagens e/ou conversas
bot.startPolling()