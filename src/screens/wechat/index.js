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
import wechat from "react-native-wechat";
class NHWechat extends Component {
  constructor(props) {
    super(props);
  }
  getAccessToken=(code)=>{
    return "123456";
  }
  WXLogin = () => {
    let scope = 'snsapi_userinfo';
    let state = 'wechat_sdk_demo';
    //判断微信是否安装
    wechat.isWXAppInstalled()
        .then((isInstalled) => {
          if (isInstalled) {
            //发送授权请求
            wechat.sendAuthRequest(scope, state)
                .then(responseCode => {
                  //返回code码，通过code获取access_token
                  this.getAccessToken(responseCode.code);
                })
                .catch(err => {
                  Alert.alert('登录授权发生错误：', err.message, [
                    {text: '确定'}
                  ]);
                })
          } else {
            Platform.OS == 'ios' ?
                Alert.alert('没有安装微信', '是否安装微信？', [
                  {text: '取消'},
                  {text: '确定', onPress: () => this.installWechat()}
                ]) :
                Alert.alert('没有安装微信', '请先安装微信客户端在进行登录', [
                  {text: '确定'}
                ])
          }
        })
  };
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
            <Title>HighCharts</Title>
          </Body>
          <Right />
        </Header>

        <Content padder style={{ backgroundColor: "#fff" }}>
          <Button

              onPress={() => this.WXLogin.bind(this)}
          >
            <Icon name="chatbubbles" />
            <Text>Wechat</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default NHWechat;
