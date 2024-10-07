import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InputURLForm = ({ onSubmit }) => {
  const [url, setUrl] = useState('');
  const [minutes, setMinutes] = useState(1440);
  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleChangeMinutes = (e) => {
    setMinutes(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!url) {
      toast.error('Please enter a URL');
      return;
    }

    const urlRegex = /^(ftp|https?):\/\/[^ "]+$/;
    const isUrlValid = urlRegex.test(url);

    if (!isUrlValid) {
      toast.error('Invalid URL format, must be in the format http://www.example.com');
      return;
    }

    if (minutes <= 0) {
      toast.error('Invalid Minutes, must be an integer greater than 0');
      return;
    }

    const formattedUrl = /^(https?|ftp):\/\//i.test(url) ? url : `http://${url}`;
    onSubmit(formattedUrl,window.location.href,minutes);
    setUrl('');
  };

  return (
    
    <>
    <div className="input-container">
      <h1> <span>MiniURL</span></h1>

      <div>
          <form className="input-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="input-url"
              value={url}
              onChange={handleChange}
              placeholder="http://www.example.com"
            />
            
            <input
              type="text"
              className="input-minutes"
              value={minutes}
              onChange={handleChangeMinutes}
              placeholder="Enter TTL minutes"
            />
      
            <button type="submit" className="submit-button">
              Shorten
            </button>
          </form>
      </div>
      
    </div>
    {/* <ToastContainer containerId="input" /> */}
    </>
  );
};

export default InputURLForm;