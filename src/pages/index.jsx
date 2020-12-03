import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap'

import './style.css';

class Index extends Component {
  render() {
    return (
      <main>
        <div class="top">
          <Button variant="primary">Add New</Button>
          <p>2 registros no banco de dados</p>
        </div>
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
              </tr>
            </tbody>
          </Table>
      </main>
    );
  }
}

export default Index;
