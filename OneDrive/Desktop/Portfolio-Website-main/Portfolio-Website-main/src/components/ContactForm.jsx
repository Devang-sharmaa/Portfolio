import React, { useState } from "react";
import Input from "./Input";
import Button from "./Btn";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('body', body);

    fetch('https://formspree.io/f/mnnqadgd', { // Your Formspree ID
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json' // Specify the expected response format
      }
    })
    .then(response => {
      if (response.ok) {
        alert('Your message has been sent!');
        // Reset form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setSubject("");
        setBody("");
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
      alert('There was an error sending your message. Please try again.');
    });
  };

  return (
    <div className="relative flex flex-col lg:max-w-[50%] grow overflow-hidden">
      <form className="space-y-3 m-8 md:m-12" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:space-x-4 justify-between">
          <Input
            label="First-Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="John"
            required
          />
          <Input
            label="Last-Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Doe"
            required
          />
        </div>
        <Input
          label="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError("");
          }}
          type="email"
          placeholder="johndoe@example.com"
          required
        />
        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        <Input
          label="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Your Subject Here"
          required
        />
        <div className="flex flex-col shrink">
          <label
            htmlFor="contact-body"
            className="font-extralight text-xs py-[0.125rem] px-1 text-fuchsia-500 "
          >
            Body
          </label>
          <textarea
            name="contact-body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="p-3 border rounded-md text-sm font-light text-gray-500 min-h-[50px] h-fit focus-within:ring-2 focus-within:ring-fuchsia-500 focus-within:ring-offset-2 transition-all"
            required
          />
        </div>
        <Button text="Submit" type="submit" className="w-full" bg="bg-fuchsia-500" />
      </form>
    </div>
  );
}

