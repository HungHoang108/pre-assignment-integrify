import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import ContactCard from './components/contact-card/contact-card.component';
import UserDetails from './components/user-details/user-details.component';
import Home from './components/home/home.component';


function App() {

  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
          <Route path='/:id' element={<UserDetails />} />
        </Route>
      </Routes>
 
    </div>
  );
}

export default App;
