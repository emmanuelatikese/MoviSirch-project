import Searchpic from "../images/search.png";
import ResultComp from "../components/result";
import {motion} from "framer-motion";
import addSearch from '../components/addSearch';
import searchHandler from '../components/searchHandler';
import { useState, useEffect } from "react";

// set up the home page.
//adding some animation to the card and search.
const home = () => {

const [error, setErr] = useState("");
const [values, setValues] = useState(null);
const [search, setSearch] = useState("");
const [show, setShow] = useState(false);
const [empty, setEmpty] = useState(false);


//sets up the authorization keys of the api database.
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



// this set up the value into the home.
useEffect(() => {
    console.log(values);
  }, [values]);


  return (
    <div className='home-container'>
    <motion.h1
    initial={{
      display:"none",
      y: -10
    }}
    animate={{
      display:"flex",
      y:0,
    }}
    transition={{
      duration: 10,
      type:"tween"
    }}
    
    >Welcome...</motion.h1>

    <motion.p
    initial={{
      x: -100,
      display: "none"
    }}

    animate={{
      x:0,
      display:"flex"
    }}
    whileHover={{
      scaleX: 1.2,
      color:"#0ED2F7",
      fontWeight:"Bolder"
    }}
    className='name-title'>
    MOVISIRCH
    </motion.p>
    <motion.div
    initial={{
      y: -50,
      display: "none"
      }
    }

    animate={{
      y: 0,
      display:"flex",
      duration: 20,
    }}

    transition={{
      type:'tween',
      duration:1
    }}

    whileTap={{
      boxShadow:"0 0 20px pink",
      borderColor:"pink"
    }}
    className='inputContainer'>
    <button onClick={() => 
      searchHandler(setValues,
        setEmpty,
        options,
        setShow,
        setErr)}>
        <img src={Searchpic} className='search-img'/>
      </button>
      <input type="text"
      name="search"
      placeholder='Enter to search for movies or series...'
      onChange={(e)=>addSearch(e, setSearch)}
      autoFocus/>
    </motion.div>

      {(show) && values && values.map((x)=> <ResultComp
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
      {(empty) && <p>Not found</p>}
    </div>
  )
}

export default home
