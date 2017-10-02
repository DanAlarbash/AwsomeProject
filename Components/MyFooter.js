import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text, Icon } from 'native-base';
import { observer } from 'mobx-react';
import { Link } from 'react-router-native';




export default observer (class FooterExample extends Component {
  render() {
    return (

      <Footer>
        <FooterTab>
        <Link to='/x'>
           <Button>
            <Icon name="apps" />
          </Button>
        </Link>
          <Button>
            <Icon name="camera" />
          </Button>
          <Button active>
            <Icon active name="navigate" />
          </Button>
          <Button>
            <Icon name="person" />
          </Button>
        </FooterTab>
      </Footer>

    );
  }
})
