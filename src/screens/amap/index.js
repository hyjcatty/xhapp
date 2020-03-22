import React, { Component } from "react";
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
  Text
} from "native-base";
import {MapView} from 'react-native-amap3d'
import {
    StyleSheet
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
class NHAmap extends Component {
  constructor(props) {
    super(props);
  }

    getLocation(){
        //navigator.geolocation.getCurrentPosition(
            Geolocation.getCurrentPosition(
            (position) => {
                console.log('position----------------');
                console.log(position);
            },
            (error) => {console.log(error);},
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
    }
  render() {
      this.getLocation();
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
            <Title>AMAP</Title>
          </Body>
          <Right />
        </Header>

        <Content padder style={{ backgroundColor: "#fff" }}>
            <MapView style={{width:'100%',height:400}}/>
        </Content>
      </Container>
    );
  }
}

export default NHAmap;
