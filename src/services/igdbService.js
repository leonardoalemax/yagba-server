import axios from 'axios'

const igdbService = (cs, app) => {

  const headers = {
    'Accept': 'application/json',
    'Client-ID': 'kn6ug0oxr3f0ifqp0jmz2lkda3m77u',
    'Authorization': 'Bearer 4lzb0b0th1bdwm6sxt8jh3ty78lw45',
  };

  app.get('/igdb/games', async (req, res) => {
    cs.log(`querying igdb with ${req.query.query}`)

    try {
      const { data } = await axios({
        url: "https://api.igdb.com/v4/games",
        method: 'POST',
        headers: headers,
        data: req.query.query
      })
      res.send(data)
    } catch (error) {
      cs.log(error)
    }
  });
}

export default igdbService;