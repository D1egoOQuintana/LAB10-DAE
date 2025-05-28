import React, { useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { useNavigate, useParams, useLocation } from "react-router-dom";

function SerieFormPage() {
  const navigate = useNavigate();
  const { cod } = useParams();// Código de serie si se está editando
  const query = new URLSearchParams(useLocation().search);

  const series = [
    {cod:1, nom:"Friends", cat:"Comedy", img:"friends.png"},
    {cod:2, nom:"Law & Order", cat:"Drama", img:"law-and-order.png"},
    {cod:3, nom:"The Big Bang Theory", cat:"Comedy", img:"the-big-bang-theory.png"},
    {cod:4, nom:"Stranger Things", cat:"Horror", img:"stranger-things.png"},
    {cod:5, nom:"Dr. House", cat:"Drama", img:"dr-house.png"},
    {cod:6, nom:"The X-Files", cat:"Drama", img:"the-x-files.png"},
  ];

  const [nombre, setNombre] = React.useState("");
  const [categoria, setCategoria] = React.useState("");
  const [imagen, setImagen] = React.useState("");

  // Cargar datos si es edición (cod existe)
  useEffect(() => {
    if (cod) {
      const item = series.find(s => s.cod === Number(cod));
      if (item) {
        setNombre(item.nom);
        setCategoria(item.cat);
        setImagen(item.img);
      }
    } else {
      // Si no es edición, puede tomar valores del query string si quieres
      setNombre(query.get("nombre") || "");
      setCategoria(query.get("cat") || "");
      setImagen(""); // Por defecto no hay imagen
    }
  }, [cod, query]);

  const handleSubmit = e => {
    e.preventDefault();
    // Aquí iría llamado a API o state update
    navigate("/series");
  };

  return (
    <>
      <HeaderComponent />
      <div className="container mt-3">
        <h3 className="border-bottom pb-3 mb-3">{cod ? "Editar" : "Nuevo"} - Serie</h3>
        <form onSubmit={handleSubmit} className="row">
          <div className="col-md-4">
            <img 
              id="fileImg" 
              className="card-img-top mb-3" 
              src={`https://dummyimage.com/400x250/000/fff&text=${imagen ? imagen : ""}`} 
              alt="preview"/>
          </div>
          <div className="col-md-8">
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">Nombre</label>
              <input 
                id="inputName" 
                type="text" 
                className="form-control" 
                value={nombre} 
                onChange={e => setNombre(e.target.value)} 
                required />
            </div>
            <div className="mb-3">
              <label htmlFor="inputCategory" className="form-label">Categoría</label>
              <select 
                id="inputCategory" 
                className="form-select" 
                value={categoria} 
                onChange={e => setCategoria(e.target.value)} 
                required>
                <option value="">Seleccione...</option>
                {["Horror","Comedy","Action","Drama"].map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="inputImage" className="form-label">Imagen</label>
              <input 
                id="inputImage" 
                type="file" 
                className="form-control" 
                // Aquí puedes agregar lógica para manejar la carga y vista previa de la imagen
                />
            </div>
            <div className="d-flex">
              <button type="submit" className="btn btn-primary me-2">Guardar</button>
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={() => navigate("/series")}>
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SerieFormPage;
