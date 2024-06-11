import React,{useState} from 'react'
import Nav from './components/Nav'
import NewsBoard from './components/NewsBoard'


const App = () => {
  const [category,setCategory]=useState('general')
  return (
    <div>
      <Nav setCategory={setCategory} />
      <NewsBoard category={category} />

    </div>
  )
}

export default App
