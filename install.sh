cordova build --release android
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore /home/fabio/src/ionic/platforms/android/ant-build/Ionic-release-unsigned.apk alias_name
adb install -r /home/fabio/src/ionic/platforms/android/ant-build/Ionic-release-unsigned.apk
