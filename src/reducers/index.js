import {combineReducers} from 'redux'

const initialState = {
  ui: {
    inputValue: ''
  },
  showsContainer: {
    shows: [{"score":5.534606,"show":{"id":83,"url":"http://www.tvmaze.com/shows/83/the-simpsons","name":"The Simpsons","type":"Animation","language":"English","genres":["Comedy","Family"],"status":"Running","runtime":30,"premiered":"1989-12-17","officialSite":"http://www.fox.com/the-simpsons/full-episodes","schedule":{"time":"20:00","days":["Sunday"]},"rating":{"average":8.4},"weight":99,"network":{"id":4,"name":"FOX","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":6190,"thetvdb":71663,"imdb":"tt0096697"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/0/639.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/0/639.jpg"},"summary":"<p><b>The Simpsons</b> is the longest running scripted show in US television history. It captures the adventures of Homer, Marge, Maggie, Bart and Lisa who are living in a fictional town called Springfield.</p>","updated":1550515187,"_links":{"self":{"href":"http://api.tvmaze.com/shows/83"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1596123"},"nextepisode":{"href":"http://api.tvmaze.com/episodes/1610363"}}}},{"score":19.35068,"show":{"id":3134,"url":"http://www.tvmaze.com/shows/3134/the-amazing-world-of-gumball","name":"The Amazing World of Gumball","type":"Animation","language":"English","genres":["Comedy","Children"],"status":"Running","runtime":11,"premiered":"2011-05-03","officialSite":"http://www.theamazingworldofgumball.com/","schedule":{"time":"18:00","days":["Monday","Tuesday","Wednesday","Thursday"]},"rating":{"average":9.3},"weight":88,"network":{"id":11,"name":"Cartoon Network","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":28067,"thetvdb":248482,"imdb":"tt1942683"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/17/43096.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/17/43096.jpg"},"summary":"<p><b>The Amazing World of Gumball </b>is about an amusing blue cat named Gumball and his best buddy Darwin, a pet goldfish, combines 2D and 3D animation in a live-action setting.</p>","updated":1541843742,"_links":{"self":{"href":"http://api.tvmaze.com/shows/3134"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1552609"}}}},{"score":32.474052,"show":{"id":73,"url":"http://www.tvmaze.com/shows/73/the-walking-dead","name":"The Walking Dead","type":"Scripted","language":"English","genres":["Drama","Action","Horror"],"status":"Running","runtime":60,"premiered":"2010-10-31","officialSite":"http://www.amc.com/shows/the-walking-dead","schedule":{"time":"21:00","days":["Sunday"]},"rating":{"average":8.2},"weight":100,"network":{"id":20,"name":"AMC","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":null,"externals":{"tvrage":25056,"thetvdb":153021,"imdb":"tt1520211"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/177/444593.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/177/444593.jpg"},"summary":"<p><b>The Walking Dead</b> tells the story of the months and years that follow after a zombie apocalypse. It follows a group of survivors, led by former police officer Rick Grimes, who travel in search of a safe and secure home. As the world overrun by the dead takes its toll on the survivors, their interpersonal conflicts present a greater danger to their continuing survival than the walkers that roam the country. Over time, the characters are changed by the constant exposure to death and some grow willing to do anything to survive.</p><p>Based on the comic book series of the same name by Robert Kirkman, Tony Moore, and Charlie Adlard.</p>","updated":1550525566,"_links":{"self":{"href":"http://api.tvmaze.com/shows/73"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1594717"},"nextepisode":{"href":"http://api.tvmaze.com/episodes/1594718"}}}},{"score":34.56468,"show":{"id":82,"url":"http://www.tvmaze.com/shows/82/game-of-thrones","name":"Game of Thrones","type":"Scripted","language":"English","genres":["Drama","Adventure","Fantasy"],"status":"Running","runtime":60,"premiered":"2011-04-17","officialSite":"http://www.hbo.com/game-of-thrones","schedule":{"time":"21:00","days":["Sunday"]},"rating":{"average":9.3},"weight":99,"network":{"id":8,"name":"HBO","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"webChannel":{"id":22,"name":"HBO Go","country":{"name":"United States","code":"US","timezone":"America/New_York"}},"externals":{"tvrage":24493,"thetvdb":121361,"imdb":"tt0944947"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/0/581.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/0/581.jpg"},"summary":"<p>Based on the bestselling book series <i>A Song of Ice and Fire</i> by George R.R. Martin, this sprawling new HBO drama is set in a world where summers span decades and winters can last a lifetime. From the scheming south and the savage eastern lands, to the frozen north and ancient Wall that protects the realm from the mysterious darkness beyond, the powerful families of the Seven Kingdoms are locked in a battle for the Iron Throne. This is a story of duplicity and treachery, nobility and honor, conquest and triumph. In the <b>Game of Thrones</b>, you either win or you die.</p>","updated":1549812785,"_links":{"self":{"href":"http://api.tvmaze.com/shows/82"},"previousepisode":{"href":"http://api.tvmaze.com/episodes/1221415"},"nextepisode":{"href":"http://api.tvmaze.com/episodes/1590943"}}}}]
  }
}

const ui = (state = initialState.ui, action) => {
  switch(action.type) {
    case('CHANGE_INPUT_VALUE') :
      return Object.assign({}, state, {inputValue: action.val})
    default :
      return state
  }
}

const showsContainer = (state = initialState.showsContainer, action) => {
  switch(action.type) {
    case('RECEIVE_SHOWS') :
      return Object.assign({}, state, {shows: action.shows})
    default :
      return state
  }
}
const app = combineReducers({
  ui,
  showsContainer
})

export default app