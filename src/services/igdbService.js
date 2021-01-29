import axios from 'axios'

const igdbService = (cs, app) => {
  app.get('/igdb/search', async (req, res) => {
    cs.log(`search igdb for term ${req.query.term}`)

    try {
      const { data } = await axios({
        url: "https://api.igdb.com/v4/games",
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Client-ID': 'kn6ug0oxr3f0ifqp0jmz2lkda3m77u',
          'Authorization': 'Bearer 4lzb0b0th1bdwm6sxt8jh3ty78lw45',
        },
        data: `fields name, cover.url, platforms.name, platforms.platform_family.name, release_dates.human; search "${req.query.term}";`
      })
      res.send(data)
    } catch (error) {
      cs.log(error)
    }
  });
}

export default igdbService;