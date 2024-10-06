import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ShortenedURL = ({ url, onCopy }) => {

  return (
    <div className="shortened-url">
      <p>Your shortened URL: {url}</p>
      <button className="copy-button-shorten" onClick={
        () => {
            navigator.clipboard.writeText(url);
            onCopy();
            toast.success('Copied to clipboard');
        }
      }>
        Copy
      </button>
      {/* <ToastContainer containerId="copy"/> */}
    </div>
  );
};

export default ShortenedURL;