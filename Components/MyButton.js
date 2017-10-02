import React, { Component } from 'react';
import { Container, Content,Text, Header, Item, Button, Form, Input} from 'native-base';
import { observer } from 'mobx-react';
import store from './Store';


export default observer( class MyButton extends Component {
  constructor(props) {
  super(props);
  this.state = { text: '' };
}
ChangeName(e){
  this.props.store.name = this.state.text
}

render() {
  return (
    <Content>
    <Text>{this.state.text}</Text>
      <Form>
        <Item>
          <Input placeholder="Name"
                onChangeText={ (x) => this.setState({ text: x }) } />
        </Item>
        <Button
        onPress={this.ChangeName.bind(this)}
        light><Text>Submit</Text></Button>
      </Form>
    </Content>

  );
}
})
