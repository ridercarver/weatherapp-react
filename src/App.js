import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import {WeatherDisplay, PLACES} from './components/weather';
import {Navbar, NavItem, Nav, Grid, Row, Col} from 'react-bootstrap';
import {Counter} from './components/Counter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activePlace : 0 }
  }

  render() {
    const activePlace = this.state.activePlace;
    return (
      <div>
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        WEATHER TO MY LIKE CITY
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
  <Grid>
    <Row>
      <Col md={4} sm={4}>
        <h3>Select a city</h3>
        <Nav
          bsStyle="pills"
          stacked
          activeKey={activePlace}
          onSelect={index => {
            this.setState({ activePlace: index });
          }}
        >
          {PLACES.map((place, index) => (
            <NavItem key={index} eventKey={index}>{place.name}</NavItem>
          ))}
        </Nav>
      </Col>
      <Col md={8} sm={8}>
        <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} />
      </Col>
    </Row>
  </Grid>
</div>
    );
  }
}

export default App;
