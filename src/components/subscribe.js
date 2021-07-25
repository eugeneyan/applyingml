import React, { useState } from 'react';
import './subscribe.styles.css';
import Button from './button';

const SubscriptionForm = () => {
  const [status, setStatus] = useState(null);
  const [email, setEmail] = useState('');

  // FORM_URL should be the same as the form action url pointed out above
  const FORM_URL = `https://app.convertkit.com/forms/2417784/subscriptions`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    try {
      const response = await fetch(FORM_URL, {
        method: 'post',
        body: data,
        headers: {
          accept: 'application/json',
        },
      });
      setEmail('');
      const json = await response.json();
      if (json.status === 'success') {
        setStatus('SUCCESS');
        return;
      }
    } catch (err) {
      setStatus('ERROR');
      console.log(err);
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  return (
    <div className="Subscribe">
      {status === 'SUCCESS' && (
        <p className="sub_response positive">
          Please check your email and confirm your subscription!
        </p>
      )}
      {status === 'ERROR' && (
        <p className="sub_response negative">Oops, Something went wrong! Please try again.</p>
      )}

      <h3 className="sub_header">Want email updates on new content?</h3>
      <form className="sub_form" action={FORM_URL} method="post" onSubmit={handleSubmit}>
        <input
          className="sub_input"
          type="email"
          aria-label="Your email"
          // The name attribute should be the same as on you selected form.
          name="email_address"
          placeholder=" Your email address ..."
          onChange={handleInputChange}
          value={email}
          required
        />

        <Button type="submit">Subscribe</Button>
      </form>
    </div>
  );
};

export default SubscriptionForm;
