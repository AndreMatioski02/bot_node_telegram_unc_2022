// importando as variáveis de ambiente
const env = require("../.env");

// importando a biblioteca "Telegraf"
const { Telegraf } = require("telegraf");

// Criando o objeto "bot" e o instanciando como um novo objeto da classe Telegraf
const bot = new Telegraf(env.token);

// Iniciando o bot
bot.start(async ctx => {
    const user = ctx.update.message.from;
    // respondendo com HTML
    await ctx.replyWithHTML(`
        Destacando mensagens utilizando
        <b>HTML</b>
        <i>de várias </i> <code> formas </code>
        <pre> possíveis </pre>
        <a href="https://www.google.com">
            Google
        </a>`
    );

    // Respondendo com MarkDown
    await ctx.replyWithMarkdownV2(
        'Destacando mensagens utilizando '
        + 'Markdown'
        + ' de várias'
        + ' `formas` possíveis'
        + ' [Google](http://www.google.com)'
    );
});

// Iniciando o "polling" com o servidor para verificar se há
// novas mensagens e/ou conversas
bot.startPolling();