import { Routes , Route } from 'react-router-dom';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { MainTodoPage } from './pages/MainTodoPage';


function App() {



  return (
    <Routes>
    <Route path="/mainpage" element={<MainTodoPage />}/>
    </Routes>
  )
}


export default App
