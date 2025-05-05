import React, { useEffect, useRef } from 'react';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';
import { logout } from '../../firebase';

function NavBar() {

  const navRef = useRef();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY >= 80) {
        navRef.current.classList.add("bg-[#141414]")
      } else {
        navRef.current.classList.remove("bg-[#141414]")
      }
    })
  }, [])

  return (
    <div ref={navRef} className='fixed top-0 left-0 w-full px-[6%] py-5 flex justify-between text-sm text-[#e5e5e5] z-[50] bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_10%,transparent)]'> 
        <div className="flex items-center gap-[50px]">   {/* navabr left section start */}
            <img src={logo} alt="Netflix logo" className='w-30' />
            <ul className="flex list-none gap-[20px]">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">TV Shows</li>
                <li className="cursor-pointer">Movies</li>
                <li className="cursor-pointer">New & Popular</li>
                <li className="cursor-pointer">My List</li>
                <li className="cursor-pointer">Browse by Languages</li>
            </ul>
        </div>                                          {/* navabr left section end */}

        <div className="flex items-center gap-[50px]"> {/* navbar right section start */}
          <img src={search_icon} alt="search_icon" className="w-[20px] cursor-pointer" />
          <p>Children</p>
          <img src={bell_icon} alt="bell icon" className="w-[20px] cursor-pointer" />
  
          <div className="relative group flex items-center gap-[10px]"> {/* navbar-profile */}
            <img src={profile_img} alt="profile" className="w-[35px] rounded-[4px] cursor-pointer" />
            <img src={caret_icon} alt="caret" className="w-[10px] cursor-pointer" />
            <div className="absolute top-full right-0 w-max bg-[#191919] px-[22px] py-[18px] rounded-[2px] underline z-[1] hidden group-hover:block">
              <p className="text-[13px] cursor-pointer" onClick={() => {logout()}}>Sign Out of Netflix</p>
            </div>
          </div>
        </div>                                            {/* navabr right section end */}
    </div>
)
}

export default NavBar