import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <>
    <div className='container'>
      <div className="image_section">
      <img src="https://png.pngtree.com/thumb_back/fh260/background/20220604/pngtree-doctor-working-in-hospital-with-other-doctors-banner-mature-group-photo-image_46699652.jpg" alt="" />
      </div>
      <div className="content_section">
        <h1>Welcome to <span>Narayana Health City</span></h1>
        <p>Start Your Journey With Narayana Health City</p>
        <button>Know More</button>
      </div>
    </div>
    </>
  );
}
