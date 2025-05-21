import HeaderComponent from "../components/HeaderComponent";

function CategoryPage() {
  const categories = [
    { cod: 1, nom: "Horror" },
    { cod: 2, nom: "Comedy" },
    { cod: 3, nom: "Action" },
    { cod: 4, nom: "Drama" },
  ];

  return (
    <>
      <HeaderComponent />
      <div className="container mt-3">
        <h3 className="border-bottom pb-3 mb-3">Categorías</h3>
        <table className="table">
          <thead>
            <tr><th>Nombre</th><th className="text-center">Id</th><th className="text-center">Acciones</th></tr>
          </thead>
          <tbody>
            {categories.map(item => (
              <tr key={item.cod}>
                <td>{item.nom}</td>
                <td className="text-center">{item.cod}</td>
                <td className="text-center">
                  <button className="btn btn-secondary btn-sm me-2"><i className="bi bi-pencil-square"></i></button>
                  <button className="btn btn-danger btn-sm"><i className="bi bi-trash-fill"></i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CategoryPage;
