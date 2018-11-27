const { Command } = require('klasa')

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: 'mute',
      usage: '<User:user>',
      permissionLevel: 6,
    })
  }

  run(msg, [user]) {
    const result = settings.mute.filter(item => item !== user.id)
    settings.mute = result
    msg.sendLocale('_setconfig', ['mute'])
  }
}