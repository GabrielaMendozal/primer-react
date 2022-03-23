import Dojo from "./componentes/Dojo/Dojo";

const App = () => {
  const title = "Hello Dojo!";
  const subtitle = "Things I need to do:";
  
  return (
    <div className="App">
      <h2>
        {title}
      </h2>
      <h3>
        {subtitle}
      </h3>
      <Dojo/>
    </div>
  );
}

export default App;
