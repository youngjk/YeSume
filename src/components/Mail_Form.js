import React from 'react'
import './Mail_Form.css'
export const Mail_Form = () => {
  return (
    <form action="mailto:yj@yesume.com" method="post" encType="text/plain">

      {/* Name */}
      <label for="first_name">Name</label>
      <br></br>
      <input type="text" id="first_name" name="First Name"
        placeholder="First Name"></input>
      <input type="text" id="last_name" name="Last Name"
        placeholder="Last Name"></input>
      <br></br>

      {/* Email */}
      <label for="email">E-Mail</label>
      <br></br>
      <input type="text" id="email" name="E-mail"
        placeholder="example@e-mail.com"></input>
      <br></br>

      {/* Message */}

      <label for="message">Message</label>
      <br></br>
      {/* What is it about? */}
      <select id="mock">
        <option value="" disabled selected hidden>
          What is it about?
        </option>
        <option value="mock1">mock1</option>
        <option value="mock2">mock2</option>
        <option value="mock3">mock3</option>
        <option value="mock4">mock4</option>
      </select>
      <br></br>
      <textarea id="message" placeholder="inquires"></textarea>

      {/* Submit */}
      <input type="submit" value="Submit"></input>
    </form >
  )
}