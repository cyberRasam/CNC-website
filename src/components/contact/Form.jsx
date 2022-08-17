import React from 'react';
import Captcha from './Captcha.jsx';

function Form() {
  const formId = 'FBFiNBpD';
  const formSparkUrl = `https://submit-form.com/${formId}`;

  return (
    <div className="cncium_contact">
      <div className="cncium_contact_header">
        <h1 className="gradient__text">Contact us</h1>
      </div>
      <div className="cncium_contact_form">
        <form className="cncium_contact-form" action={formSparkUrl}>
          <input type="hidden" name="_feedback.dark" value="true" />
          <div className="cncium_contact_form-items">
            <div className="left">
              <div>
                <label className="cncium_contact_label" htmlFor="Name">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="cncium_contact_label" htmlFor="Email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <div>
                <label className="cncium_contact_label" htmlFor="Number">
                  Phone number
                </label>
                <input
                  type="number"
                  name="number"
                  maxLength={11}
                  id="number"
                  placeholder="(02) 1234 5678"
                  pattern="[0-9]{2} [0-9]{4} [0-9]{4}"
                  required
                />
              </div>
            </div>

            <div className="right">
              <div>
                <label className="cncium_contact_label" htmlFor="Message">
                  Message
                </label>
                <textarea
                  className="message"
                  type="text"
                  name="message"
                  id="message"
                />
              </div>
              <div className="cncium_file_upload">
                <input
                  type="hidden"
                  role="uploadcare-uploader"
                  data-public-key="e6b8ffafabf948c5c0e1"
                  data-tabs="file camera url facebook gdrive gphotos"
                  name="file"
                  id="file"
                />
              </div>
              <Captcha onloadCallback data-size="compact"></Captcha>
            </div>
          </div>

          <button
            id="submit-form"
            className="cncium_contact_submit-button"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
