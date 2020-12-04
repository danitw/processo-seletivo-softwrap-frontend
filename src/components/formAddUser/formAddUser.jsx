import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap'

import './index.css';

class FormAddUser extends Component {

  constructor() {
    super();

    this.state = {
        name: 'DAN',
        age: 'dsdsa',
        civil_state: 'Solteiro',
        CPF: '3219031902',
        city: 'santa',
        state: 'sp'
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
  }
  

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    //alert(value)
    //alert(this.name)
    console.log(name) 
    console.log(value) 
    this.setState({ [name]: value });
  }


  handleSubmit(e) {
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

  async addPeople(people) {
    /* await axios({
      method: 'post',
      responseType: 'json',
      url: 'http://localhost:8000/create',
      data: people
    }).then(r => {
      console.log(r)
    })*/
    axios.post('http://localhost:8000/create', people)
  }

  render() {
    return (
      <div className="formAddUser">
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
