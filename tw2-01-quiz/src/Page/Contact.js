
import React from 'react'
import {baseurl} from '../config/baseurl';

function Contact() {


  const handleSubmit = () => {
    console.log("webform contact handle submit");
    const message = {
      "webform_id" : "contact",
      "name" :[{"value": "Test" }],
      "email" :[{"value": "test@gmail.com"}],
      "subject" :[{"value": "123456789"}],
      "message" :[{"value": "Hello"}]
  }

  fetch(`${baseurl.URL}/webform_rest/submit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: message
  })

  }

  
  return (
    <div>
      <h1>Contact form</h1>
      <div onClick={handleSubmit}>Submit</div>
    </div>
  )
}

export default Contact
