const fs = require('fs')
const { promisify } = require('util')

const readdir = promisify(fs.readdir)
const readfile = promisify(fs.readFile)

const run = async () => {
  fs.unlink('discord-diff.txt', (err) => {
    if (err) throw err
  })

  let stream = fs.createWriteStream('discord-diff.txt', { flags: 'a' })

  const changes = await readdir('./changes/')
  changes.sort((a, b) => a - b)
  
  changes.forEach(async change => {
    let data = await readfile(`./changes/${change}`)
    
    stream.write(data + '\n')
  })
}

run()
