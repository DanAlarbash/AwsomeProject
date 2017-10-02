import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { observer } from 'mobx-react';
import store from './Store';
import auth from './auth'


export default observer (class Component2 extends Component {

  constructor(props) {
  super(props);
  this.state = { username: '',
                password: ''
                };
}
ButtonPress(e){
  auth.login(this.state.username,this.state.password)
}


  render() {
    return (

      <Form>
        <Text>{this.props.store.username}</Text>
        <Item>
          <Input placeholder="Username" autoCapitalize="none" autoCorrect={false}
          onChangeText={ (x) => this.setState({ username: x }) }
          />
        </Item>
        <Item last>
          <Input placeholder="Password" secureTextEntry={true}
            onChangeText={ (y) => this.setState({ password: y }) }
           />
        </Item>
        <Button block dark onPress={this.ButtonPress.bind(this)}>
            <Text>Sign in</Text>
        </Button>
      </Form>




      );
  }
}
)
