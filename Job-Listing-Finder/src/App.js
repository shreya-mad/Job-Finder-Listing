import './App.css';
import Register from './pages/Registers';
import Logins from './pages/Logins';
import JobForm from './pages/JobForm';
import Details from './pages/Details';
import { BrowseRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div>  
      <BrowseRouter>
        <Routes>
          <Route path='/login' element={}/>
          <Route/>
          <Route/>
          <Route/>
          <Route/>
        </Routes>
      </BrowseRouter>
    </div>
  );
}
export default App;




