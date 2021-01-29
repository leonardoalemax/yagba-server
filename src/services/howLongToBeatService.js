
import { HowLongToBeatService } from 'howlongtobeat';

const howlongtobeatService = (cs, app) => {

  const hltbService = new HowLongToBeatService();

  app.get('/hltb/search', async (req, res) => {
    cs.log(`search for term ${req.query.term}`)
    res.send(await hltbService.search(req.query.term.toString()))
  })

  app.get('/hltb/detail', async (req, res) => {
    cs.log(`detail for id ${req.query.id}`)
    res.send(await hltbService.detail(req.query.id.toString()))
  })

}

export default howlongtobeatService;