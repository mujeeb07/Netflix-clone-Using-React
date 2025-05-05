import React, { useEffect, useState } from 'react';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

function Player() {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name:"",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWUwZDZkMzU0M2ZjMGI4MjY5NmRiM2Y3MjZkNTliZSIsIm5iZiI6MS43NDYzNTMwOTc1MDg5OTk4ZSs5LCJzdWIiOiI2ODE3M2JjOWQ4NDljZTYyNjBhMjEzZWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.oMnrwqka9F2n7YYibi6C8myOenT5K3Q3LHFHNP_ZTO8'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  }, [])
  


  return (
    <div className='flex flex-col content-center items-center h-screen'>
      <img src={back_arrow_icon} alt="" className='absolute cursor-pointer top-5 left-5 w-12' onClick={() => {navigate(-2)}}/>
      <iframe className='rounded-md' width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} 
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="flex items-center content-between w-[90%] player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player