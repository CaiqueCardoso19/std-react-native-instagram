# React-native instagram

> This guide is just for MacOS users.

#### #1
- run
```bash
$ yarn install
```

#### #2
- should link this dependencies on natives OS configs

```bash
$ react-native link react-native-gesture-handler
$ react-native link react-native-image-picker
```

#### #3

- should add on **AndroidManifest.xml**

```xml
  <uses-permission android:name="android.permission.CAMERA" />
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```

#### #4
- should add on **./ios/instagram/Info.plist**

```xml
  <key>NSPhotoLibraryUsageDescription</key>
	<string>$(PRODUCT_NAME) would like access to your photo gallery</string>
	<key>NSCameraUsageDescription</key>
	<string>$(PRODUCT_NAME) would like to use your camera</string>
	<key>NSPhotoLibraryAddUsageDescription</key>
	<string>$(PRODUCT_NAME) would like to save photos to your photo gallery</string>
	<key>NSMicrophoneUsageDescription</key>
	<string>$(PRODUCT_NAME) would like to use your microphone (for videos)</string>	
```

#### #5
- should run

```bash
  $ react-native run-ios
```