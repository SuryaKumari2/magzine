import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
    const [article,setArticle]=useState([]);
    useEffect(() => {
      
      
      const apiKey = import.meta.env.VITE_API_KEY;
      
      if (!apiKey) {
        console.error("VITE_API_KEY is not defined");
        return;
      }
  
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`;
      
      
      fetch(url)
        .then(response => 
          {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        
    })
        .then(data => {
          if (data && data.articles) {
            setArticle(data.articles);
          } else {
            setArticle([]);
          }
        })
        .catch((error) => {
          console.log("The error is " + error);
          setArticle([]);
        });
    }, [category]);
  return (
    <div>
      <h2 className='text-center m-2 font-weight-bold'>Latest <span className="badge text-bg-danger">News</span></h2>
      {article.map((news,index)=>{
        return <NewsItem key={index}  title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      })}

    </div>
  )
}

export default NewsBoard;
