import React, { Component } from 'react';
import { Button, Table, Pagination } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './index.css';
import axios from 'axios'

import FormEditUser from '../formEditUser/formEditUser.jsx';
import ModalConfirmDelete from '../modalConfirmDelete/modalConfirmDelete.jsx';

class TableUser extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      allPeoples: [],
      peoples: [],
      pageActual: 1,
      limitItems: 9,
      totalPage: 1,
    }


    this.handlePage = this.handlePage.bind(this);
  }

  componentDidMount() {
    this.fetchPeoples();
  }

  handlePage(page, ignore) {
    this.setState({ pageActual: page })

    let count = ( page * this.state.limitItems ) - this.state.limitItems;

    let delimiter = count + this.state.limitItems;

    let a = [];

    for(count; count <= delimiter; count++) {
      if(this.state.allPeoples[count] === undefined) {
        break;
      }

      a[count] = this.state.allPeoples[count];

    }
    this.setState({ peoples: a });
  }

  componentDidUpdate() {
  }

  async fetchPeoples() {
    axios.get('https://mysterious-everglades-67269.herokuapp.com/').then(res => {
      this.setState({ allPeoples: res.data });

      this.setState({ totalPage: Math.ceil( res.data.length / this.state.limitItems ) })
      let a = [];

      for(let i = 0; i <= this.state.pageActual*this.state.limitItems; i++) {
        a[i] = res.data[i];
      }
      this.setState({ peoples: a });
    })
  }

  render() {

    let active = this.state.pageActual;
    let items = [];
    for (let number = 1; number <= this.state.totalPage; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active} onClick={this.handlePage.bind(this, number)}>
          {number}
        </Pagination.Item>,
      );
    }
    
    const PaginationPeople = () => (
      <Pagination>{items}</Pagination>
    );


    const GetPeoplesList = () => {
      let peoples = this.state.peoples;

      return peoples.map(people =>
          <tr key={ people.id }>
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
      <div>

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
        <div className="paginationPeople">
          <PaginationPeople />
         </div>
     </div>
    )
  }
}

export default TableUser;
