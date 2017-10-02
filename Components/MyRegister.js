import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { observer } from 'mobx-react';
import store from './Store';



export default observer (class Register extends Component {

    constructor(props) {
  super(props);
  this.state = { username: '',
                password: ''
                };
}
handleRegister(e){
  console.log(this.state.username)
  console.log(this.state.password)
}

  render() {
    return (


    <Form>
      <Text> Sign up </Text>
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
      <Button block onPress={this.handleRegister.bind(this)}>
          <Text>Register</Text>
      </Button>
    </Form>



      );
  }
}
)
