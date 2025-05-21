import HeaderComponent from "../components/HeaderComponent";
import { useNavigate, useParams, useLocation } from "react-router-dom";

function SerieFormPage() {
  const navigate = useNavigate();
  const { cod } = useParams();           // si editas
  const query = new URLSearchParams(useLocation().search);
  const [nombre, setNombre] = React.useState(query.get("nombre") || "");
  const [categoria, setCategoria] = React.useState(query.get("cat") || "");
  // img será leído del input file

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
              src={`https://dummyimage.com/400x250/000/fff&text=${cod ? nombre : ""}`} 
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
                onChange={e=>setNombre(e.target.value)} 
                required />
            </div>
            <div className="mb-3">
              <label htmlFor="inputCategory" className="form-label">Categoría</label>
              <select 
                id="inputCategory" 
                className="form-select" 
                value={categoria} 
                onChange={e=>setCategoria(e.target.value)} 
                required>
                <option value="">Seleccione...</option>
                {["Horror","Comedy","Action","Drama"].map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="inputImage" className="form-label">Imagen</label>
              <input id="inputImage" type="file" className="form-control" required />
            </div>
            <div className="d-flex">
              <button type="submit" className="btn btn-primary me-2">Guardar</button>
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={()=>navigate("/series")}>
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
