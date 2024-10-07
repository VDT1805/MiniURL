import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './MainPage.css'
import InputURLForm from './components/InputURLForm'
import { shortenURLendpoint } from './api/apiService'
import ShortenedURL from './components/ShortenedURL'
import { ToastContainer } from 'react-toastify'
function MainPage() {
  const [url, setUrl] = useState()
  const [shortendUrl, setShortenedUrl] = useState('')
  const [copiedStatus, setCopiedStatus] = useState(false)
  const handleSubmit = async (url,minutes) => {
    shortenURLendpoint({originalUrl: url,expireAfter: minutes}).then((response) => {
      setShortenedUrl(response.data.shortenedUrl)
    }).catch((error) => {
      toast.error('An error occurred, please try again later')
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
      {shortendUrl && <ShortenedURL url={shortendUrl} onCopy={handleCopy}></ShortenedURL>}
      <ToastContainer/>
    </div>
  );
}

export default MainPage
