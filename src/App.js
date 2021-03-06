/* eslint-disable react/jsx-no-target-blank */
import "./App.css";
import SudokuSolver from "./components/SudokuSolver";
import styled from "styled-components";

const Footer = styled.div`
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  color: white;
  text-align: center;
  & a {
    color: #fff;
    text-decoration: none;
  }
`;

function App() {
  return (
    <div className="App">
      <SudokuSolver />
      <Footer>
        <h4>
          Made with ❤️ by{" "}
          <a
            href="https://avinash-kumar-portfolio.netlify.app/"
            target="_blank"
          >
            Avinash Kumar
          </a>
        </h4>
      </Footer>
    </div>
  );
}

export default App;
