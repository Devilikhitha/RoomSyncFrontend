import React from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function Accommodation() {
  const history = useHistory();

  return (
    <div>
      <div class="background1">
        <br />
        <br />
        <section id="home">
          <div class="card-container1">
            <h1 class="caption">
              Empowering Students with Hassle-Free Accommodation Management
            </h1>
            <section id="accommodations">
              <h2>Accommodations</h2>
              <p>
                Our accommodations offer a comfortable and safe living
                environment for students. We provide various types of rooms,
                including single rooms, shared rooms, and dormitories. Each
                accommodation is equipped with essential facilities such as
                Wi-Fi, study areas, and common spaces.
              </p>
              <p>Contact us for more information or to make a reservation.</p>
            </section>
          </div>
        </section>
      </div>
      <section id="accommodations">
        <h2>Accommodations</h2>

        <div class="accommodation-card d-flex flex-row justify-content-center">
          <img
            className="img-zoom"
            src="https://images.squarespace-cdn.com/content/v1/5a93e8beee1759706cf3d62b/1519995382624-JJ0JRYO77NV5H6YU0O4Z/ebh-web-1-2.jpg?format=1000w"
            alt="Single Room"
          />

          <div className="Rooms d-flex flex-column ">
            <h1>Single Rooms</h1>
            <p>
              Our single rooms provide a private and peaceful living space for
              individual students. Each room is furnished with a comfortable
              bed, study desk, chair, and storage facilities. Single rooms are
              ideal for students who prefer their own space.
            </p>
            <ul>
              <li>Private and quiet living space</li>
              <li>
                Furnished with a bed, desk, chair, and wardrobe
              </li>
              <li>Private bathroom</li>
              <li>High-speed Wi-Fi access</li>
            </ul>
            <p>Price: $X per month</p>
            <Link to="/bookform">
              <button
                className="room-btn"
                onClick={() => history.push('/bookform')}
              >
                BOOK ROOM
              </button>
            </Link>
          </div>
        </div>

        <div class="accommodation-card d-flex flex-row justify-content-center">
          <img
            className="img-zoom"
            src="https://th.bing.com/th/id/R.5132abbe808d4c22d49c329f72e43628?rik=bT0Gq3xph
