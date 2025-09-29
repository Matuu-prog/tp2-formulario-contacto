import React from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18/client";

function UploadImage(){
  const [preview, setPreview] = React.useState(null);
  const [error, setError] = React.useState("");

  function handleFileChange(e){
    const file = e.target.files && e.target.files[0];
    if(!file){
      setPreview(null);
      setError("");
      return;
    }
    if(!file.type.startsWith("image/")){
      setError("El archivo seleccionado no es una imagen.");
      setPreview(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = ev => {
      setPreview(ev.target.result);
      setError("");
    };
    reader.readAsDataURL(file);
  }

  return (
    <div>
      <h1>Subir Imagen con React</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {error && <p className="error">{error}</p>}
      {preview && <div className="preview"><img src={preview} alt="preview" /></div>}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<UploadImage />);
