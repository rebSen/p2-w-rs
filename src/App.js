import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col, } from 'reactstrap';
//import ContactFormReb from './ContactFormReb'
import Search from './Search'
import Cardos from './Cardos'


class App extends Component {
  render() {
    return (
      <Container className="App">
        <Row>
          <Col sm={{ size: 10, offset: 1 }} md={{ size: 6, offset:3  }} className="shape"><Cardos/></Col>
        </Row>
        <h1>APP DE MASTER VOYONS VOIR ...</h1>
     </Container>

      
    );
  }
}

export default App;
