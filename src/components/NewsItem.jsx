import React from 'react'
const NewsItem = ({title,description,src,url}) => {
  return (
    <div className='col mb-3 d-inline-block'>
        <div className="card bg-dark text-light mb-3  my-3 mx-3 px-2 py-2" style={{maxWidth:'290px'}}>
  <img src={src?src:'/image.png'}style={{height:'200px ' ,width: '100%', objectFit: 'cover'}} className="card-img-top" alt="Image"/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):'Stay informed with the latest developments in technology! Dive into our articles and connect'}</p>
    <a href={url} className="btn btn-primary">Readmore</a>
  </div>
</div>
      
    </div>
  )
}

export default NewsItem
