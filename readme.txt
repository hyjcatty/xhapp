React-Native Demo

pre-condition:
    nodejs
    npm
    yarn
    reactnative
    androidstudio
    qemu
    gradle

Environment preparation (assume u already have the environment for node/react/Cordova):
Install react-native/expo as global
npm install react-native -g
npm install expo -g
npm install expo-cli -g

add react-native into your envrionment path.

goto the demo folder:

install the node-modules:
yarn
* NOTE: please do not use npm install in this case!!

link to the react-native-icons:
react-native link react-native-vector-icons
* NOTE: if the react-native is not in your path, this command will be failed.

Open the simulator or link a mobile phone to your environment, please confirm the development mode is running and ADB driver is correctly installed.
OR u can just prepare a simulator in Android studio then open it.
*Note: this demo can not open the gladle or simulator automatically.

Run the app:
                            npx react-native run-android
To show the console:
                            npx react-native log-android

Actions next step:
1) Find a data wedget for react native which can replace datatable.
Answer:
yarn add react-native-data-table //It seems there are compatibility issue in this package
yarn add react-native-table-component
yarn add react-native-webview
yarn add react-native-highcharts
yarn add realm
     *** Note: If we want to use highcharts, we need to change it's codes to fit the last version of react Native, need to change:
                a) webview should import from react-native-webview
                b) "this.reRenderWebView.bind(this)" to replace "this.reRenderWebView" to void "this.setState is not a function" issue

2) How to hold the gesture in the reactnative? For example, "back".
defaultly supported in react native + expo, tested

3) How to run background while system back to the main screen.
defaultly supported in react native + expo, tested

4) How to get the SIM/phone number/device number in react native.
yarn add react-native-device-info
react-native link react-native-device-info //!Important, EXPO does not suppor react-native-device-info, this cost me much time to find it out.MMB

yarn add react-native-unimodules
yarn add expo-constants
yarn add react-native-sim-data
react-native link react-native-sim-data

5) How to banding Wechat/weibo to do the login.
yarn add react-native-wechat
https://www.jianshu.com/p/3f424cccb888
need to add the getAccessToken function into the case and test

6) How to open the camera to do the shot/video/scan
yarn add react-native-camera
react-native link react-native-camera
https://blog.csdn.net/qq_38356174/article/details/95360470
https://blog.csdn.net/he_wen_jian/article/details/94443258
yarn add react-native-image-picker
react-native link react-native-image-picker
https://www.jianshu.com/p/527f48ebc26a

7) How to get the geography information
yarn add react-native-amap3d
react-native link react-native-amap3d
yarn add react-native-amap-geolocation
react-native link react-native-amap-geolocation

Attention: Amap key for debug need to apply standalone, and if u need to make the release version, this one also need to be done again and use the special key store.
https://www.jianshu.com/p/fe90fc6a0308
yarn add @react-native-community/geolocation

https://lbs.amap.com/api/android-sdk/gettingstarted
download the libpackage
8) How to read the message information

9) How to use the system finger print to validate user again
yarn add react-native-fs
react-native link react-native-fs
10) How to do the hot update?

11) How to open the websocket? and keep live while background?
yarn add react-native-websocket // Need to check if the websocket can link to our mosca server!

12) How to visit local picture and update it?
contain in question 6

13) How to send a notification in system?
yarn add react-native-push-notification
react-native link react-native-push-notification
https://github.com/zo0r/react-native-push-notification

dex complex:
https://www.jianshu.com/p/ca2fb762a616
