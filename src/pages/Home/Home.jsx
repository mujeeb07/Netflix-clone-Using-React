import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
        <NavBar />
        <div className='relative'>
          <img src={hero_banner} alt="" className='w-full banner-img'/>
          <div className="absolute w-full pl-[6%] bottom-0">
            <img src={hero_title} alt="" className='w-[90%] max-w-[420px] mb-[30px]'/>
            <p className='max-w-[700px] text-[17px] mb-[20px]'>Discovering his ties to a secret ancient order,
              a young man living in modern istanbul embarks on a quest to
              save the city fron an immortal enemy.
            </p>

            <div className="flex gap-[10px] mb-[50px]">
              <button className='text-black cursor-pointer gap-[10px] text-[15px] border-0 outline-0 px-[20px] py-[8px] inline-flex items-center bg-white rounded-[4px] hover:bg-[#ffffffbf]'><img src={play_icon} alt="" className='w-[25px]' />Play</button>
              <button className='text-white cursor-pointer gap-[10px] text-[15px] border-0 outline-0 px-[20px] py-[8px] inline-flex items-center bg-[#6d6d6eb3] rounded-[4px] hover:bg-[#6d6d6e66]'><img src={info_icon} alt="" className='w-[25px]' />More Info</button>
            </div>
            <div className='w-auto overflow-auto'>
            <TitleCards/>
            </div>
          </div>
        </div>

        <div className='pl-25'>
          <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
          <TitleCards title={"Only on Nextflix"} category={"popular"}/>
          <TitleCards title={"Upcoming"} category={"upcoming"}/>
          <TitleCards title={"Top Pics for You"} category={"now_playing"}/>
        </div>
    
        <Footer />
    </div>
  )
}

export default Home