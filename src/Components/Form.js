import "../Components/FormStyles.css";

import React from "react";

const Form = () => {
  return (
    <div className="from">
      <form>
        <label>Your Name</label>
        <input type="text" />

        <label>Email</label>
        <input type="text" />

        <label>Subject</label>
        <input type="text" />

        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here" />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
