import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './style.css';

import FormAddUser from '../components/formAddUser/formAddUser.jsx';
import TableUser from '../components/tableUser/tableUser.jsx'

class Index extends Component {
  render() {
    return (
      <main>
        <div class="top">
          <Popup trigger={ <Button variant="primary">Add New</Button> } modal>
            <FormAddUser />
          </Popup>

          <p>2 registros no banco de dados</p>
        </div>
        
        <TableUser />
      </main>
    );
  }
}

export default Index;
