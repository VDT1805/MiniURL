import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ShortenedURL = ({ shortCode, onCopy }) => {
  let url = window.location.href + shortCode;
  return (
    <div className="shortened-url">
      <p>Your shortened URL: <a href={url}>{url}</a></p>
      <button className="copy-button-shorten" onClick={
        () => {
            navigator.clipboard.writeText(url);
            onCopy();
            toast.success('Copied to clipboard');
        }
      }>
        Copy
      </button>
    </div>
  );
};

export default ShortenedURL;