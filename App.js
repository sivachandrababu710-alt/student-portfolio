import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = () => {
    setIsLight(!isLight);
  };

  useEffect(() => {
    document.body.classList.toggle('light', isLight);
  }, [isLight]);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    { title: 'Image Gallery', desc: 'Bootstrap responsive grid', tech: 'HTML/CSS/JS' },
    { title: 'Login Page', desc: 'Animated form validation', tech: 'CSS/JS' },
    { title: 'NAND Simulator', desc: 'Digital logic gates', tech: 'Canvas/JS' }
  ];

  return (
    <div className="App">
      <nav className="navbar">
        <h2>Siva Chandra Babu<br /><small>Rollno: 24JR1A05DG</small></h2>
        <ul>
          <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
          <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
        <button id="theme-toggle" onClick={toggleTheme}>
          {isLight ? '🌙' : '☀️'}
        </button>
      </nav>

      <section id="home" className="hero">
        <div>
          <h1>Full Stack Developer</h1>
          <p>Guntur, Andhrapradesh | Web Dev + Digital Logic</p>
          <button onClick={() => scrollToSection('projects')}
            style={{ marginTop: '2rem', padding: '1rem 2rem', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '50px' }}>
            View My Projects
          </button>
        </div>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          I'm Siva Chandra Babu, a passionate Full Stack Developer from Guntur, Andhrapradesh. I specialize in building dynamic and responsive web applications using modern technologies. With a strong foundation in both front-end and back-end development, I enjoy creating seamless user experiences and efficient server-side solutions. When I'm not coding, I love exploring new tech trends and enhancing my skills in digital logic design.
        </p>
      </section>

      <section id="projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div style={{ background: '#4f46e5', color: 'white', padding: '0.3rem 1rem', borderRadius: '20px', display: 'inline-block', fontSize: '0.8rem' }}>
                {project.tech}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <form onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
          <input placeholder="Your Name" required />
          <input type="email" placeholder="your@email.com" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default App;
