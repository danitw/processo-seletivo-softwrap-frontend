import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './index.css';
import axios from 'axios'

import FormEditUser from '../formEditUser/formEditUser.jsx';
import ModalConfirmDelete from '../modalConfirmDelete/modalConfirmDelete.jsx';

class TableUser extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      peoples: []
    }
  }

  componentDidMount() {
    this.fetchPeoples();
  }

  async fetchPeoples() {
    axios.get('http://localhost:8000').then(res => {
      this.setState({ peoples: res.data })
    })
  }

  render() {
    const GetPeoplesList = () => {
      let peoples = this.state.peoples;

      return peoples.map(people =>
          <tr key={people.id}>
            <td>{ people.id }</td>
            <td>{ people.name }</td>
            <td>{ people.age }</td>
            <td>{ people.civil_state }</td>
            <td>{ people.CPF }</td>
            <td>{ people.city }</td>
            <td>{ people.state }</td>
            <td>
              <Popup trigger={ <Button variant="primary">Editar</Button> } modal>
                <FormEditUser people={ people } />
              </Popup>

              <Popup trigger={ <Button className="margem" variant="dark">Delete</Button> } modal>
                <ModalConfirmDelete id={ people.id } />
              </Popup>
            </td>
          </tr>
      )}

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
          <GetPeoplesList />
        </tbody>
          </Table>
    )
  }
}

export default TableUser;
