import React, { Component } from 'react';
import { Container, Content,Text, Header, Title, Button, Left, Right, Body, Icon, Footer,FooterTab } from 'native-base';
import MyButton from './MyButton';
import { observer } from 'mobx-react';
import $ from 'jquery';
import axios from 'axios';


export default observer( class MyHeader extends Component {

  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  x(){

      fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET',
        headers: {
          'Accept': 'json',
          'content-Type': 'json',
        }

      }).then((data) => this.setState({data:data}).bind(this))
}




  render() {
    return (

        <Header  style={{marginTop: 30}}>
          <Left>
          </Left>

          <Body>
            <Title>{this.props.store.name}</Title>
          </Body>

          <Right >
          </Right>
        </Header>
    );
  }
}
)



    //
    // alert ('test')
    // axios.get()
    //   .then((function (response) {
    //     this.setState({data:response}.bind(this));
    //   })
    //   .catch(function (error) {
    //     this.setState({data:error}.bind(this));
    //   });
    // }
