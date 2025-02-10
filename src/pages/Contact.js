import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Fonction qui met à jour l'état local lors de la saisie dans les champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ajouter votre logique d'envoi des données ici
    alert(`Merci pour votre message, ${formData.name} !`);
    // Réinitialise le formulaire
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section>
      <h2>Contact</h2>
      <p>Veuillez remplir le formulaire ci-dessous pour nous contacter :</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nom :</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email :</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;
