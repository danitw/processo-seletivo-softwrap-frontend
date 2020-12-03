import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './index.css';

import FormEditUser from '../formEditUser/formEditUser.jsx';
import ModalConfirmDelete from '../modalConfirmDelete/modalConfirmDelete.jsx';

class TableUser extends Component {
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Estado Civil</th>
            <th>CPF</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Daniel</td>
            <td>16</td>
            <td>Solteiro</td>
            <td>092318738192</td>
            <td>Santa Barbara d' Oeste</td>
            <td>São Paulo</td>
            <td>
              <Popup trigger={ <Button variant="primary">Editar</Button> } modal>
                <FormEditUser />
              </Popup>

              <Popup trigger={ <Button className="margem" variant="dark">Delete</Button> } modal>
                <ModalConfirmDelete />
              </Popup>
            </td>
          </tr>
        </tbody>
          </Table>
    )
  }
}

export default TableUser;
