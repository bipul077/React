import React, { Component } from 'react'

export class NewsItem extends Component {
  constructor(){
    super();
    // console.log("what's up") 
  }

  render() {
    let {title,description,imageUrl,newsUrl,author,published} = this.props;// destructuring,passed from News.js
    
    return (
      <div className="my-3">
         <div className="card">
          <img src={imageUrl?imageUrl:"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/VAUQYVDG4FEJZAV4VMOFG2IIEM.jpg&w=1440"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}<span class="badge bg-secondary">New</span></h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {published}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
          </div>
      </div>
      </div>
    )
  }
}

export default NewsItem
