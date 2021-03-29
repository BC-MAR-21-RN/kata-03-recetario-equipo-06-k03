# RecipeBook

Escribe aquí los pasos para ejecutar/probar tu proyecto y el nombre de los integrantes de tu equipo

## Build and run the app

1. Install React Native CLI as described at https://reactnative.dev/docs/environment-setup

    You can install react native command line interface on npm, using the `install -g react-native-cli` command as shown below.

    `npm install -g react-native-cli`

2. Clone this repository

3. Run `npm install`, all required components will be installed automatically

## iOS

    i. Run `pod install` from `react-native-demo/ios` folder
    ii. Start XCode and open generated the workspace

## Android

    No steps required

    Note: To enable android push notifications in the demo project:

    i. In the case of using Linux, give all permissions to the gradlew, using:

      ```
      cd android
      chmod +x gradlew
      ./gradlew clean
      ```

It is recommended to run `npx react-native start` command from root project directory.

Run your project from XCode (Cmd+R) for iOS, or use `npx react-native run-android` to run your project on Android.

If on Android, there is an error when running the app on the emulator or device, start the app with `npx react-native start --reset-cache`.

## Authors

- Diego Rodriguez Lopez (DiegoSpielZeug)
- Gilberto Armando Aguirre (YilKanda)
