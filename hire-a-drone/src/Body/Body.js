import React from 'react';
import Product from '../Product';
import './Body.css';
import drone from '../img/drone.jpg';
import drone1 from '../img/drone1.jpg';
import drone2 from '../img/drone2.jpg';
import drone3 from '../img/drone3.jpg';
import drone4 from '../img/drone4.jpg';
import drone5 from '../img/drone5.jpg';
import drone6 from '../img/drone6.jpg';
import drone7 from '../img/drone7.jpg';
import drone9 from '../img/drone9.jpg';
import drone10 from '../img/drone10.jpg';
import drone12 from '../img/drone12.jpg';
import drone13 from '../img/drone13.jpg';
import drone14 from '../img/drone14.jpg'; 
import drone15 from '../img/drone15.jpg';
import drone16 from '../img/drone16.jpg';
import drone17 from '../img/drone17.jpg';
import drone18 from '../img/drone18.jpg';
import drone19 from '../img/drone19.jpg'; 

function Body() {
  return (
    <div className="body">
      {/* Image Slider */}
      <div className="body__imageSlider"></div>

      {/* Product - id, image, title, price, hirePrice */}
      <div className="body__grid">
        <Product 
          id="000001"
          image={drone}
          title="Drone with a Remote Control and a Camera"
          price={26700}
          hirePrice={400}
        /> 

        <Product 
          id="000002"
          image={drone1}
          title="Drone with Camera"
          price={32000}
          hirePrice={350}
        />

        <Product 
          id="000003"
          image={drone2}
          title="Light coloured Drone"
          price={35000}
          hirePrice={259}
        />

        <Product 
          id="000004"
          image={drone3}
          title="QuadCopter with 1080p Camera"
          price={40000}
          hirePrice={300}
        />

        <Product 
          id="000005"
          image={drone4}
          title="Remote Control Drone for Adults with 1080p camera"
          price={34000}
          hirePrice={340}
        />

        <Product 
          id="000006"
          image={drone5}
          title="Foldable Drone for adults with follow me and auto return home *Not Hiring"
          price={134780}
          hirePrice={0}
        />

        <Product 
          id="000007"
          image={drone6}
          title="4k Drone with GPS and changeable lens camera and wide camera view"
          price={38999}
          hirePrice={349}
        />

        <Product 
          id="000008"
          image={drone7}
          title="Gravity Sensor, follow me, GPS and return home"
          price={55250}
          hirePrice={499}
        />

        <Product 
          id="000009"
          image={drone9}
          title="Camera Drone for beginners, WiFi 720p Camera, Gesture Control *Not Hiring"
          price={116400}
          hirePrice={0}
        />

        <Product 
          id="0000010"
          image={drone10}
          title="12min flight 2hrs charge, Tap Fly, Circle Fly"
          price={48700}
          hirePrice={456}
        />

        <Product 
          id="000011"
          image={drone12}
          title="20min flight 2hrs charge, Cirle & Tap fly, WiFi "
          price={78000}
          hirePrice={657}
        />

        <Product 
          id="000012"
          image={drone13}
          title="1080p camera, Live Video and best for beginners"
          price={44060}
          hirePrice={406}
        />

        <Product 
          id="000013"
          image={drone14}
          title="Used Drone fast charge, live video and GPS enabled"
          price={35670}
          hirePrice={342}
        />

        <Product 
          id="000014"
          image={drone15}
          title="17min flight time, fast charge recommended for kids"
          price={34599}
          hirePrice={359}
        />

        <Product 
          id="0000015"
          image={drone16}
          title="Quadcopter with 720p camera, Live Video, GPS and WiFi"
          price={67400}
          hirePrice={567}
        />

        <Product 
          id="0000016"
          image={drone17}
          title="Drone with 4K Camera for Adults, Live video enabled"
          price={32400}
          hirePrice={302}
        />

        <Product 
          id="0000017"
          image={drone18}
          title="Foldable Drone with 4k Camera and follow me "
          price={56800}
          hirePrice={548}
        />

        <Product 
          id="0000018"
          image={drone19}
          title="4k Camera with 1080p, recommended for Beginners"
          price={86900}
          hirePrice={876}
        />

      </div>
    </div>
  )
}

export default Body;
