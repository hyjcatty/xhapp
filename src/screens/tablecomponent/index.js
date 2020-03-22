import React, { Component } from "react";
import {Platform,StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body, Toast,
  Text
} from "native-base";
import {Row, Rows, Table} from 'react-native-table-component';

class TableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    const options = {
      tableHead: ['name', 'sum', 'ok', 'no', 'stop', 'other'],
      tableData: [
        ['RN 1',
          125,
          110,
          15,
          5,
          <Button type='primary' size='small' onPress={()=>Toast.show({
            text: "RN 1!",
            buttonText: "Okay"
          })}><Text>View</Text></Button>
        ],
        [
          'RN 2',
          525,
          325,
          200,
          50,
          <Button type='primary' size='small' onPress={()=>Toast.show({
            text: "RN 2!",
            buttonText: "Okay"
          })}><Text>View</Text></Button>],
        [
          'RN 3',
          800,
          500,
          300,
          100,
          <Button type='primary' size='small' onPress={()=>Toast.show({
            text: "RN 3!",
            buttonText: "Okay"
          })}><Text>View</Text></Button>],
        [
          'sum',
          1450,
          835,
          515,
          155,
          <Button type='primary' size='small' onPress={()=>Toast.show({
            text: "RN 4!",
            buttonText: "Okay"
          })}><Text>View</Text></Button>]
      ]
    };
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Table Component</Title>
          </Body>
          <Right />
        </Header>

        <Content padder style={{ backgroundColor: "#fff" }}>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={options.tableHead} style={styles.head} textStyle={styles.text}/>
            <Rows data={options.tableData} textStyle={styles.text}/>
          </Table>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {
    height: 40,
    backgroundColor: '#f1f8ff'
  },
  text: {
    margin: 10,
    textAlign: 'center'
  },
  titleView: {
    height: Platform.OS === 'ios' ? 64 : 44,
    paddingTop: Platform.OS === 'ios' ? 14 : 0,
    marginBottom: 10,
    backgroundColor: '#4a65ff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  titleStyle: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center'
  }
});
export default TableComponent;
