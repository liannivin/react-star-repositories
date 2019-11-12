import React, { useState } from "react";
import Select from "react-select";
import "whatwg-fetch";
import StarIcon from "./StarIcon";
import DeleteIcon from "./DeleteIcon";
import "./App.css";

const languageOptions = [
  { value: "javascript", label: "JavaScript" },
  { value: "ruby", label: "Ruby" },
  { value: "python", label: "Python" }
];

function App() {
  const [language, setLenguage] = useState(null);

  const search = () => {
    fetch(
      `https://api.github.com/search/repositories?q=language:${language.value}`
    )
      .then(response => response.json())
      .then(results => {
        console.log(results);
      });
  };

  console.log(language);

  return (
    <div className="App">
      <div className="App-wrapper">
        <section className="App-repoSearcher">
          <form>
            <Select
              value={language}
              options={languageOptions}
              className="App-repoSearcherSelect"
              onChange={item => setLenguage(item)}
            />
            <button type="button" onClick={search}>
              Search
            </button>
          </form>
          <ul className="RepoList">
            <li className="Repo">
              <a
                href="https://github.com/facebook/react"
                target="_blank"
                rel="noopener noreferrer"
                className="Repo-avatarAndName"
              >
                <img
                  alt="Logo for facebook/react"
                  src="https://avatars3.githubusercontent.com/u/69631?v=4"
                ></img>
                <span className="Repo-name">facebook/react</span>
              </a>
              <div className="Repo-language">
                <span>JavaScript</span>
              </div>
              <div className="Repo-buttonWrapper">
                <button type="button" className="Repo-starButton">
                  <StarIcon
                    onClick={() => {
                      alert("click en icon!");
                    }}
                  />
                </button>
              </div>
            </li>
          </ul>
        </section>
        <section className="App-starredList">
          <header>
            <h2>Starred Repositories</h2>
          </header>

          <ul className="RepoList">
            <li className="Repo">
              <a
                href="https://github.com/facebook/react"
                target="_blank"
                rel="noopener noreferrer"
                className="Repo-avatarAndName"
              >
                <img
                  alt="Logo for facebook/react"
                  src="https://avatars3.githubusercontent.com/u/69631?v=4"
                ></img>
                <span className="Repo-name">facebook/react</span>
              </a>
              <div className="Repo-language">
                <span>JavaScript</span>
              </div>
              <div className="Repo-buttonWrapper">
                <button type="button" className="Repo-unstarButton">
                  <DeleteIcon />
                </button>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
