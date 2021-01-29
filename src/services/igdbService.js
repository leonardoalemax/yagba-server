import axios from 'axios'

const igdbService = (cs, app) => {

  const headers = {
    'Accept': 'application/json',
    'Client-ID': 'kn6ug0oxr3f0ifqp0jmz2lkda3m77u',
    'Authorization': 'Bearer 4lzb0b0th1bdwm6sxt8jh3ty78lw45',
  };

  app.get('/igdb/search', async (req, res) => {
    cs.log(`search igdb for term ${req.query.term}`)

    const fields = [
      "name",
      "cover.url",
      "platforms.name",
      "platforms.platform_family.name",
      "release_dates.human"
    ]

    try {
      const { data } = await axios({
        url: "https://api.igdb.com/v4/games",
        method: 'POST',
        headers: headers,
        data: `fields ${fields.join(", ")}; where id = ${req.query.id};`
      })
      res.send(data)
    } catch (error) {
      cs.log(error)
    }
  });

  app.get('/igdb/detail', async (req, res) => {
    cs.log(`search igdb for term ${req.query.term}`)

    const fields = [
      "name",
      "cover.url",
      "artworks.url",
      "alternative_names.name",
      "game_engines.name",
      "franchises.name",
      "platforms.name",
      "platforms.platform_family.name",
      "release_dates.human",
      "game_modes.name",
      "genres.name",
      "screenshots.url",
      "slug",
      "standalone_expansions.name",
      "storyline",
      "external_games.name",
      "summary",
      "themes",
      "parent_game.name"
    ]

    try {
      const { data } = await axios({
        url: "https://api.igdb.com/v4/games",
        method: 'POST',
        headers: headers,
        data: `fields ${fields.join(", ")}; where id = ${req.query.id};`
      })
      res.send(data)
    } catch (error) {
      cs.log(error)
    }
  });
}

export default igdbService;