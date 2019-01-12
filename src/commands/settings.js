const { commons: { f }, Command } = require('../core')
const Components = require('../components')

module.exports = class extends Command {
  constructor() {
    const opts = {
      args: Object.keys(Components.settings),
      permission: 8,
    }
    super('settings', opts)
  }

  async run(msg, settings, lang, args) {
    if (args[1] === 'remove') {
      return msg.channel.send(':white_check_mark: Removed component: ' + args[1])
    } else if (args[1] === 'add') {
      return msg.channel.send(':white_check_mark: Added component: ' + args[1])
    } else if (this.args.includes(args[1]))
      return await (new Components.settings[args[1]]()).run(msg, settings, lang, args.slice(1))
    else
      return await msg.channel.send(f(lang['args_does_not_match'], this.args.join(', ')))
  }
}
