import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import { Dashboard } from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
          <Route path='/create-tasks' element={<TaskForm/>}></Route>
          <Route path='/view-tasks' element={<TaskList/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
