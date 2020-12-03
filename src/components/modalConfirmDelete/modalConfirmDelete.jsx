import React, { Component } from 'react';

import { Button } from 'react-bootstrap'

import './index.css';

class ModalConfirmDelete extends Component {
  render() {
    return (
      <div className="master">
        <header>Delete User</header>
          <div class="content">
            <p>Tem certeza de que deseja excluir?</p> 
          </div>
          <div className="actions">
            <Button className="yes" variant="danger">Sim</Button>
            <Button variant="dark">Não</Button>
          </div>
      </div>
    );
  }
}

export default ModalConfirmDelete;
