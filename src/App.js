import logo from './logo.svg';
import CreateToDo from './Containers/createTodo'
import Table from './Containers/Table'
import './App.css';

function App() {
  return (
    <div className="App">
      <CreateToDo />
      <Table />
    </div>
  );
}

export default App;
