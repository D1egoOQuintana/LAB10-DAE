import HeaderComponent from "../components/HeaderComponent";
import SerieComponent from "../components/SerieComponent";

function SeriePage() {
  const series = [
    { cod:1, nom:"Friends", cat:"Comedy", img:"Friends" },
    { cod:2, nom:"Dr. House", cat:"Drama", img:"DrHouse" },
    // ... más series
  ];

  return (
    <>
      <HeaderComponent />
      <div className="container mt-3">
        <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
          <h3>Series</h3>
          <button className="btn btn-primary" onClick={() => window.location="/series/new"}>Nuevo</button>
        </div>
        <div className="row">
          {series.map(s => (
            <div key={s.cod} className="col-md-3 mb-3">
              <SerieComponent 
                codigo={s.cod} 
                nombre={s.nom} 
                categoria={s.cat} 
                imagen={s.img} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SeriePage;
