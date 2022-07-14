import logo from './logo.svg';
import './App.css';
import myVideo from './video.mp4'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <marquee className='marquee-text'>We are coming up with Arduino, sensor, robokits, electronics components, Raspberry pi and DIY kits</marquee>
        <video className='videoTag' autoPlay loop muted>
            <source src={myVideo} type='video/mp4' />
        </video>
        <h1 className='contact-us'>
          Contact us
        </h1>
        <hr className='hr'></hr>
        <p className='details'>
          For electronic components contact +919742274413
        </p>
        <p className='details'>
          We are coming up with Arduino, sensor, robokits, electronics components, Raspberry pi and DIY kits
        </p>
        <p className='details'>
          SSK Electronics, 112, 5th Cross Road, Bapuji Layout, Maruthi Nagar, Vijayanagar, Bengaluru, Karnataka 560040
        </p>
        <span className='copy'>Copyright © 2022 Antzkart.in - All Rights Reserved.</span>
      </header>
    </div>
  );
}

export default App;
