// import React, { Component } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {

//   static defaultProps = {
//     q:"trump",
//     pagesize:8,
//     category:"general"
//   }
 
//   static propTypes={
//     q: PropTypes.string,
//     pageSize:PropTypes.number,
//     category:PropTypes.string
    
//   }

//   capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }
  
//   constructor(props) {
//     super(props);  // Always call super() before accessing `this`
//     console.log("I am a constructor from NewsItems");
  
//     // Component's state
//     this.state = {
//       articles: [],
//       loading: true,
//       page: 1,
//       totalResults:0
//     };
  
//     // Updating the document title with capitalized category
//     document.title = `${this.capitalizeFirstLetter(props.category)} - NewsInsight`;
//   }
  

// async updateNews(){

//   const url=`https://newsapi.org/v2/top-headlines?q=${props.q}&category=${props.category}&apiKey=2d30bf21dd4c4dcdb3806436813a6aa9&page=${this.state.page}&pageSize=${props.pageSize}`; //this url is the link of the top headlines which is copied from News url.
//   this.setState({loading:true});
//   let data = await fetch(url);  //using fetch() method we are fetching the data in the url.
//   let parsedData =await data.json()
//   console.log(parsedData);
//   this.setState({articles:parsedData.articles, totalResults:parsedData.totalResults,loading:false})


// }

//   //we used async await. async function(async componentDidMount) wait for resolving the await function fetch(url) in the body.

//   async componentDidMount(){  //componentDidMout will execute after the render() in the browser.
   
//   //   let url=`https://newsapi.org/v2/top-headlines?q=${props.q}&category=${props.category}&apiKey=2d30bf21dd4c4dcdb3806436813a6aa9&page=1&pageSize=${props.pageSize}`; //this url is the link of the top headlines which is copied from News url.
//   //   this.setState({loading:true});
//   //   let data = await fetch(url);  //using fetch() method we are fetching the data in the url.
//   //   let parsedData =await data.json()
//   //   console.log(parsedData);
//   //   this.setState({articles:parsedData.articles, totalResults:parsedData.totalResults,loading:false})
//   // 
//   this.updateNews()
//   }


//    handlePreviousClick= async ()=>{
//     console.log("previous");

                  
//     // let url=`https://newsapi.org/v2/top-headlines?q=${props.q}&category=${props.category}&apiKey=2d30bf21dd4c4dcdb3806436813a6aa9&page=${this.state.page -1}&pageSize=${props.pageSize}`; //this url is the link of the top headlines which is copied from News url.
//     // this.setState({loading:true});
//     // let data = await fetch(url);  //using fetch() method we are fetching the data in the url.
//     // let parsedData =await data.json()
//     // console.log(parsedData);
            
//     // this.setState({
//     // page: this.state.page -1,
//     // articles:parsedData.articles,
//     // loading:false
//     // })
//     this.setState({page: this.state.page -1})
//     this.updateNews()
//    }


//   handleNextClick= async ()=>{
//      console.log("next");
//   //  if(!this.state.page +1>Math.ceil(this.state.totalResults/props.pageSize)){

//   //  }

  
//   //  let url=`https://newsapi.org/v2/top-headlines?q=${props.q}&category=${props.category}&apiKey=2d30bf21dd4c4dcdb3806436813a6aa9&page=${this.state.page +1}&pageSize=${props.pageSize}`; //this url is the link of the top headlines which is copied from News url.
//   //  this.setState({loading:true});
//   //  let data = await fetch(url);  //using fetch() method we are fetching the data in the url.
//   //  let parsedData =await data.json()
//   //  console.log(parsedData);
               
//   //  this.setState({
//   //  page: this.state.page +1,
//   //  articles:parsedData.articles,
//   //  loading:false
//   //  })

//   this.setState({page:this.state.page +1})
//   this.updateNews()
  
//   }

//   fetchMoreData = async() => {
//     this.setState({page:this.state.page +1})

//     const url=`https://newsapi.org/v2/top-headlines?q=${props.q}&category=${props.category}&apiKey=2d30bf21dd4c4dcdb3806436813a6aa9&page=${this.state.page}&pageSize=${props.pageSize}`; //this url is the link of the top headlines which is copied from News url.
   
//     let data = await fetch(url);  //using fetch() method we are fetching the data in the url.
//     let parsedData =await data.json()
//     console.log(parsedData);
//     this.setState({articles:this.state.articles.concat(parsedData.articles), totalResults:parsedData.totalResults,loading:false})
  
  

//   };


//   render() { //render method executes after the constructor().
//     console.log("render");  
//     return (
//       <>
//         <h1 className="text-center" style={{margin:`40px 0px`}}>NewsInsight - Top {this.capitalizeFirstLetter(props.category)} Headlines</h1>

//         {this.state.loading && <Spinner />}
       
//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles !== this.state.totalResults}
//           loader={<Spinner/>}
//         >
        
//         <div className="container">
//         <div className="row"> 
//             {this.state.articles.map((element)=>{
//             return <div className="col-md-4" key={element.url}>
//                       <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
//                     </div>

//             })}
       
//          </div>

//          </div>
//         </InfiniteScroll>
//               {/* <div className="container d-flex justify-content-between">
//               <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePreviousClick}>&larr; Previous</button>  
//               <button disabled={this.state.page +1>Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
//               </div> */}

//       </>
//     )
//   }
// }

// export default News

import React, { useEffect , useState} from 'react';

import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News=(props)=> {

const [articles,setArticles] = useState([])
const [loading,setLoading] = useState(true)
const [page,setPage] = useState(1)
const [totalResults,setTotalResults] = useState(0)
 
  

 const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

 

const updateNews=async()=> {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?q=${props.q}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)}  NewsInsight`;
  updateNews();
  },[])

 


  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?q=${props.q}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
   
  };


    
    return (
      <>
        <h1 className="text-center" style={{ margin: `40px 0px` ,marginTop:'90px' }}>
          NewsInsight - Top {capitalizeFirstLetter(props.category)} Headlines
        </h1>

        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults} // Correct condition for pagination
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element, index) => {
                return (
                  <div className="col-md-4" key={`${element.url}-${index}`}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ''}
                      description={element.description ? element.description.slice(0, 88) : ''}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }


News.defaultProps = {
  q: 'trump',
  pagesize: 8,
  category: 'general',
}

News.propTypes = {
  q: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default News;
