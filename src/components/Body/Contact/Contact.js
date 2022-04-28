import React, { useRef } from "react";

import emailjs from "@emailjs/browser";
import SocialContact from "../../Common/SocialContact/SocialContact";
import classes from "./Contact.module.css";

function Contact() {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_jr9qwbn",
        "template_zgtn2mu",
        form.current,
        "7XKwqP1F4iHSv81K9"
      )
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes.contact} id="contact">
      <label className={classes.sectionTitle}>Contact</label>
      <div className={classes.formContainer}>
        <form ref={form} className={classes.form} onSubmit={sendEmail}>
          <div>
            <label>Email</label>
            <input type="email" name="user_email" />
          </div>
          <div>
            <label>Name</label>
            <input type="text" name="user_name" />
          </div>
          <div>
            <label>Message</label>
            <textarea
              rows="7"
              cols="20"
              className={classes.textarea}
              name="message"
            />
          </div>
          <div className={classes.btn}>
            <button type="submit" value="Send">
              Send Email
            </button>
          </div>
        </form>
      </div>

      <div className={classes.contactContainer}>
        <p className={classes.connect}>Connect with me</p>
        <SocialContact />
      </div>
    </div>
  );
}

export default Contact;
