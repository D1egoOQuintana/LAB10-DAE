import { useNavigate } from "react-router-dom";

function SerieComponent({ codigo, nombre, categoria, imagen }) {
  const navigate = useNavigate();
  return (
    <div className="card">
      <img 
        className="card-img-top" 
        src={`https://dummyimage.com/400x250/000/fff&text=${imagen}`} 
        alt={nombre} />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{categoria}</p>
        <div className="d-flex justify-content-between">
          <button 
            className="btn btn-secondary" 
            onClick={() => navigate(`/series/edit/${codigo}?nombre=${nombre}&cat=${categoria}&img=${imagen}`)}>
            Editar
          </button>
          <button className="btn btn-danger">Eliminar</button>
        </div>
      </div>
    </div>
  );
}

export default SerieComponent;
