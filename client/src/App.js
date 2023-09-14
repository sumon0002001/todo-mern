import "./App.scss";
import ShowTodoList from "./components/ShowTodoList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateTodo from "./components/CreateTodo";

function App() {
  return (
    <div className="app-contents">
      <Router>
        <Routes>
          <Route path="/" element={<ShowTodoList />} />
          <Route path="/create-to-do" element={<CreateTodo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
