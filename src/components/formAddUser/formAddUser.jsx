import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Alert } from 'react-bootstrap'

import './index.css';

class FormAddUser extends Component {

  constructor() {
    super();

    this.state = {
      name: 'Elon Musk',
      age: '32',
      civil_state: 'Solteiro',
      CPF: '0302391031',
      city: 'São Paulo',
      state: 'São Paulo',
      formSucess: null
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
  }
  

  handleInputChange(e) {
    const target = e.target;
    const value  = target.value;
    const name   = target.name;

    this.setState({ [name]: value });
  }


  async handleSubmit(e) {
    e.preventDefault();
    const people = {
      name:         this.state.name,
      age:          this.state.age,
      civil_state:  this.state.civil_state,
      CPF:          this.state.CPF,
      city:         this.state.city,
      state:        this.state.state
    }
    
    this.addPeople(people);
  }

  addPeople(people) {
    axios.post('https://mysterious-everglades-67269.herokuapp.com/create', people).then(res => {
      if(res.status === 200) {
        this.setState({formSucess: true});
      } else {
        return false;
      }
    })
  }

  render() {

    const FormSucess = (props) => {
      if(props.sucess === true) {
        return <Alert variant="primary">O registro foi adicionado ao com sucesso</Alert>
      } else if(props.sucess) {
        return <Alert variant="danger">Ocorreu um erro</Alert>
      }

      return <h1></h1>
    }


    return (
      <div className="formAddUser">
          <FormSucess sucess={this.state.formSucess}></FormSucess>
          <Form>
            <Form.Group>
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" name="name" placeholder="Digite seu nome" value={this.state.name} onChange={this.handleInputChange} />
            </Form.Group>
          
            <Form.Group>
              <Form.Label>Idade</Form.Label>
              <Form.Control name="age" type="number" placeholder="Digite sua idade"  value={this.state.age} onChange={this.handleInputChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Estado Civil</Form.Label>
              <Form.Control as="select" name="civil_state" defaultValue="Solteiro"  value={this.state.civil_state} onChange={this.handleInputChange}>
                <option>Solteiro</option>
                <option>Casado</option>
                <option>Divorciado</option>
                <option>Viuvo</option>
              </Form.Control>
            </Form.Group>
              
            <Form.Group>
              <Form.Label>CPF</Form.Label>
              <Form.Control type="text" name="CPF" placeholder="Digite seu CPF" value={this.state.CPF} onChange={this.handleInputChange}/>
            </Form.Group>

            <Form.Group>
              <Form.Label>Estado</Form.Label>
              <Form.Control type="text" name="state" placeholder="Digite seu Estado" value={this.state.state} onChange={this.handleInputChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Cidade</Form.Label>
              <Form.Control type="text" name="city" placeholder="Digite sua Cidade" value={this.state.city} onChange={this.handleInputChange}/>
            </Form.Group>


            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Form>
      </div>
    );
  }
}

export default FormAddUser;
