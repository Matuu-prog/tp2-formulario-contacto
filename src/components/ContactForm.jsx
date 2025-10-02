import { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.correo || !form.mensaje) {
      setStatus("Por favor, completa todos los campos.");
      return;
    }

    if (!validateEmail(form.correo)) {
      setStatus("El correo no es válido.");
      return;
    }

    emailjs.send(
      "service_mx65gck",     
      "template_pl2fdaj",    
      {
        from_name: form.nombre,
        from_email: form.correo,
        message: form.mensaje,
      },
      "gqrgPNQoorZTfeLRe"      
    )
    .then(() => {
      setStatus("✅ Correo enviado correctamente");
      setForm({ nombre: "", correo: "", mensaje: "" });
    })
    .catch(() => {
      setStatus("❌ Error al enviar el correo.");
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label><br />
          <input type="text" name="nombre" value={form.nombre} onChange={handleChange} />
        </div>
        <div>
          <label>Correo:</label><br />
          <input type="email" name="correo" value={form.correo} onChange={handleChange} />
        </div>
        <div>
          <label>Mensaje:</label><br />
          <textarea name="mensaje" value={form.mensaje} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>

      {status && <p style={{ marginTop: "10px" }}>{status}</p>}
      <div className="mapa">
        <iframe
          title="Ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.251181859281!2d-65.41452752543583!3d-24.786851107754195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3bba3c3fefd%3A0xe77d2372b09385c9!2sHotel%20Alejandro%20I%2C%20Affiliated%20by%20Meli%C3%A1!5e0!3m2!1ses!2sar!4v1759443587547!5m2!1ses!2sar"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        </div>
    </div>
    
  );
}

export default ContactForm;
