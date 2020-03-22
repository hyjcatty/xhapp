import React, { Component } from "react";

const { Platform } = React;
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
import {TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {
    StyleSheet
} from 'react-native';
var photoOptions={
    title:"请选择",
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'选择照片',
    quality:0.75,
    allowsEditing:true,
    noData:false,
    storageOptions:{
        skipBackup:true,
        path:'images'
    }
}
class NHImagePicker extends Component {
  constructor(props) {
    super(props);
      this.state={uri:''}
  }
  uploadImage(uri){
      let formData=new FormData();
      let file= {uri:uri,type:'multipart/form-data',name:'image.png'}
      formData.append('file',file);
      console.log(formData);
      fetch('url',{
          method:'POST',
          headers:{
              'Content-Type':'multipart/form-data'
          },
          body:formData,
      }).then((response)=>response.text())
          .then((responseData)=>{
              console.log('responseData',responseData);
              alert('上传成功');
          }).catch((error)=>{
          console.log('error',error);
          alert('上传失败');
      })
  }
  openMycamera(){
      ImagePicker.showImagePicker(photoOptions,(response)=>{
          console.log('response'+response);
          if(response.didCancel){
              return;
          }
          //this.uploadImage(response.uri);
      })
  }
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
            <Title>Image</Title>
          </Body>
          <Right />
        </Header>

        <Content padder style={{ backgroundColor: "#fff" }}>
          <TouchableOpacity onPress={this.openMycamera.bind(this)}>
              <Text style={styles.text}>
                  相机&相册
              </Text>
           </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
    text: {
        fontWeight: Platform.OS === "ios" ? "500" : "400",
        fontSize: 16,
        marginLeft: 20
    },
});
export default NHImagePicker;
