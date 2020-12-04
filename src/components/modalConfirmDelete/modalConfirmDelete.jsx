import React, { Component } from 'react';
import axios from 'axios'
import { Button, Alert } from 'react-bootstrap'
import Popup from 'reactjs-popup';
import './index.css';

class ModalConfirmDelete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      formSucess: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
  }

  handleSubmit(e) {
    e.preventDefault();

    this.addPeople(this.state.id);
  }

  addPeople(id) {
    axios.delete(`http://localhost:8000/delete/${id}`).then(res => {
      if(res.status === 200) {
        this.setState({formSucess: true});
      } else {
        return false;
      }
    })
  }

  render() {

    const FormSucess = (props) => {
      /*if(this.formSucess === null) {
        return <Alert variant="danger">Ocorreu um erro</Alert>
      } else if(this.formSucess === true) {
        return <Alert variant="primary">O registro foi adicionado ao com sucesso</Alert>
      } else if(this.formSucess === false) {
        return <Alert variant="danger">Ocorreu um erro</Alert>
      }*/
      if(props.sucess === true) {
        return <Alert variant="primary">O registro foi removido com sucesso</Alert>
      } else if(props.sucess) {
        return <Alert variant="danger">Ocorreu um erro</Alert>
      }

      return <h1></h1>
    }



    return (
      <div className="master">
        <FormSucess sucess={this.state.formSucess}></FormSucess>
        <header>Delete User</header>
          <div class="content">
            <p>Tem certeza de que deseja excluir?</p> 
          </div>
          <div className="actions">
            <Button className="yes" variant="danger" onClick={this.handleSubmit}>Sim</Button>
            <Button variant="dark" >Não</Button>
          </div>
      </div>
    );
  }
}

export default ModalConfirmDelete;
