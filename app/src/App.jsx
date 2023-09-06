import './App.css';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
        <div className="flex justify-center">
          <img
            src="/dien-vo-profile-picture.jpg"
            alt="Dien Vo"
            className="w-32 h-32 rounded-full"
          />
        </div>
        <h1 className="text-3xl font-bold text-center mt-4">Dien Vo</h1>
        <p className="text-xl text-center text-gray-600">Web Developer</p>
        <div className="text-center mt-4">
          <a
            href="mailto:dien.vo@gmail.com"
            className="text-blue-500 hover:underline"
          >
            dien.vo@gmail.com
          </a>
        </div>
        <div className="text-center mt-2">
          <a
            href="https://www.dienvo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            www.dienvo.com
          </a>
        </div>
        <div className="text-center mt-2">
          <a
            href="https://github.com/Dienvm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub: github.com/Dienvm
          </a>
        </div>
        <div className="text-center mt-2">
          <a
            href="https://www.linkedin.com/in/dienvo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            LinkedIn: linkedin.com/in/dienvo
          </a>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold">About Me</h2>
          <p className="mt-2 text-gray-700">
            Hello! I'm Dien Vo, a web developer passionate about creating
            awesome web applications. I have experience in frontend and backend
            technologies, and I love to solve complex problems.
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Skills</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            <li>React.js</li>
            <li>Node.js</li>
            <li>JavaScript</li>
            <li>HTML & CSS</li>
            <li>SQL & NoSQL Databases</li>
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Projects</h2>
          <div className="mt-2 text-gray-700">
            <div className="mb-2">
              <a
                href="https://project1.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Project 1
              </a>
              : Incididunt deserunt occaecat ad ea.
            </div>
            <div className="mb-2">
              <a
                href="https://project2.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Project 2
              </a>
              : Duis fugiat nulla occaecat mollit nulla sint ea sint eu.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
