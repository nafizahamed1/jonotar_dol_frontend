import { useState, type ChangeEvent, type FormEvent } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div className="container py-10">
      <h1 className="text-3xl sm:text-4xl font-bold">Contact Us</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mt-4 max-w-2xl">
        <input
          name="name"
          placeholder="Name"
          className="border border-gray-300 rounded-lg w-full px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary transition"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          className="border border-gray-300 rounded-lg w-full px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary transition"
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Message"
          className="border border-gray-300 rounded-lg w-full px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary transition min-h-[160px]"
          onChange={handleChange}
        />

        <button className="w-full sm:w-auto bg-red-600 text-white px-6 py-3 rounded-lg text-sm sm:text-base">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;