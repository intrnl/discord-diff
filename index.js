const fs = require('fs')

fs.unlink('discord-diff.txt', (err) => {})
let stream = fs.createWriteStream('discord-diff.txt', { flags: 'a' })

fs.readdirSync('./changes').forEach(file => {
  console.log(`Merging '${file}'`)

  stream.write(fs.readFileSync(`./changes/${file}`) + '\n')
})
