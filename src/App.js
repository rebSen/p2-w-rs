import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col, } from 'reactstrap';
//import ContactFormReb from './ContactFormReb'
import Search from './Search'
import Cardos from './Cardos'


class App extends Component {
  render() {
    return (
      <div>
     <Container className="">
      <Search/>
      <Row>  
        <Col sm={{ size: 10, offset: 1 }} md={{ size: 8, offset:4 }} className="shape"><Cardos/></Col>
      </Row>
      <h1>APP DE SEARCHBAR VOYONS VOIR !!! : )</h1>
    </Container>
      
      </div>
     
    );
  }
}

export default App;
