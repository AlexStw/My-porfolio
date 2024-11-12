// src/components/Projects.js
import React from 'react';

const projects = [
  { title: 'Traducción', description: 'Se realizó traducción de un documento con gráficos incluidos sobre medioambiente' },
  { title: 'Entusiasta de IAs', description: 'Constante investigación de nuevas tecnologías, sobre todo en inteligencias artificiales' },
  { title: 'Soporte IT', description: 'Asistencia para el mayor entendimiento de las tecnologías' },
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
