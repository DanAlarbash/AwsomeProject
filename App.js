import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import MyHeader from './Components/MyHeader';
import MyFooter from './Components/MyFooter';
import MyContent from './Components/MyContent';
import { observer } from 'mobx-react';
import store from './Components/Store';
import { NativeRouter} from 'react-router-native';



export default observer( class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      return (

        <Container>
          <MyHeader store={store} />
          <MyContent store={store} />
        </Container>

      );
  }
}
)
