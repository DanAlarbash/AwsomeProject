import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
import { ListView } from 'react-native';
import { observer } from 'mobx-react';


export default observer( class MyList extends Component {

  constructor(props){
    super(props);
    this.state = {
      url: "https://jsonplaceholder.typicode.com/todos",
      dataSource: new ListView.DataSource({
        rowHasChanged:(row1, row2) => row1 !== row2,
      })
    }
  }
  componentWillMount(){

    if (!this.props.store.loaded){
      this.fetchData();
    }
    else {
      this.setState({dataSource: this.state.dataSource.cloneWithRows(this.props.store.dataSource)})
    }
  }


componentWillUnmount(){
    this.unLoadList();
}

unLoadList = () =>{
   this.state = {
    dataSource:[]
   }
};


  fetchData(){
    fetch(this.state.url)
    .then((x) => x.json())
    .then((y) => {
      this.setState({dataSource: this.state.dataSource.cloneWithRows(y)});
      this.props.store.dataSource = y;
      this.props.store.loaded = true;
})
}
  renderItem(object){
    return (
      <ListItem>
        <Text>{object.title}</Text>
      </ListItem>
    )
  }
  render() {
    return (
      <Container>
          <List>
            <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderItem}
            />
          </List>
      </Container>
    );
  }
})





