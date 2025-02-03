import React from "react";
import { Toaster,toast } from "react-hot-toast"
import { IoClose } from "react-icons/io5";


function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "73e5ed39-6687-4bea-a6c9-74494024ac64");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      toast.success('Message Sent')
      event.target.reset();
    }
  };

  return (
    <section id="contact" className="lg:py-16 py-10 h-[100vh] px-4">
        <div><Toaster/></div>
     <div className="text-center mt-16">
     <h1 className="uppercase text-[40px] text-blue-600">Contact Me</h1>
     <hr className="w-[200px] h-px mx-auto border-black"/>
     </div>

     
    <div className="shadow-lg max-w-[500px] h-[500px] rounded-lg lg:mt-20 border-2 mt-16 mx-auto">   
    <div className="w-full border-b-2 h-[40px]">
        <div className="flex justify-between items-center">
            <hr className="w-[200px] border-2  ml-5"/>
            <IoClose size={30}/>
        </div>
    </div>
      <form onSubmit={onSubmit} className="space-y-8 max-w-[80%] mx-auto mt-10">
              <input type="text" name="name" className="block p-2.5 w-full text-sm bg-gray-100 rounded-lg shadow-sm border font-extrabold" placeholder="Name" required/>           
              <input type="email" name="email" className="block p-2.5 w-full text-sm bg-gray-100 rounded-lg shadow-sm border font-extrabold" placeholder="Email" required/>           
              <textarea name="message" rows="6" className="block p-2.5 w-full text-sm bg-gray-100 rounded-lg shadow-sm border font-extrabold" placeholder="Leave a message..."></textarea>    
          <button type="submit" className="py-3 px-5 text-sm font-semibold text-center rounded-md bg-blue-600 text-white">Send message</button>
      </form>
      </div>
    </section>
  );
}

export default Contact;
