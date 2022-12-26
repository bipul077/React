import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize: 8,
    category: 'general',
  }
    static propTypes={
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string,
    }
  
  capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){
    super(props);
    console.log(this.props.apikey);
    console.log("hello i am a constructor from news component");
    this.state={
      articles: [],
      loading: true,
      page:1,
      totalResults: 0
    }
    document.title=`${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }

  async updateNews(){
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json()
    this.props.setProgress(70);
    console.log(parsedData);
    this.setState({articles: parsedData.articles,
      totalResults:parsedData.totalResults,  // parsedData.totalResults is from api's totalResults
      loading: false
    })
    this.props.setProgress(100);
  }


  async componentDidMount(){
    console.log("cdm");
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({page:this.state.page+1});
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults:parsedData.totalResults,  // parsedData.totalResults is from api's totalResults
      loading: false
    })
  }

  // handlePreviousClick = async ()=>{
  //   console.log("prev");
  //   this.setState({page:this.state.page-1});
  //   this.updateNews();
  // }

  // handleNextClick = async ()=>{
  //   console.log("next");
  //   this.setState({page:this.state.page+1})
  //   this.updateNews();
  // }

  render() {
    console.log("good")
    return (
      <>
            <h2 className='text-center'>24*7 News on {this.capitalizeFirstLetter(this.props.category)}</h2> 
            {this.state.loading && <Spinner/>}          
            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              //style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
              hasMore={this.state.articles.length < this.state.totalResults}//loader wont show if hasmore becomes false
              loader={<Spinner/>}
            >
            <div className="container">
              <div className="row">
              {/* {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title.slice(0,70):""} description={element.description?element.description.slice(0,84):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} published={element.publishedAt}/>
                </div> 
              })} */}
              {this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title.slice(0,70):""} description={element.description?element.description.slice(0,84):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} published={element.publishedAt}/>
                </div> 
                    })}
              </div>
            </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className='btn btn-dark' onClick={this.handlePreviousClick}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
      </div> */}
      </>
    )
  }
}

export default News
