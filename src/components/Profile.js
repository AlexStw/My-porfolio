// src/components/Profile.js
import React from 'react';

const Profile = () => (
  <section className="text-center p-8 bg-blue-900 text-white">
    <img
      src="URL_DE_LA_IMAGEN"
      alt="Foto de perfil"
      className="w-36 h-36 rounded-full mx-auto mb-4"
    />
    <h1 className="text-4xl font-bold text-red-600">DEBBIE O'BRIEN</h1>
    <p className="text-lg mt-2">Senior Program Manager at Microsoft</p>
    <p className="text-sm mt-2">Google GDE | Former Microsoft MVP | GitHub Star Alumni | Cloudinary MDE | Auth0 Ambassador | Nuxt Ambassador</p>
  </section>
);

export default Profile;
