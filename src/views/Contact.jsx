import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import SocialLinks from '../components/SocialLinks'; // Import the SocialLinks component

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_lkfbxbk',  // Your Service ID
        'template_6qi1hhg',  // Your Template ID
        form.current, {
          publicKey: 'xX1q35ZaILH241mYx',  // Your User ID
        })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        },
      );
  };

  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full p-4">
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4'>
            Contact
          </p>
          <p className='py-6'>
            Submit the form below to get in touch with me<br/>
            you can reach out me out through below credentials
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {/* Left side: Email and Social Links */}
          <div className='flex flex-col justify-center items-start'>
           
            <SocialLinks /> {/* Render the SocialLinks component */}
          </div>

          {/* Right side: Contact Form */}
          <div className='flex justify-center items-center'>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full md:w-3/4">
              <input
                type="text"
                name="name"
                placeholder='Enter your name'
                className="p-2 bg-transparent border-2 rounded-md text-white"
              />

              <input
                type="email"
                name="email"
                placeholder='Enter your email'
                className="p-2 my-4 bg-transparent border-2 rounded-md text-white"
              />

              <textarea
                name="message"
                placeholder='Your message'
                rows="6"
                className="p-2 bg-transparent border-2 rounded-md text-white"
              />

              <button
                type="submit"
                value="Send"
                className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-2 w-35 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full  bg-gradient-to-b from-gray-800 to-black text-center py-8">
        <p className="text-white">
          &copy; {new Date().getFullYear()} Sona Angdembe | Design inspired by Yash Patel
        </p>
      </footer>
    </div>
  );
};

export default Contact;
