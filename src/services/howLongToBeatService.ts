
import { HowLongToBeatService } from 'howlongtobeat';
import { Express } from 'express'

const howlongtobeatService = (lg:any, app:Express) => {

  const hltbService = new HowLongToBeatService();

  app.get('/hltb/search', async (req, res) => {
    lg.log(`search for term ${req.query.term}`)
    res.send(await hltbService.search(req.query.term.toString()))
  })

  app.get('/hltb/detail', async (req, res) => {
    lg.log(`detail for id ${req.query.id}`)
    res.send(await hltbService.detail(req.query.id.toString()))
  })

}

export default howlongtobeatService;