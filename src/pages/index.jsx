import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './style.css';
import axios from 'axios';

import FormAddUser from '../components/formAddUser/formAddUser.jsx';
import TableUser from '../components/tableUser/tableUser.jsx'

class Index extends Component {

  constructor() {
    super();

    this.state = {
      peoples: []
    }
  }

  componentDidMount() {
    this.fetchPeoples();
  }

  async fetchPeoples() {
    axios.get('https://mysterious-everglades-67269.herokuapp.com/').then(res => {
      this.setState({ peoples: res.data })
    })
  }



  render() {
    return (
      <main>
        <div className="top">
          <Popup trigger={ <Button variant="primary">Add New</Button> } modal>
            <FormAddUser />
          </Popup>

          <p>{this.state.peoples.length} registros no banco de dados</p>
        </div>
        
        <TableUser />
      </main>
    );
  }
}

export default Index;
