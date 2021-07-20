import './App.css';


const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    [Task('teste'),
    Task('teste5'),
    Task('teste4'),
    Task('teste3'),
    Task('teste2')]
  );
}


export default App;
