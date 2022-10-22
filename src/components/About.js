function About() {
  let adjectives = [
    'Vincent',
    'Unpredictable',
    'a caffeine enthusist',
    'Vinny',
    'Khoi',
    'Dependable',
    'Tennis Professional',
    'Creative',
  ];
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];

  let adj = randomAdjective;

  return (
    <>
      <div className="card-container">
        <div className="container-title">
          <h1>
            Hi! I'm <u>{adj}</u>.{' '}
          </h1>
        </div>
        <div className="container-subtitle">
          <h2>From finance bro to tech bro!</h2>
        </div>
        <div className="container-content">
          <h3>
            Full stack web developer looking to bring your vision to the web
          </h3>
        </div>
      </div>
      <div className="about-content">
        <div className="about-technologies">
          <h2>Technologies I know!</h2>
        </div>
        <div className="about-content">
          <ul>
            <li>HTML5/CSS/JavaScript</li>
            <li>React</li>
            <li>Python</li>
            <li>Django</li>
          </ul>
        </div>
        <div className="about-content">
          <ul>
            <li>Bootstrap</li>
            <li>Node</li>
            <li>Materialize</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div className="about-content">
          <ul>
            <li>MongoDB</li>
            <li>Express</li>
            <li>Mern Stack</li>
            <li>Tailwind</li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default About;
