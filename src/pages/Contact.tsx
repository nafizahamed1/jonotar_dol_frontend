import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Contact Us</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <input
          name="name"
          placeholder="Name"
          className="border p-2 w-full"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          className="border p-2 w-full"
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Message"
          className="border p-2 w-full"
          onChange={handleChange}
        />

        <button className="bg-red-600 text-white px-4 py-2">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;