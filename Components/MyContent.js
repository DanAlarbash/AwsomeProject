import React, { Component } from 'react';
import { Container, Header, Content, Footer, Text, Title, Button, Left, Right, Body, Icon,FooterTab } from 'native-base';
import { observer } from 'mobx-react';
import {View} from 'react-native';
import MyButton from './MyButton';
import MyList from './MyList';
import MyRegister from './MyRegister';
import MyLogin from './MyLogin';
import {NativeRouter, Route, Link } from 'react-router-native';
import store from './Store';






export default observer (class MyContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      button1: false,
      button2: false,
      button3: false,
      button4: false,
    };
    }

  ButtonActive(){
    this.setState({
      button1: false,
      button2: false,
      button3: false,
      button4: false,
    })
  }

  render() {
    return (
        <NativeRouter>
        <Container>

        <Content padder>
        <Route path="/x" render={() => <MyButton store={store}/>}/>
        <Route path="/y" render={() => <MyList store={this.props.store}/>} />
        <Route path="/z" render={() => <MyLogin store={store}/>} />
        <Route path="/d" component={MyRegister}/>
        </Content>

        <Footer>
          <FooterTab>

          {this.state.button1 ? <Button active><Link to="/x"><View><Icon name="apps"/></View></Link></Button>:<Button><Link to="/x"><View><Icon name="apps"/></View></Link></Button> }
          {this.state.button2 ? <Button active><Link to="/y"><View><Icon name="camera"/></View></Link></Button>:<Button><Link to="/y"><View><Icon name="camera"/></View></Link></Button> }
          {this.state.button3 ? <Button active><Link to="/z"><View><Icon name="navigate"/></View></Link></Button>:<Button><Link to="/z"><View><Icon name="navigate"/></View></Link></Button> }
          {this.state.button4 ? <Button active><Link to="/d"><View><Icon name="person"/></View></Link></Button>:<Button><Link to="/d"><View><Icon name="person"/></View></Link></Button> }

          </FooterTab>
        </Footer>

        </Container>
        </NativeRouter>

    );
  }
})


                  

