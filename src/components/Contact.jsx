import emailjs from "@emailjs/browser";
// import styled from "styled-components";
import { useRef } from "react";

// npm i @emailjs/browser

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_8a00toq",
                "template_dy9zuf9",
                form.current,
                "385Kp5vpVUr8qsZUQ"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
<>






<form ref={form} onSubmit={sendEmail}>
            
            {/* <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" /> */}
            <div class="flex flex-col" id="waitlist">

  <div>
    <div class="flex justify-center py-16">
      <div class="flex mt-6 flex-col md:flex-row">
      
        {/* <button class="mx-auto bg-blue-700 text-white px-6 py-2 rounded-xl shadow border font-medium mt-4 text-xl hover:brightness-90"> Get Early Access </button> */}
        {/* <input type="email" name="user_email" /> */}
      <div className="mx-6">

        <textarea  class="bg-pink-100 text-slate-700 w-72 c h-14 rounded-xl block flex-1 bg-transparent py-4 pl-4  placeholder:text-gray-400 focus:none sm:text-md sm:leading-6 text-lg" name="message" placeholder="Message to MicroWorld" />
      </div>
        <input type="email" name="user_email"  id="email" autocomplete="email" value="" class="border w-72 h-14 rounded-xl block flex-1 bg-transparent py-4 pl-4 text-gray-900 placeholder:text-gray-400 focus:none sm:text-md sm:leading-6 text-lg" placeholder="Enter your e-mail"></input>
        <input  class="bg  bg-blue-700 text-white px-6 py-2 rounded-xl shadow border font-medium mt-4 text-xl hover:brightness-90 mx-3" type="submit" value="Message" />
      </div>
    </div>
  </div>
</div>
        </form>







</>

    );
};

export default Contact;