import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    navigate("/series");
  };

  return (
    <section className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-5">
        <h1 className="fs-4 fw-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-Mail</label>
            <input id="email" type="email" className="form-control" required autoFocus />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input id="password" type="password" className="form-control" required />
          </div>
          <div className="d-flex align-items-center">
            <div className="form-check">
              <input type="checkbox" id="remember" className="form-check-input" />
              <label htmlFor="remember" className="form-check-label">Recordarme</label>
            </div>
            <button type="submit" className="btn btn-primary ms-auto">Ingresar</button>
          </div>
        </form>
        <div className="text-center mt-3 text-muted">&copy; Tecsup 2024</div>
      </div>
    </section>
  );
}

export default LoginPage;
