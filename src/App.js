import React, { useState,useEffect } from 'react';
import axios from 'axios';
import DarkModeToggle from 'react-dark-mode-toggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Footer from './pages/footer';
import Body from './pages/body';


function App() {
  const [url, setUrl] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Add loading state


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when download starts

    const [format, quality] = selectedOption.split('-');
    
    try {
      const response = await axios.get(`http://localhost:5000/download?url=${url}&format=${format}&quality=${quality}`);
      window.location.href = response.request.responseURL; // Trigger download
      setIsLoading(false); // Set loading to false after download completes
    

    } catch (error) {
      console.error('Error downloading video:', error);
      setIsLoading(false); // Set loading to false if there's an error
    }

    }
  

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
<div>
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
    <Navbar className="bg-danger">
      <Container>
        <Navbar.Brand className="text-white">YOUTUBE VIDEO DOWNLOADER</Navbar.Brand>
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={70}
        />
      </Container>
    </Navbar>
    <br/>
    
      <div className=' d-flex justify-content-center'>
      <h1 >YouTube Video Downloader</h1></div>
      
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          placeholder="Enter YouTube URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="w-75 p-2 m-4 md-lg-sm-5 "
        />
        
        <select 
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          required className='p-2 m-4 w-40  '
        >
          <option value="" >Choose Format & Quality</option>
          <option value="highest-1080p">Video - 1080p</option>
          <option value="highest-720p">Video - 720p</option>
          <option value="highest-480p">Video - 480p</option>
          <option value="highest-360p">Video - 360p</option>
          <option value="mp3-highest">MP3</option>
        </select>
        <button type="submit" className='w-25 p-2 m-3 text-white bg-danger' >Download</button>
      </form>
        {/* Conditional rendering for loader */}
        {isLoading && (
        <div className="loader-container">
          <div className="loader"></div>
         
        </div>
      )}
      <Body/>
      <hr></hr>
      <div >
        <h3 className=' d-flex justify-content-center ' style={{ textDecoration: 'underline' }}>YouTube Shorts Downloader</h3>
        <small className=' d-flex justify-content-center'>Downloading YouTube shorts video directly from YouTube is not possible. Our website is a free online tool that allows users to quickly download short videos from YouTube. You can bookmark our website to use it again in the future. Anyways, If You have YouTube short video URL, you can download the video to your device. Our website is very simple to use.</small>
      </div>
      <hr></hr>
      <Footer />
    </div>
    </div>
    
    
  );
}

export default App;
