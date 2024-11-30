import React from 'react'

const NewsItem =(props)=> {

 
   let {title,description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div className="my-3">
          <div className="card">
            <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
          <span className="badge rounded-pill bg-danger"> {source} </span>
          </div>
                   <img src={!imageUrl?"https://img.huffingtonpost.com/asset/670f020b1900003600ea57c8.jpeg?ops=1200_630":imageUrl} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{title }.....</h5>
                <p className="card-text">{description}.....</p>
                <p className="card-text"><small className="text-success">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer"  href={newsUrl} target="_blank" className="btn btn-sm btn-secondary">Read More</a>
              </div>
           </div>
      </div>
    )
  }


export default NewsItem
