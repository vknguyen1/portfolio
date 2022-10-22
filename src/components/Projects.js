function Project() {
  return (
    <>
      <div className="project-container">
        <h1>Check out my work!</h1>
      </div>
      <div className="projects">
        <div className="projects-card">
          <a href="https://bodybuilding-app.herokuapp.com/">Workout App</a>
          <div className="card-photo">
            <img src="" alt="" />
          </div>
          <div className="card-description">
            <p>Find and track your workouts now!</p>
          </div>
        </div>
        <div className="projects-card">
          <a href="https://songstosee.herokuapp.com/">Songs to See</a>
          <div className="card-photo">
            <img src="" alt="" />
          </div>
          <div className="card-description">
            <p>Checkout concerts playing in your area!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
