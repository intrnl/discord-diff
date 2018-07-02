const fs = require('fs')
const { promisify } = require('util')

const readdir = promisify(fs.readdir)

const run = async () => {
  fs.unlink('discord-diff.txt', (err) => {})

  let stream = fs.createWriteStream('discord-diff.txt', { flags: 'a' })

  const changes = await readdir('./changes/')
  
  changes.forEach(change => {
    console.log(`Merging '${change}'`)

    var data = fs.readFileSync(`./changes/${change}`)
    stream.write(data + '\n')
  })
}

run()
