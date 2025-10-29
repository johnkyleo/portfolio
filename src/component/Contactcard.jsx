import toast, { Toaster } from "react-hot-toast";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
const Contactcard = () => {
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
      toast.success("Message Sent");
      event.target.reset();
    }
  };

  const [contactpage, setContactpage] = useState(false);
  const onClick = () => {
    setContactpage((prev) => !prev);
  };

  return (
    <div
      id="contact"
      className="md:col-span-6 lg:col-span-12 md:row-span-1 bg-accent text-background border border-foreground rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-4 hover:scale-[1.01] transition-transform"
    >
      <div className={`${contactpage ? "hidden" : "block"}`}>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Let's work together
        </h2>
        <p className="text-background/80">
          Have a project in mind? Let's make it happen.
        </p>
      </div>
      <button
        onClick={onClick}
        className={`bg-background text-foreground px-6 py-3 rounded-md hover:bg-background/90 transition flex items-center text-md font-medium ${
          contactpage ? "hidden" : "block"
        }`}
      >
        Contact me
        <ArrowUpRight className="ml-2 h-4 w-4" />
      </button>

      <section
        className={`py-20 px-4 sm:px-6 text-white mx-auto ${
          contactpage ? "block" : "hidden"
        }`}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={onSubmit}>
            <Toaster />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/5 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white"
                  placeholder="Your Name"
                  name="name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white"
                  placeholder="your.email@example.com"
                  name="email"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-bold text-gray-300 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-white/5 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white resize-none"
                placeholder="Your message..."
                name="message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 px-6 bg-white text-black font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:bg-gray-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contactcard;
