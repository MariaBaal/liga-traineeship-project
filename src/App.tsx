import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskList from './app/taskList/TaskList';
import NewTask from './app/newTask/NewTask';
import EditTask from 'app/EditTask/EditTask';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/add" element={<NewTask />} />
        <Route path="/tasks/:id" element={<EditTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
