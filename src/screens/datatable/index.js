import React, { Component } from "react";

import {
    StyleSheet,ListView
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  DatePicker,
  Text
} from "native-base";

import {
    Cell ,
    DataTable,
    Header as RNDTHeader,
    HeaderCell,
    Row,
    EditableCell,
    CheckableCell
} from 'react-native-data-table';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'white',
  },
  headerCell: {
    height: 40,
    borderBottomWidth: 1,
    backgroundColor: 'white',
    borderColor: 'gray',
    justifyContent: 'center',
  },
  cell: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignTextLeft: {
    marginLeft: 20,
    textAlign: 'left',
  },
  whiteRow: {
    height: 35,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  row: {
    height: 35,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  alignTextCenter: {
    textAlign: 'center',
    justifyContent: 'center',
  },
});
var localData = require('./data.json');
class RNDataTable extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };

    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      ds: this.ds.cloneWithRows(localData),
    };

    this.renderHeader = this.renderHeader.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }
  /*
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`,
  });*/
  render() {
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
            <Title>Date Picker</Title>
          </Body>
          <Right />
        </Header>

        <Content padder style={{ backgroundColor: "#fff" }}>
          /*<DataTable
              style={styles.container}
              listViewStyle={styles.container}
              dataSource={this.state.ds}
              renderRow={this.renderRow}
              renderHeader={this.renderHeader}
          />*/
        </Content>
      </Container>
    );
  }
  renderHeader() {
    return (
        <RNDTHeader>
          <HeaderCell style={styles.headerCell} key="1" text="选择" width={1} />
          <HeaderCell
              style={styles.headerCell}
              key="2"
              text="序号"
              width={1}
              onPress={() => this.onColumnSort()}
          />
          <HeaderCell
              style={styles.headerCell}
              key="3"
              text="科室名称"
              width={3}
              isAscending={false}
              onPress={() => this.onColumnSort()}
          />
          <HeaderCell
              style={styles.headerCell}
              key="4"
              text="数量"
              width={1}
              isAscending={false}
              onPress={() => this.onColumnSort()}
          />
        </RNDTHeader>
    );
  }

  renderRow(item) {
    let rowStyle = item.no%2 === 0  ? styles.whiteRow : styles.row;
    return (
        <Row style={rowStyle}>
          <CheckableCell
              style={styles.cell}
              width={1}
              onPress={() => this.onCheckablePress()}
              renderIsChecked={() => (
                  <Icon name="checkbox-blank-outline" size={20} color="blue" />
              )}
              renderIsNotChecked={() => (
                  <Icon name="checkbox-marked" size={20} color="blue" />
              )}
              isChecked={item.isChecked}
          />
          <Cell style={styles.cell} width={1}>
            <Text>{item.no}</Text>
          </Cell>
          <Cell style={styles.cell} width={3}>
              <Text>{item.name}</Text>
          </Cell>
          <EditableCell width={1} value={item.qty} onEndEditing={(target, value) => {}}>
          </EditableCell>
        </Row>
    );
  }

  onCheckablePress() {}

  onColumnSort() {}
}

export default RNDataTable;
