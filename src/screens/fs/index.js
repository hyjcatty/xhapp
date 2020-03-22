import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Textarea,
  Body,
  Left,
  Right,
   Text,
  Icon
} from "native-base";
import RNFS from 'react-native-fs';
class RNFileSystem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filename: "test",
            filecontent:'',
            inputinfo:""

        };
        console.log('MainBundlePath=' + RNFS.MainBundlePath)
        console.log('CachesDirectoryPath=' + RNFS.CachesDirectoryPath)
        console.log('DocumentDirectoryPath=' + RNFS.DocumentDirectoryPath)
        console.log('TemporaryDirectoryPath=' + RNFS.TemporaryDirectoryPath)
        console.log('LibraryDirectoryPath=' + RNFS.LibraryDirectoryPath)
        console.log('ExternalDirectoryPath=' + RNFS.ExternalDirectoryPath)
        console.log('ExternalStorageDirectoryPath=' + RNFS.ExternalStorageDirectoryPath)

    }
    writeFile() {

        console.log("write click");
        if(this.state.inputinfo.length ==0){
            return;
        }
        const path = RNFS.DocumentDirectoryPath + '/'+this.state.filename+'.txt';

        // write the file
        RNFS.writeFile(path, this.state.inputinfo, 'utf8')
            .then((success) => {
                console.log('path', path);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    readFile() {
        const path = RNFS.DocumentDirectoryPath + '/'+this.state.filename+'.txt';

        console.log("read click");
        return RNFS.readFile(path)
            .then((result) => {
                console.log(result);

                this.setState({
                    filecontent: result,
                })
            })
            .catch((err) => {
                console.log(err.message);

            });
    }
    onValueChange(value) {
        this.setState({
            inputinfo: value.trim()
        });
        console.log("input:"+value);
    }
  render() {
    return (
      <Container style={{backgroundColor: "#FFF"}}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>FileSystem</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Textarea rowSpan={5} bordered placeholder="Textarea" onChangeText={this.onValueChange.bind(this)}/>
            <Button full success style={{marginTop: 15}} onPress={this.writeFile.bind(this)}>
                <Text>WRITE</Text>
            </Button>
            <Text >
                {this.state.filecontent}
            </Text>
            <Button full success style={{marginTop: 15}} onPress={this.readFile.bind(this)}>
                <Text>READ</Text>
            </Button>
        </Content>
      </Container>
    );
  }
}

export default RNFileSystem;
