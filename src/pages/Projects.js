import React from 'react';
import articles from '../data/articles';

function Projects() {
  return (
    <div className="container my-4">
      <h2>Proyectos</h2>
      <div className="row">
        {articles.map(({ id, title, content, link, image }) => (
          <div key={id} className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title}</h5>
                <p className="card-text flex-grow-1">{content}</p>
                {link && (
                  <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">
                    Ver Proyecto
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;