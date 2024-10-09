import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './MainPage.css'
import InputURLForm from './components/InputURLForm'
import { shortenURLendpoint } from './api/apiService'
import ShortenedURL from './components/ShortenedURL'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
function MainPage() {
  const [url, setUrl] = useState()
  const [shortendCode, setShortenedCode] = useState('')
  const [copiedStatus, setCopiedStatus] = useState(false)
  const handleSubmit = async (url,minutes) => {
    shortenURLendpoint({originalUrl: url,expireAfter: minutes}).then((response) => {
      setShortenedCode(response.data.shortenedCode)
    })
  };

  const handleCopy = () => {
      setCopiedStatus(true);
      setTimeout(() => {
        setCopiedStatus(false);
      }, 5000);
  };

  return (

    <div className="container">
      <InputURLForm onSubmit={handleSubmit}></InputURLForm>
      {shortendCode && <ShortenedURL shortCode={shortendCode} onCopy={handleCopy}></ShortenedURL>}
    </div>
  );
}

export default MainPage
