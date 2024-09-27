import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className='pb-8'>
          <p className='text-4xl text-bold inline border-b-4'>
            Contact
          </p>
          <p className='py-6'>
            Submit the form below to get in touch with me
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder='Enter your name'
              className="p-2 bg-transparent border-2 rounded-md text-white"
            />

            <input
              type="email"
              name="email"
              placeholder='Email'
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white"
            />

            <textarea
              name="message"
              placeholder='Messages'
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
  );
};

export default Contact;
