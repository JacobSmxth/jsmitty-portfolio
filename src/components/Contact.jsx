import { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="contact" className="p-3 my-8">
      <h2 className="text-2xl text-center text-gray-800 dark:text-gray-200 mb-5">
        Get In Touch
      </h2>
      
      {submitted ? (
        <div className="max-w-lg mx-auto p-6 border border-green-300 dark:border-green-600 rounded-xl bg-green-50 dark:bg-green-900/30 text-center">
          <h3 className="text-xl text-green-600 dark:text-green-400 mb-2">Message Sent!</h3>
          <p className="text-gray-700 dark:text-gray-300">Thank you for reaching out. I'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form 
          className="max-w-lg mx-auto p-4 border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800/30 shadow-md"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={() => setSubmitted(true)}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>Don't fill this out if you're human: <input name="bot-field" /></label>
          </p>
          
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="w-full p-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-gray-800 dark:text-gray-200"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="w-full p-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-gray-800 dark:text-gray-200"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows="3"
              value={formState.message}
              onChange={handleChange}
              className="w-full p-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-gray-800 dark:text-gray-200"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded transition-colors"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;