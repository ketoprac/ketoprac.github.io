import "./App.css";
import projects from "./projects/data";

const App = () => {
  return (
    <div>
      <nav>
        <h1>Portfolio</h1>
        <ul>
          <li>
            <a className="animate" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="animate" href="#profile">
              About Me
            </a>
          </li>
          <li>
            <a className="animate" href="#experiences">
              Experiences
            </a>
          </li>
          <li>
            <a className="animate" href="#skills">
              Services
            </a>
          </li>
          <li>
            <a className="animate" href="#portfolio">
              Projects
            </a>
          </li>
        </ul>
      </nav>

      <div id="profile" className="section">
        <section>
          <img src="./profile.jpg" alt="profile" />
        </section>
        <section>
          <h1>
            Hello, my name is{" "}
            <span className="name">Hafiedz Mada Matsushita</span>
          </h1>
          <p>
            A passionate <span className="highlight">Frontend Developer </span>
            with a year of experience using
            <span className="highlight"> JavaScript, HTML, and CSS</span> to
            build all aspects of the user experience and user interface for
            client-facing landing pages. Specializes in using React to build
            user interface. During college, I took internships in
            <span className="highlight"> Kamar Pelajar</span> and
            <span className="highlight"> Glints Academy x Kampus Merdeka</span>
            as a Front End Developer, I obtained a lot of experience during the
            internship and presently I am looking for an opportunity to develop
            my career.
          </p>
          <div className="social-section">
            <a href="https://github.com/ketoprac" alt="github" className="social-link">
            <i class="devicon-github-original"></i>
            </a>
            <a href="https://linkedin.com/in/hafiedzmada" alt="linkedin" className="social-link">
            <i class="devicon-linkedin-plain"></i>
            </a>
          </div>
        </section>
      </div>

      <div id="experiences" className="section">
        <section>
          <h1 className="title">Education</h1>
          <h2>Universitas Bina Sarana Informatika</h2>
          <div className="orange-line"></div>
          <p>September 2019 - November 2022</p>
          <p>Associate Degree, Information System</p>
          <p>Grade: 3.94</p>
          <br />
          <h2>SMK Negeri 3 Depok</h2>
          <div className="orange-line"></div>
          <p>2015 - 2018</p>
          <p>Computer and Network Engineering</p>
          <p>Grade: 84/100</p>
        </section>
        <section>
          <h1 className="title">Experiences</h1>
          <h2>Glints Academy x Kampus Merdeka</h2>
          <div className="orange-line"></div>
          <p>Frontend Developer Intern</p>
          <p>August 2021 - February 2022</p>
          <ul>
            <li>
              Contributing in LingoParents project development using NextJS,
              Tailwind, etc.
            </li>
            <li>Translate UI designs from Figma into web apps.</li>
            <li>Integrate API data from backend using Axios.</li>
            <li>Build UI components such as navbar, footer, and stepper.</li>
            <li>Develop course and enrollment pages.</li>
            <li>
              Develop mini project To Do List App with peers using React.js
            </li>
            <li>
              Develop mini project Employee Attendance App using React.js and
              Google Maps API.
            </li>
          </ul>
          <br />
          <h2>Kamar Pelajar</h2>
          <div className="orange-line"></div>
          <p>Frontend Developer Intern</p>
          <p>January 2021 - April 2021</p>
          <ul>
            <li>
              Building landing page user interface using Laravel Blade Template
              Engine.
            </li>
            <li>
              Implementing visual elements to build a friendly website
              application.
            </li>
          </ul>
        </section>
      </div>

      <div id="skills">
        <h1 className="title">What Can I Do</h1>
        <section>
          <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="html5"
            />
          </a>
          <a
            href="https://www.w3schools.com/css/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="css3"
            />
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
            />
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
            />
          </a>
          <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
              alt="bootstrap"
            />
          </a>
          <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
              alt="sass"
            />
          </a>
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
            <img
              src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
              alt="tailwind"
            />
          </a>
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            <img
              src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
              alt="nextjs"
            />
          </a>
          <a
            href="https://firebase.google.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
              alt="firebase"
            />
          </a>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            <img
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
            />
          </a>
          <a href="https://heroku.com" target="_blank" rel="noreferrer">
            <img
              src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
              alt="heroku"
            />
          </a>

          <a href="https://postman.com" target="_blank" rel="noreferrer">
            <img
              src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
              alt="postman"
            />
          </a>

          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt="typescript"
            />
          </a>
        </section>
      </div>

      <div id="portfolio" className="section">
        <h1 className="title">What I've Built</h1>
        <section>
          {projects.map((project) => (
            <div key={project.id} className="card">
              <img src={`./` + project.img} alt="project preview" />
              <div>
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <div className="orange-line"></div>
                  <p className="project-desc">{project.desc}</p>
                </div>
                <button>View Project</button>
              </div>
            </div>
          ))}
        </section>
      </div>

      <footer>
        <p>Copyright &copy;2022 - Hafiedz Mada Matsushita</p>
      </footer>
    </div>
  );
};

export default App;
