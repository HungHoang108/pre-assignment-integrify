import { Routes, Route } from 'react-router-dom';
// import { useContext } from 'react';

import Header from './components/header/header.component';
import ContactCard from './components/contact-card/contact-card.component';
import UserDetails from './components/user-details/user-details.component';
import Footer from './components/footer/footer.component';
// import { UserContext } from './context/user-id.context';


function App() {
  // const {userId} = useContext(UserContext)
  // console.log(userId)
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<ContactCard />} />
          <Route path='/:id' element={<UserDetails />} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
