import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "./hoc";
import { slideIn } from "../utils/motion";

//serviceId - service_tqbrt1e
//template id - template_s2i032e
//public key - FgidWmRp1qdz1GgZV

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_tqbrt1e",
        "template_6hxnl4b",
        {
          from_name: form.name,
          to_name: "Aditya Singh",
          from_email: form.email,
          to_email: "sengaraditya01@gmail.com",
          message: form.message + " " + "from" + " " + form.email,
        },
        "FgidWmRp1qdz1GgZV"
      )
      .then(
        () => {
          alert("Thank You. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });

          setLoading(false);
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert(
            "Something went wrong. Please try again later. or you contact mail me directly at sengaraditya01@gmail.com."
          );
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "between", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          action=""
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none font-medium placeholder:text-secondary"
              placeholder="What's your name?"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none font-medium placeholder:text-secondary"
              placeholder="What's your Email"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 text-white rounded-lg outline-none font-medium placeholder:text-secondary"
              placeholder="Say Something..."
            />
          </label>
          <button
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            type="submit"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        className="xl:h-auto xl-flex md:h-[550px] h-[350px] flex-1"
        variants={slideIn("right", "between", 0.2, 1)}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
