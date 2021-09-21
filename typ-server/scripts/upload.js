/*

upload.js [name] [dir] [url]

*/

const AdmZip = require('adm-zip')
const fs = require('fs')
const assert = require('assert')
const request = require('request')

// args

const name = process.argv[2]
const source = process.argv[3]
const url = process.argv[4]

assert(fs.existsSync(source + '/client.js'), 'no client!')
assert(fs.existsSync(source + '/server.js'), 'no server!')

const zip = new AdmZip()
zip.addLocalFolder(source, '/')
const content = zip.toBuffer().toString("base64")

request.post(url, {json: {name, content}}, (error, response, body) => {
  console.log("error", error)
  console.log(body)
})
