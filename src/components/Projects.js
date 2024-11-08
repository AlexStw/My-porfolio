// src/components/Projects.js
import React from 'react';

const projects = [
  { title: 'Traduzco cosas', description: 'Me la re banco con traducir cosas' },
  { title: 'Robo a las IAs', description: 'Master of the Universe' },
  { title: 'Proyecto 3', description: 'Descripción del proyecto 3' },
];

const Projects = () => {
  return (
    <section style={{ padding: '2em' }}>
      <h2>Mis Proyectos</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ border: '1px solid #ddd', padding: '1em' }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
