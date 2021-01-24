const express = require('express')
const hltb = require('howlongtobeat')
var cors = require('cors')

let hltbService = new hltb.HowLongToBeatService();
const app = express()
const port = 8080
const bind = '0.0.0.0'

app.get('/hltb/search', async (req, res) => {
  console.log(`search for term ${req.query.term}`)
  res.send(await hltbService.search(req.query.term)) 
})

app.get('/hltb/detail', async (req, res) => {
  console.log(`detail for id ${req.query.id}`)
  res.send(await hltbService.detail(req.query.id))
})

app.listen(port, bind, () => { console.log(`runing ya!gba server http://${bind}:${port}`) })