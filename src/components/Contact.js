// src/components/Contact.js
import React from 'react';

const Contact = () => (
  <section className="p-8 bg-blue-900 text-white text-center">
    <h2 className="text-2xl font-bold mb-4">Contacto</h2>
    <p className="mb-4">¿Te gustaría trabajar juntos o tienes alguna pregunta? ¡Contáctame!</p>
    <form className="flex flex-col space-y-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Tu nombre"
        className="p-2 rounded bg-white text-black"
      />
      <input
        type="email"
        placeholder="Tu correo"
        className="p-2 rounded bg-white text-black"
      />
      <textarea
        placeholder="Tu mensaje"
        className="p-2 rounded bg-white text-black"
        rows="4"
      />
      <button
        type="submit"
        className="bg-red-600 text-white p-2 rounded hover:bg-red-700"
      >
        Enviar
      </button>
    </form>
  </section>
);

export default Contact;
