import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <>
      <header className="bg-dark text-white p-3">
        <div className="container d-flex justify-content-between align-items-center">
          <h2>Mi Sitio</h2>
          <nav>
            <Link to="/" className="btn btn-outline-light mx-1">Inicio</Link>
            <Link to="/about" className="btn btn-outline-light mx-1">About</Link>
            <Link to="/contact" className="btn btn-outline-light mx-1">Contacto</Link>
            <Link to="/projects" className="btn btn-outline-light mx-1">Proyectos</Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-light text-center p-3 mt-5">
        <p>&copy; 2025 Mi Sitio Web</p>
      </footer>
    </>
  );
}

export default Layout;
