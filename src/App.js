// import logo from './logo.svg';
// import React, { useState } from 'react';
import './App.css';
import React, { useState } from 'react';
import InputShort from './components/InputShort';
import ShortLink from './components/ShortLink';
import Background from './components/Background';

function App() {
  const [inputValue, setInputValue] = useState("")

  return (
    <div>
      <Background/>
      <h1>The <span>privacy-friendly</span> URL Shortener</h1>
      <InputShort setInputValue={setInputValue} />
      <p>By using shortcode you agree to our Terms of Service</p>
      <ShortLink inputValue={inputValue} />
      <p>Clear history</p>
    </div>
  );
}

export default App;
