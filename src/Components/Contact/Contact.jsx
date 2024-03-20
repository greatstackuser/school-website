import React, { useEffect } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      const hCaptcha = event.target.querySelector('textarea[name=h-captcha-response]').value;
      if (!hCaptcha) {
        event.preventDefault();
        setResult("Please fill out captcha field");
        return
    };
      setResult("Sending....");
      const formData = new FormData(event.target);

      // ------Enter your web3forms access key below-------
      
      formData.append("access_key", "d208259c-8091-4301-ac2c-86450a91b6b6");
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
        setResult(res.message);
        event.target.reset();
      } else {
        console.log("Error", res);
        setResult(res.message);
      }
    };

    function CaptchaLoader() {
      const captchadiv = document.querySelectorAll('[data-captcha="true"]');
      if (captchadiv.length) {
        let lang = null;
        let onload = null;
        let render = null;
  
        captchadiv.forEach(function (item) {
          const sitekey = item.dataset.sitekey;
          lang = item.dataset.lang;
          onload = item.dataset.onload;
          render = item.dataset.render;
  
          if (!sitekey) {
            item.dataset.sitekey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
          }
        });
  
        let scriptSrc = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
        if (lang) {
          scriptSrc += `&hl=${lang}`;
        }
        if (onload) {
          scriptSrc += `&onload=${onload}`;
        }
        if (render) {
          scriptSrc += `&render=${render}`;
        }
  
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.defer = true;
        script.src = scriptSrc;
        document.body.appendChild(script);
      }
    }
  
    useEffect(() => {
      CaptchaLoader();
    }, []);


  return (
    <div className='contact' id='contact'>
      <div className="contact-col">
        <h3>Admissions are open <img src={msg_icon} alt="" /></h3>
        <p>We are delighted to announce that admissions are now open at Aristotlers. For more information or to schedule a visit, please fill out the form below or contact us on the given details.</p>
        <ul>
          <li><b>Whitefield Branch</b></li>
            <li><img src={mail_icon} alt="" />info.whitefield@aristotlers.com</li>
            <li><img src={phone_icon} alt="" />+91 89510 19510</li>
            <li><img src={location_icon} alt="" />#147/2, Karumariyamma Temple Road, <br/> Next to Post Office Road, Whitefield, Bangalore </li>
        </ul>
        <ul>
        <li><b>Brookefield Branch</b></li>
            <li><img src={mail_icon} alt="" />info@aristotlers.com</li>
            <li><img src={phone_icon} alt="" />+91 9535039535</li>
            <li><img src={location_icon} alt="" />#311, 'B' Block, AECS Layout, Kundalahalli <br/> Bangalore, 560034 </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your messages here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <div className="h-captcha" data-captcha="true"></div>
            <button type='submit' className='btn dark-btn submit-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
