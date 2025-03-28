import React, { useState } from "react";
import axios from "axios";
import { FiSend } from "react-icons/fi";
import Title from "../home/Title";

const Contact = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  // ================= Error Messages Start here =================
  const [errClientName, setErrClientName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errMessages, setErrMessage] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  // ================= Email Validation Start here ===============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/);
  };

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail(false);
  };
  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessage(false);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!clientName) setErrClientName(true);
    if (!email || !EmailValidation(email)) setErrEmail(true);
    if (!messages) setErrMessage(true);

    if (clientName && email && EmailValidation(email) && messages) {
      axios.post("https://getform.io/f/e18ee560-5133-4cfe-9a48-eddb6f012a9f", {
        name: clientName,
        email: email,
        message: messages,
      });
      setSuccessMsg(
        `Hello ${clientName}, Your message has been sent successfully. Thank you!`
      );
      setClientName("");
      setEmail("");
      setMessages("");
    }
  };

  return (
    <div className="w-full">
      <Title title="Get" subTitle="In Touch" />
      <div className="p-6 w-full flex flex-col md:flex-row justify-between gap-4 md:gap-10 lgl:gap-20">
        <div className="w-full lgl:w-1/2">
          <p className="flex gap-6 justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md">Address:</span>
            Newry Mahonnathi, Door No 5, New, 3, 22nd Cross St, Indira Nagar, Adyar, Chennai, Tamil Nadu 600020
          </p>
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md">Phone:</span>
            +91 7397387543
          </p>
        </div>
        <div className="w-full lgl:w-1/2">
          <p className="flex justify-between lgl:gap-6 w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md">Email:</span>
            akshaybenedict005@gmail.com
          </p>
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md">Freelance:</span>
            Available
          </p>
        </div>
      </div>
      <div className="w-full mt-10">
        <Title title="Send" subTitle="Messages" />
        {successMsg ? (
          <p className="text-center text-base font-titleFont p-20 text-designColor">
            {successMsg}
          </p>
        ) : (
          <form className="p-6 flex flex-col gap-6">
            <div className="w-full flex flex-col lgl:flex-row gap-4 lgl:gap-10 justify-between">
              <input
                onChange={handleName}
                value={clientName}
                className={`$ { errClientName ? "border-red-600" : "border-zinc-600" } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none`}
                type="text"
                placeholder="Full Name"
              />
              <input
                onChange={handleEmail}
                value={email}
                className={`$ { errEmail ? "border-red-600" : "border-zinc-600" } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none`}
                type="email"
                placeholder="Email Address"
              />
            </div>
            <textarea
              onChange={handleMessages}
              value={messages}
              className={`$ { errMessages ? "border-red-600" : "border-zinc-600" } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none resize-none`}
              placeholder="Your Message"
              rows="4"
            ></textarea>
            <button onClick={handleSend} className="text-base w-44 flex items-center gap-1 text-gray-200 hover:text-designColor">
              Send Message <FiSend />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
