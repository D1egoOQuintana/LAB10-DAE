
function CategoryRow({ category }) {
  return (
    <div className="card mb-3">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title mb-1">{category.nom}</h5>
          <h6 className="card-subtitle text-muted">ID: {category.cod}</h6>
        </div>
        <div>
          <button className="btn btn-secondary btn-sm me-2"><i className="bi bi-pencil-square"></i></button>
          <button className="btn btn-danger btn-sm"><i className="bi bi-trash-fill"></i></button>
        </div>
      </div>
    </div>
  );
}

export default CategoryRow;
