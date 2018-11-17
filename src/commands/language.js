const Discord = require('discord.js')
const f = require('string-format')
const { validLanguages } = require(__dirname + '/../contents')
const { Command } = require('../core')

module.exports = class extends Command {
  constructor() {
    const opts = {
      args: [
        'ISO 639-1 Language Code(en, ja, and more)',
      ],
      permission: 8,
    }
    super('language', opts)
  }

  run(msg, settings, lang, args) {
    if (!args[1] || args[1] === 'help') {
      const embed = new Discord.RichEmbed()
        .setTitle(f(lang.availablelang, settings.language))
        .setDescription(validLanguages.join('\n'))
        .setColor([0,255,0])
      msg.channel.send(embed)
    } else if (validLanguages.includes(args[1])) {
      settings.language = args[1]
      msg.channel.send(f(lang.setconfig, 'language'))
    }
  }
}
