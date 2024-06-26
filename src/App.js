import logo from "./logo.svg";
import "./App.css";

const Title = ({ content }) => {
  return <h1 id="title">{content}</h1>;
};

const Component = ({ title, onClick }) => (
  <button onClick={() => onClick(title)}>Learn {title}</button>
);

function App() {
  const handleOnClick = (lib) =>
    document.getElementById("title").innerText = lib;
  
    return (
    <div className="App">
      <header className="App-header">
        <Title content=" Welcome !" />
        <Component onClick={handleOnClick} title="React" />
        <Component onClick={handleOnClick} title="Vue" />
        <Component onClick={handleOnClick} title="Angular" />
      </header>
    </div>
  );
}

export default App;
