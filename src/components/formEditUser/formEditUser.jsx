import React, { Component } from 'react';

import { Form, Button } from 'react-bootstrap'

import './index.css';

class FormEditUser extends Component {
  render() {
    return (
      <div className="formEditUser">
          <Form>
            <Form.Group>
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Digite seu nome" />
            </Form.Group>
          
            <Form.Group>
              <Form.Label>Idade</Form.Label>
              <Form.Control type="number" placeholder="Digite sua idade" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Estado Civil</Form.Label>
              <Form.Control as="select" defaultValue="Solteiro">
                <option>Solteiro</option>
                <option>Casado</option>
                <option>Divorciado</option>
                <option>Viuvo</option>
              </Form.Control>
            </Form.Group>
              
            <Form.Group>
              <Form.Label>CPF</Form.Label>
              <Form.Control type="text" placeholder="Digite seu CPF" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Estado</Form.Label>
              <Form.Control type="text" placeholder="Digite seu Estado" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Cidade</Form.Label>
              <Form.Control type="text" placeholder="Digite sua Cidade" />
            </Form.Group>


            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
      </div>
    );
  }
}

export default FormEditUser;
