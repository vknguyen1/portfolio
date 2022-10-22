import songtosee from '../Photos/songstosee.png';

import fitness from '../Photos/fitness.png';
import noteitnow from '../Photos/noteitnow.png';

function Project() {
  return (
    <>
      <div className="projects-container">
        <h1>Check out my work!</h1>
      </div>
      <div className="projects">
        <div className="project-card">
          <a
            className="link-info"
            href="https://bodybuilding-app.herokuapp.com/"
          >
            Workout App
          </a>
          <div className="card-photo">
            <img src={fitness} alt="" />
          </div>
          <div className="card-description">
            <p>Find and track your workouts now!</p>
          </div>
        </div>
        <div className="project-card">
          <a className="link-info" href="https://songstosee.herokuapp.com/">
            Songs to See
          </a>
          <div className="card-photo">
            <img src={songtosee} alt="songtosee" />
          </div>
          <div className="card-description">
            <p>Checkout concerts playing in your area!</p>
          </div>
        </div>
        <div className="project-card">
          <a
            className="link-info"
            href="https://note-it-now.herokuapp.com/journal"
          >
            Journal
          </a>
          <div className="card-photo">
            <img src={noteitnow} alt="songtosee" />
          </div>
          <div className="card-description">
            <p>Journal it Now!!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
