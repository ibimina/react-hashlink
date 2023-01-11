import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Skills from "./components/Skills";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>React Hashlink</h1>
          <nav>
            <ul>
              <li>
                <HashLink
                  scroll={(el) => el.scrollIntoView({ behavior: "auto" })}
                  to="#home"
                >
                  home
                </HashLink>
              </li>
              <li>
                <HashLink
                  scroll={(el) => el.scrollIntoView({ behavior: "auto" })}
                  to="#skills"
                >
                  skills
                </HashLink>
              </li>
              <li>
                <HashLink
                  scroll={(el) => el.scrollIntoView({ behavior: "auto" })}
                  to="#about"
                >
                  about
                </HashLink>
              </li>
              <li>
                <HashLink
                  scroll={(el) => el.scrollIntoView({ behavior: "auto" })}
                  to="#contact"
                >
                  contact
                </HashLink>
              </li>
            </ul>
          </nav>
        </header>

        <Home />
        <Skills />
        <About />
        <Contact />
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
