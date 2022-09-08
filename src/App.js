import "./App.css";
import projects from "./projects/data";

const App = () => {
  return (
    <div>
      <nav>
        <h1>Portfolio</h1>
        <ul>
          <li>Home</li>
          <li>About Me</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div id="profile" className="section">
        <section>
          <img src="./profile.jpg" alt="profile" />
        </section>
        <section>
          <h1>
            Hello, my name is <span className="name">Hafiedz Mada Matsushita</span>
          </h1>
          <p>
            A passionate <span className="highlight">Frontend Developer</span> with nearly a year of
            experience using <span className="highlight">JavaScript, HTML, and CSS</span> to build all aspects of
            the user experience and user interface for client-facing landing
            pages. Specializes in using React to build user interface. <span className="highlight">During
            college, I took internships in Kamar Pelajar and Glints Academy x
            Kampus Merdeka as a Front End Developer, I obtained a lot of
            experience during the internship and presently I am looking for an
            opportunity to develop my career.</span>
          </p>
        </section>
      </div>

      <div id="experiences" className="section">
        <section>
          <h1 className="title">Education</h1>
          <h2>Universitas Bina Sarana Informatika</h2>
          <div className="orange-line">
          </div>
          <p>2019 - 2022</p>
          <p>Information Systems Associate Degree</p>
        </section>
        <section>
          <h1 className="title">Experiences</h1>
          <h2>Glints Academy x Kampus Merdeka</h2>
          <div className="orange-line">
          </div>
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
          <div className="orange-line">
          </div>
          <p>Frontend Developer Intern</p>
          <p>January 2021 - April 2021</p>
          <ul>
            <li>
              Building landing page user interface using Laravel Blade Template
              Engine.
            </li>
            <li>
              Implementing visual elements to build a friendly website
              application.{" "}
            </li>
          </ul>
        </section>
      </div>

      <div id="portfolio" className="section">
        <h1>Projects</h1>
        <section>
          {projects.map((project) => (
            <div key={project.id} className="card">
              <img src={`./` + project.img} alt="project preview" />
              <div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
              <button>View Project</button>
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