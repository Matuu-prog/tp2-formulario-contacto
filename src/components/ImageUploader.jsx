import { useState } from "react";

function ImageUploader() {
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
  const ALLOWED_TYPES = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/gif",
    "image/webp",
    "image/svg+xml",
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // reset estados
    setPreview(null);
    setError("");

    // Validar tipo
    if (!ALLOWED_TYPES.includes(file.type)) {
      setError("El archivo no es una imagen válida.");
      return;
    }

    // Validar tamaño
    if (file.size > MAX_FILE_SIZE) {
      setError("El archivo es demasiado grande (máx 5MB).");
      return;
    }

    // Mostrar preview usando FileReader
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Subir una imagen</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {preview && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={preview}
            alt="Vista previa"
            style={{ maxWidth: "300px", border: "1px solid #ccc" }}
          />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
