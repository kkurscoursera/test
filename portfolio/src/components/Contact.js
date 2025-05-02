import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Спасибо за сообщение!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <h2>Свяжитесь со мной</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Имя" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Сообщение" value={form.message} onChange={handleChange} required />
        <button type="submit">Отправить</button>
      </form>
    </section>
  );
}

export default Contact;
