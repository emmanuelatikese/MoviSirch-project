import React, { useState } from 'react'
// import Profile from "../images/placeholder.png";
import Searchpic from "../images/search.png";
import ResultComp from "../components/result";
// import egpic from "../images/egpic.jpeg";
import axios from 'axios';
const home = () => {
const [error, setErr] = useState("");
const [values, setValues] = useState([]);
const [search, setSearch] = useState("");
const [show, setShow] = useState(false);

const addSearch = (e) =>{
  e.preventDefault();
  setSearch(e.target.value);
}

const options = {
  method: 'GET',
  url: 'https://advanced-movie-search.p.rapidapi.com/search/movie',
  params: {
    query: search,
    page: '1'
  },
  headers: {
    'X-RapidAPI-Key': '4ba01a6c6cmshca10acec923f708p13e82cjsn266212bb2cf5',
    'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
  }
};

const serachHandler = async()=>{
  try{
    setValues([]);
    const res = await axios.request(options);
    const data = res.data.results;
    setValues(data);
    setShow(true);
    console.log(data);
    console.log(values);
  }
  catch(err){
    setErr(err);
    setShow(false);
  }
}


  return (
    <div className='home-container'>
    <h1>Hi</h1>
    <p>Welcome to moviSirch</p>
    <div className='inputContainer'>
    <button onClick={serachHandler}><img src={Searchpic} className='search-img'/></button>
      
        <input type="text" name="search" placeholder='Enter to search for movies or series...' onChange={addSearch}/>
    </div>

      {(show) && values.map((x)=> <ResultComp
      key={x.id}
      profile={x.poster_path}
      backdrop={x.backdrop_path}
      title={x.original_title}
      Overview={x.overview}
      Popularity={x.popularity}
      Release={x.release_date}
      Vote={x.vote_average}
      Count={x.vote_count}
      />)}
    </div>
  )
}

export default home
