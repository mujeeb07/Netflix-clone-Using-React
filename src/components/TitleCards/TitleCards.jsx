import React, { useEffect, useRef, useState } from 'react';
import cards_data from '../../assets/cards/Cards_data';
import { Link } from 'react-router-dom';


function TitleCards({title, category}) {

  const [apiData, setApiData] = useState([])
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWUwZDZkMzU0M2ZjMGI4MjY5NmRiM2Y3MjZkNTliZSIsIm5iZiI6MS43NDYzNTMwOTc1MDg5OTk4ZSs5LCJzdWIiOiI2ODE3M2JjOWQ4NDljZTYyNjBhMjEzZWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.oMnrwqka9F2n7YYibi6C8myOenT5K3Q3LHFHNP_ZTO8'
    }
  };


  const handleWheel = (event) => {
      event.preventDefault();
      cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel)
  }, []);

  return (
    <div className='mt-[50px] mb-[30px] titleCards'>
      {/* <Cards_data /> */}
      <h2 className='mb-[10px] text-2xl font-bold'>{title ? title : 'Popular on Netflix'}</h2>
        <div className='flex gap-3 overflow-scroll scrollbar-hidden' ref={cardsRef}>
          {apiData.map((card, index) => (
            <Link to={`/player/${card.id}`} className='min-w-2xs relative'>
                <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="movie_image" key={index} className='rounded-2xl cursor-pointer'/>
                <p className='mb-[8px] absolute bottom-0.5 right-1.5'>{card.original_title}</p>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default TitleCards