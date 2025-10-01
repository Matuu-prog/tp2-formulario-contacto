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
    </div>
  );
}

export default ContactForm;
