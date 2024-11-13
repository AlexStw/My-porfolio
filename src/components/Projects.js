// src/components/Projects.js
import React from 'react';

const Projects = () => (
  <section className="p-8 bg-gray-100">
    <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">Mis Proyectos</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-800">Proyecto 1</h3>
        <p className="text-gray-600 mt-2">Descripción del proyecto 1...</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-800">Proyecto 2</h3>
        <p className="text-gray-600 mt-2">Descripción del proyecto 2...</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-800">Proyecto 3</h3>
        <p className="text-gray-600 mt-2">Descripción del proyecto 3...</p>
      </div>
      {/* Agrega más proyectos según sea necesario */}
    </div>
  </section>
);

export default Projects;
