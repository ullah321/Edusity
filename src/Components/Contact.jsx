import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { toast } from "react-toastify";


const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6611d360-ba53-48e0-81dc-2d12f8847779");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Sent Message Succesfully!")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult('');
    }
  };



  return (
    <div className="contact mx-auto my-16 flex items-center justify-between" style={{width: '80%'}}>
      <div className="contact-left pb-10" style={{flexBasis: '48%', color: '#676767'}}>
        <h2 className="font-bold text-xl flex items-center mb-6" style={{color: '#000F38'}}>Send Us a Message <FontAwesomeIcon icon={faEnvelopeOpenText} className="pl-3 text-yellow-600 text-2xl" /></h2>
        <p style={{maxWidth: '450px'}} className="text-md">Feel free to reach out through contact form or find our contact information below. Your feedback, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul className="text-sm">
            <li className="flex items-center my-6"> <FontAwesomeIcon className="pr-2 text-md text-blue-600" icon={faEnvelope} /> nstucommunity@gmail.com</li>
            <li className="flex items-center my-6"> <FontAwesomeIcon className="pr-2 text-md text-blue-600" icon={faPhoneVolume} /> +8801255646154</li>
            <li className="flex items-center my-6"> <FontAwesomeIcon className="pr-2 text-md text-blue-600" icon={faLocationDot} /> Near sonapur zero point, noakhali sadar, maijdee court noakhali.</li>
        </ul>
      </div>
      <div className="contact-right" style={{flexBasis: '50%'}}>
        <form onSubmit={onSubmit}>
            <label>Full Name</label>
            <input type="text" placeholder="Ahmad Ashraf" name="name" required />
            <label>Email Address</label>
            <input type="email" placeholder="someone@gmail.com" name="email" required />
            <label>Contact Number</label>
            <input type="tel" placeholder="+8801887974944" name="phone" required />
            <label>Write Your Message</label>
            <textarea name="message" rows="6" placeholder="What`s on your mind?"></textarea>
            <div className="flex items-center justify-center">
              <button className="bg-blue-700 text-white py-2 px-5 mt-4 mb-6 rounded-lg font-medium hover:border hover:border-blue-600 hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out inline-flex items-center justify-center text-md">Submit now<FontAwesomeIcon icon={faArrowRight} className='ml-4' /> </button>
            </div>
        </form>
        <span className="text-green-700 font-bold none">{result}</span>
      </div>
    </div>
  );
}

export default Contact
