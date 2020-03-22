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
  DatePicker,
  Text
} from "native-base";
//import Constants from 'expo-constants';
import DeviceInfo from 'react-native-device-info';
var phonenumber ="";
class NHDeviceInfo extends Component {
  constructor(props) {
    super(props);
    this.state={
      Brand:"",
      BuildNumber:"",
      BundleID:"",
      Carrier:"",
      DeviceInfo:"",
      FirstInstallTime:"",
      FontScale:"",
      FreeDiskStorage:"",
      LastUpdateTime:"",
      Manufacturer:"",
      MaxMemory:"",
      PhoneNumber:"",
      Model:"",
      SerialNumber:"",
      SystemName:"",
      SystemVersion:"",
      TotalDiskCapacity:"",
      TotalMemory:"",
      Version:"",
      isEmulator:"",
      isTablet:""
    };
  }
  async UNSAFE_componentWillMount() {
    try {
      let getBrand = await  DeviceInfo.getBrand();
      if (getBrand !== null) {
        console.log("品牌:"+getBrand);
        this.setState({"Brand":getBrand});
      }
    } catch (e) {
      console.error('品牌 No data', e)
    }
    try {
      let getApplicationName = await  DeviceInfo.getApplicationName();
      if (getApplicationName !== null) {
        console.log("当前应用名称:"+getApplicationName);
        this.setState({"ApplicationName":getApplicationName});
      }
    } catch (e) {
      console.error('当前应用名称 No data', e)
    }
    try {
      let getBuildNumber = await  DeviceInfo.getBuildNumber();
      if (getBuildNumber !== null) {
        console.log("应用编译版本号:"+getBuildNumber);
        this.setState({"BuildNumber":getBuildNumber});
      }
    } catch (e) {
      console.error('应用编译版本号 No data', e)
    }
    try {
      let getBundleId = await  DeviceInfo.getBundleId();
      if (getBundleId !== null) {
        console.log("获取应用程序包标识符:"+getBundleId);
        this.setState({"BundleId":getBundleId});
      }
    } catch (e) {
      console.error('获取应用程序包标识符 No data', e)
    }
    try {
      let getCarrier = await  DeviceInfo.getCarrier();
      if (getCarrier !== null) {
        console.log("运营商名称:"+getCarrier);
        this.setState({"Carrier":getCarrier});
      }
    } catch (e) {
      console.error('运营商名称 No data', e)
    }
    try {
      let getDeviceId = await  DeviceInfo.getDeviceId();
      if (getDeviceId !== null) {
        console.log("设备ID:"+getDeviceId);
        this.setState({"DeviceId":getDeviceId});
      }
    } catch (e) {
      console.error('设备ID No data', e)
    }
    try {
      let getDeviceName = await  DeviceInfo.getDeviceName();
      if (getDeviceName !== null) {
        console.log("设备名称:"+getDeviceName);
        this.setState({"DeviceName":getDeviceName});
      }
    } catch (e) {
      console.error('设备名称 No data', e)
    }
    try {
      let getFirstInstallTime = await  DeviceInfo.getFirstInstallTime();
      if (getFirstInstallTime !== null) {
        console.log("获取应用初始安装时间:"+getFirstInstallTime);
        this.setState({"FirstInstallTime":getFirstInstallTime});
      }
    } catch (e) {
      console.error('获取应用初始安装时间 No data', e)
    }
    try {
      let getLastUpdateTime = await  DeviceInfo.getLastUpdateTime();
      if (getLastUpdateTime !== null) {
        console.log("获取应用上次更新时间:"+getLastUpdateTime);
        this.setState({"LastUpdateTime":getLastUpdateTime});
      }
    } catch (e) {
      console.error('获取应用上次更新时间 No data', e)
    }
    try {
      let getFontScale = await  DeviceInfo.getFontScale();
      if (getFontScale !== null) {
        console.log("设备字体大小:"+getFontScale);
        this.setState({"FontScale":getFontScale});
      }
    } catch (e) {
      console.error('设备字体大小 No data', e)
    }
    try {
      let getFreeDiskStorage = await  DeviceInfo.getFreeDiskStorage();
      if (getFreeDiskStorage !== null) {
        console.log("剩余存储容量:"+getFreeDiskStorage);
        this.setState({"FreeDiskStorage":getFreeDiskStorage});
      }
    } catch (e) {
      console.error('剩余存储容量 No data', e)
    }
    try {
      let getTotalMemory = await  DeviceInfo.getTotalMemory();
      if (getTotalMemory !== null) {
        console.log("设备总内存:"+getTotalMemory);
        this.setState({"TotalMemory":getTotalMemory});
      }
    } catch (e) {
      console.error('设备总内存 No data', e)
    }
    try {
      let getTotalDiskCapacity = await  DeviceInfo.getTotalDiskCapacity();
      if (getTotalDiskCapacity !== null) {
        console.log("完整磁盘空间大小:"+getTotalDiskCapacity);
        this.setState({"TotalDiskCapacity":getTotalDiskCapacity});
      }
    } catch (e) {
      console.error('完整磁盘空间大小 No data', e)
    }
    try {
      let getMaxMemory = await  DeviceInfo.getMaxMemory();
      if (getMaxMemory !== null) {
        console.log("获取JVM试图使用的最大内存量:"+getMaxMemory);
        this.setState({"MaxMemory":getMaxMemory});
      }
    } catch (e) {
      console.error('获取JVM试图使用的最大内存量 No data', e)
    }
    try {
      let getManufacturer = await  DeviceInfo.getManufacturer();
      if (getManufacturer !== null) {
        console.log("设备制造商:"+getManufacturer);
        this.setState({"Manufacturer":getManufacturer});
      }
    } catch (e) {
      console.error('设备制造商 No data', e)
    }
    try {
      let getModel = await  DeviceInfo.getModel();
      if (getModel !== null) {
        console.log("获取设备模式:"+getModel);
        this.setState({"Model":getModel});
      }
    } catch (e) {
      console.error('获取设备模式 No data', e)
    }
    try {
      let getSerialNumber = await  DeviceInfo.getSerialNumber();
      if (getSerialNumber !== null) {
        console.log("设备唯一序列号:"+getSerialNumber);
        this.setState({"SerialNumber":getSerialNumber});
      }
    } catch (e) {
      console.error('设备唯一序列号 No data', e)
    }
    try {
      let getSystemName = await  DeviceInfo.getSystemName();
      if (getSystemName !== null) {
        console.log("获取系统名称:"+getSystemName);
        this.setState({"SystemName":getSystemName});
      }
    } catch (e) {
      console.error('获取系统名称 No data', e)
    }
    try {
      let getSystemVersion = await  DeviceInfo.getSystemVersion();
      if (getSystemVersion !== null) {
        console.log("获取系统版本:"+getSystemVersion);
        this.setState({"SystemVersion":getSystemVersion});
      }
    } catch (e) {
      console.error('获取系统版本 No data', e)
    }
    try {
      let getVersion = await  DeviceInfo.getVersion();
      if (getVersion !== null) {
        console.log("设备版本:"+getVersion);
        this.setState({"Version":getVersion});
      }
    } catch (e) {
      console.error('设备版本 No data', e)
    }
    try {
      let isEmulator = await  DeviceInfo.isEmulator();
      if (isEmulator !== null) {
        console.log("程序是否允许在模拟器中:"+isEmulator);
        this.setState({"isEmulator":isEmulator});
      }
    } catch (e) {
      console.error('程序是否允许在模拟器中 No data', e)
    }
    try {
      let isTablet = await  DeviceInfo.isTablet();
      if (isTablet !== null) {
        console.log("是否是平板电脑:"+isTablet);
        this.setState({"isTablet":isTablet});
      }
    } catch (e) {
      console.error('是否是平板电脑 No data', e)
    }
    try {
      let getPhoneNumber = await  DeviceInfo.getPhoneNumber();
      if (getPhoneNumber !== null) {
        console.log("获取电话号码:"+getPhoneNumber);
        this.setState({"PhoneNumber":getPhoneNumber});
      }
    } catch (e) {
      console.error('获取电话号码 No data', e)
    }

    //await console.log('获取电话号码:', DeviceInfo.getPhoneNumber());
  }

  render() {
    let text = "正在获取设备信息";
    if(this.state.PhoneNumber !== ""){
      text = '电话号码:'+this.state.PhoneNumber;
    }
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
            <Title>Device Info</Title>
          </Body>
          <Right />
        </Header>

        <Content padder style={{ backgroundColor: "#fff" }}>
          <Text>
            {text}
          </Text>

        </Content>
      </Container>
    );
  }
}

export default NHDeviceInfo;

/*

 <Text>
 deviceId0: {RNSimData.getSimInfo().deviceId0}
 </Text>
 <Text>
 phoneNumber0: {RNSimData.getSimInfo().phoneNumber0}
 </Text>
 */




