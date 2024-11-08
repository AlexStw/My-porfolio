import React from 'react';

const Contact = () => {
  return (
    <section style={{ textAlign: 'center', padding: '2em' }}>
      <h2>Contacto</h2>
      <p>Puedes contactarme a través de los siguientes medios:</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>Email: <a href="mailto:kevinstewartdvorkin@gmail.com">kevinstewartdvorkin@gmail.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/ks-dvorkin/" target="_blank" rel="noopener noreferrer">Alexander Stewart</a></li>
        <li>Github: <a href="https://github.com/AlexStw" target="_blank" rel="noopener noreferrer">AlexStw</a></li>
      </ul>
    </section>
  );
};

export default Contact;
