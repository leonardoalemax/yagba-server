import axios from 'axios';
const { log } = console;

const IgdbController = () => {

  const  headers = {
    'Accept': 'application/json',
    'Client-ID': 'kn6ug0oxr3f0ifqp0jmz2lkda3m77u',
    'Authorization': 'Bearer 4lzb0b0th1bdwm6sxt8jh3ty78lw45',
  };

  const games = async (req, res) => {
    log(`querying igdb with ${req.query.query}`)

    try {
      const { data } = await axios({
        url: "https://api.igdb.com/v4/games",
        method: 'POST',
        headers,
        data: req.query.query
      })
      res.send(data)
    } catch (error) {
      res.send(error)
      log(error)
    }
  }

  return [games]
};

export default IgdbController;