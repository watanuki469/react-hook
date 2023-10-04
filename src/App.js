import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUsers';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import ModalAddNew from './components/ModalAddNew';
import { useState } from 'react';

function App() {
  const [istShowModalAddNew, setIsShowModalAddNew] = useState(false)

  const handleClose=()=>{
    setIsShowModalAddNew(false)
  }
  return (
    <div className='app-container'>
      <Header />
      <Container>
        <div className="my-3 add-new">
          <spam> <b> listUsers: </b></spam>
          <button class="btn btn-primary" onClick={()=>setIsShowModalAddNew(true)}> Add new user</button>
        </div>

        <TableUsers />

      </Container>
      <ModalAddNew
        show={istShowModalAddNew}
        handleClose={handleClose}
      />
    </div>

  );
}

export default App;
