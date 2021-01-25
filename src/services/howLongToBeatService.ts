const hltb = require('howlongtobeat')
import { Express } from 'express'

const howlongtobeatService = (app:Express) => {

  let hltbService = new hltb.HowLongToBeatService();

  app.get('/hltb/search', async (req, res) => {
    console.log(`search for term ${req.query.term}`)
    res.send(await hltbService.search(req.query.term)) 
  })

  app.get('/hltb/detail', async (req, res) => {
    console.log(`detail for id ${req.query.id}`)
    res.send(await hltbService.detail(req.query.id))
  })

}

export default howlongtobeatService;