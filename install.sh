rm -f Jarreo.apk
cordova build --release android
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore /home/fabio/src/ionic/platforms/android/ant-build/Ionic-release-unsigned.apk alias_name
zipalign -v 4 /home/fabio/src/ionic/platforms/android/ant-build/Ionic-release-unsigned.apk Jarreo.apk
adb install -r Jarreo.apk
