import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [{
      "source": {
          "id": "bbc-sport",
          "name": "BBC Sport"
      },
      "author": null,
      "title": "The numbers behind England's incredible year of Test cricket",
      "description": "TMS statistician Andy Zaltzman assesses the numbers behind England's incredible year of Test cricket.",
      "url": "http://www.bbc.co.uk/sport/cricket/64071323",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/A000/production/_128106904_stokesindex.jpg",
      "publishedAt": "2022-12-23T07:52:27.1631722Z",
      "content": "Harry Brook has joined an elite list of players with three or more hundreds in their first four Tests\r\nIn the curious vernacular of sports punditry, it is often said a team or individual which has pe… [+8147 chars]"
  },
  {
      "source": {
          "id": "news-com-au",
          "name": "News.com.au"
      },
      "author": null,
      "title": "BBL player abruptly sacked over incident",
      "description": "<p>Up-and-coming fast bowler Fazalhaq Farooqi has had his Big Bash contract scrapped after a reported incident prompted action from Cricket NSW.<br></p>",
      "url": "https://www.news.com.au/sport/cricket/big-bash/bbl12-sydney-thunder-recruit-has-contract-terminated-over-reported-incident/news-story/3c19e3736c718324f427e62e5ad07e78",
      "urlToImage": "https://content.api.news/v3/images/bin/6962a6a172894cabc4bcb0fc75ea7744",
      "publishedAt": "2022-12-23T05:25:00Z",
      "content": "Up-and-coming fast bowler Fazalhaq Farooqi has had his Big Bash contract scrapped after a reported incident prompted action from Cricket NSW.\r\nThe 22-year-old is one of the many young Afghanistan pla… [+1781 chars]"
  },
  {
      "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  },
  {
      "source": {
          "id": "espn-cric-info",
          "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  }
  ]
  constructor(){
    super();
    console.log("hello i am a constructor from news component");
    this.state={
      articles: this.articles,
      loading: false
    }
  }
  render() {
    return (
      <div className="container my-3">
            <h2>This is a news component</h2>           
            <div className="row">
            {this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                      <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,84)} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div> 
            })}
      </div>
      </div>
    )
  }
}

export default News
