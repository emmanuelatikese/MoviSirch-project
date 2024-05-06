import React from 'react';
import GIF from "../images/tenor.gif";
import Land from "../images/site.png";
import Result from "../images/resultcard.png";

const feature = () => {
  return (
    <div className='feature-container'>
      <h2>What{"'s"} this feature is all about?</h2>
      <img src={GIF}/>
      <p>
      <h4>MoviSirch</h4>
      This is app is a small project that help users to find info on
      the movie or series of choice. It taps info from an api
      database know as Advanced-movie-search which is availble on RapidAPI site.
      It give information on the overall overviews, original title, popularity, some posters
      and the release date. Which is actually what{"'s"} every user actually wants.
      </p>

      <img src={Land} className='land-png'/>
      <p>
      The app consist of a:
      <ul className='listing'>
      <li>Header</li>
      <li>Search bar</li>
      <li>Result card</li>
      </ul>
      <p>
      <h4>Header</h4>
      This is the header section which consist of the home, 
      about and feature section.
      Each have section pages which sent user to various pages.
      </p>

      <p>
      <h4>Search</h4>
      This is the search where the user search for the movie or series of
       of choice. The search bar has a search button which initiate the result
       of which give the info for the user.
      </p>


      
      <p className='result-p'>
      <h4>Result</h4>
      <img src={Result} className='result-png'/>
      
      This is the result that appears when a user typed in a movie and click on
      search button. The card give a list of overviews, original title, popularity,
      vote average and vote count which are all important information to look for a
      movie interest.

      </p>

      </p>
      

    </div>
  )
}

export default feature
