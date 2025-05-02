import React from 'react';
import './Projects.css';

const projects = [
  { title: 'Проект 1', description: 'Описание проекта 1' },
  { title: 'Проект 2', description: 'Описание проекта 2' },
  { title: 'Проект 3', description: 'Описание проекта 3' },
  { title: 'Проект 4', description: 'Описание проекта 4' },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Мои проекты</h2>
      <div className="grid">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
