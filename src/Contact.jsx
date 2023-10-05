import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [confirm, setConfirm] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm(
        "service_wtw8kfe",
        "template_bhpfy01",
        form.current,
        "nOTVrX1hoFyEN-d1K"
      )
      .then(
        (result) => {
          setConfirm(true);
          setTimeout(function () {
            setConfirm(false);
          }, 2000);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="max-w-[600px] flex flex-col items-center gap-4 md:gap-8 px-4 mx-auto my-[40px]">
      <h1 className="text-center text-xl sm:text-2xl md:text-3xl md:mt-4 font-semibold">
        Contact
      </h1>
      <p className="text-center text-gray-600">
        Please fill out the quick form and I will be in touch as soon as I can!
      </p>
      <form
        className="flex flex-col gap-4 my-8 w-full"
        ref={form}
        onSubmit={sendEmail}
      >
        <div>
          <label className="font-bold" htmlFor="">
            Name *
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            type="text"
            name="user_name"
            className="border p-2 mt-1 w-full rounded-md"
            placeholder="Your Name..."
          />
        </div>
        <div>
          <label className="font-bold" htmlFor="">
            Email Address *
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            name="user_email"
            className="border p-2 mt-1 w-full rounded-md"
            placeholder="Your Name..."
          />
        </div>
        <div>
          <label className="font-bold" htmlFor="">
            Message *
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            name="message"
            rows={6}
            className="border p-2 mt-1 w-full rounded-md"
            placeholder="Your Name..."
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            value="Send"
            className="bg-black hover:bg-black/70 duration-300 rounded-full w-28 py-2 text-white"
          >
            Submit
          </button>
          {confirm && "Message sent ✔️"}
        </div>
      </form>
    </div>
  );
}
