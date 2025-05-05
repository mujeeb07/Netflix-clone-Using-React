import React from 'react';
import youtube_icon from '../../assets/youtube_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';

function Footer() {
  return (
    <div className='py-4 px-8 max-w-5xl my-0 mx-auto'>
      <div className="flex gap-5 my-4 mx-0">
        <img className='w-9 cursor-pointer' src={facebook_icon} alt="facebook" />
        <img className='w-9 cursor-pointer' src={instagram_icon} alt="instagram" />
        <img className='w-9 cursor-pointer' src={twitter_icon} alt="twitter" />
        <img className='w-9 cursor-pointer' src={youtube_icon} alt="youtube" />
      </div>
      <ul className='grid grid-cols-4 gap-4 mb-3.5 list-none'>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='text-gray-500 text-sm'>© 1997-2025 Netflix.</p>
    </div>
  )
}

export default Footer