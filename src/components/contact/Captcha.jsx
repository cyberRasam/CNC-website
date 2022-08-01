import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const App = () => {
  function onChange(value) {
    console.log('Captcha value:', value);
  }
  return (
    <div className="App">
      <ReCAPTCHA
        sitekey="6LcCKTEhAAAAAE2jSkhTwaFr9A72wNQoU-qbEWVX"
        onChange={onChange}
        size="normal"
      />
    </div>
  );
};

export default App;
