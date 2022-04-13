# Final Project -- My3dmodel Viewer App. Version 0.1
***

<p align="center">
  <image src="https://user-images.githubusercontent.com/67940767/162885546-0c723dab-77a0-4d5c-bc89-beba41fdf74f.png" width="50%" height="50%">
</p>
  
The My3dmodel Viewer app allows users to view prebuilt 3d objects on the application. They can rotate the object, change the object's color, and toggle the background color of the object.


-----
## Table of contents
* Concise Project Description
* Demo Screenshots
* Features list
* Configuration Instructions
* Installation Instructions
* Operating Instructions
* Manifest
* Copyright information
* Contact information
* Bug list
* Troubleshooting tips
* Credits and Acknowledgements
* Future To Dos
* Links to further reading
  
-----
### Demo Screenshots

  Web Screen Shot:
  
  <image src="https://user-images.githubusercontent.com/67940767/162602687-bfe89d17-5ec4-43d2-a48c-4d85e632c309.png" width="30%" height="30%">
  <image src="https://user-images.githubusercontent.com/67940767/163105579-977b270e-5225-4728-9857-2fcf699541bf.png" width="30%" height="30%">

  Android Screen Shot:
    
  <image src="https://user-images.githubusercontent.com/67940767/163069410-05d14373-58fa-45a0-97ad-c0ce4ae6ace6.png" width="30%" height="30%">
      
  Android Emulator Screen Shot:
      
  <image src="https://user-images.githubusercontent.com/67940767/163105300-64667aa6-e323-4e65-a3cd-3a81ab3bdc3f.png" width="30%" height="30%">

    
-----
### Features List
* **Darkmode/Lightmode:** The user can toggle the background colour of the app by using the toggle button with the Moon/Sun Symbol.
* **Rotate the Object:** The user can rotate the object using the three buttons labeled x-axis, y-axis, and z-axis. 
* **Reset Object's Orientation:** The user can also reset the orientation of the object by pressing the reset button.
* **Change Object's Color:** The user can change the color of the object by typing in the name or hex value of the color.
* **View other Preset Objects:** The user can also open the drawer menu at the top left, which will lead them to a drawer of other prebuilt objects in the application.

-----
### Configuration Instructions
   To setup the project on a server outside of Expo Snacks, the user can upload the code to the expo command line and start the server with npm nodes.
    
   To setup the project on Expo Snack web development, you can search Expo Snack on a web browser, create an account or sign in if you have one, then access the ide by creating a snack on the website.
    
   _Unfortunately, I struggled with getting the project to work on a server during the time frame of this assignment. There are package dependencies and other expo dependencies necessary to install._
    
-----
### Installation Instructions
   To install the project on the web, the user can download the github files, and then copy the file code into Expo Snacks on the Expo web development.
   
   To install the project on the server, the user must have installed git, npm, and expo. This is a helpful [tutorial on how to install an expo client development server](https://www.youtube.com/watch?v=f6TXEnHT_Mk "Tutorial on expo client development server"). Once the server has been deployed, you can install the project by creating a new project in the expo server using the git terminal, then to copy and paste the files from this github onto the created project folder on the desktop/computer.
    
_Unfortunately this didn't work for me, but it can still be useful for others_

-----
### Operating Instructions
**For Mobile users:** The user must have the mobile app Expo Go to be able to view the application on their respective mobile device (this app is rendered with consideration for android users).
    
**For Web apps:** The user can run the code directly from the Expo snack ide. Then, they can view their code through the preview toggle button, that will open up a preview of their application through four ways: QR code for their device (namely for android), iOS emulator, Android emulator, and Web emulator).
    
   
**For Server development:** The user can run the created project folder on the Expo server by switching to the project file directory and using the npm start command on the git terminal. Then, the user can access the localhost server to run the code for the application.

-----
### Manifest
 The main list of this project include:
    *assets - contains images for the app.json to use as icons for their views
    *App.js - The source code for the application
    *README.md - This file!
    *app.json - contains the emulator's specific dependencies
    *babel.config.js - contains the babel runtime helpfer for exporting the application onto viewing devices
    *package.json - contains the list of dependcies and libraries that are used in the application
    
 These are the main dependencies and their version that is specific to ensuring that the application runs as intended.
```JavaScript
    "expo": "~43.0.2",
    "expo-status-bar": "~1.1.0",
    "react": "17.0.1",
    "react-dom": "17.0.1",
    "react-native": "0.64.3",
    "react-native-web": "0.17.1",
    "three": "^0.108.0",
    "scheduler": "0.13.3",
    "expo-three": "5.0.0",
    "react-3d-viewer": "*",
    "react-reconciler": "0.20.4",
    "react-three-fiber": "4.0.17",
    "react-native-screens": "~3.8.0",
    "react-native-reanimated": "~2.2.0",
    "@react-navigation/drawer": "*",
    "@react-navigation/native": "6.0.0",
    "react-native-gesture-handler": "~1.10.2",
    "react-native-safe-area-context": "3.3.2",
    "expo-gl": "~11.0.3"
```
This and other files meta information of where and how the app was developed in, can be found in the package.json of this github.
    
-----
### Copyright Information
* The shapes used in the My3dModel viewer app are the [BufferGeometry](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry "BufferGeometry") generated shapes from three.js

-----
### Bug List
**For Mobile users:** When viewing through multiple objects on a mobile device, revisiting an object the second time sometimes causes the object to shrink and move to the lower left corner of the screen. I have no clue as to why this happens, and can only put it on the bug list for now.
    
  Screenshot of bug on android emulator:
    
  <image src="https://user-images.githubusercontent.com/67940767/163109232-6d48bcb5-4f10-405a-8eb3-9e4b2628a7cf.png" width="30%" height="30%">

-----
### Troubleshooting Tips
*In my experience, there isn't a direct way on the Expo Go App to troubleshoot on the mobile.*
    
**For Web users:** On the Expo snack web browser development, the snack ide has a built in debugger to help with simple expo variables. For further specific cases of debugging needed (such as why the code in rendering the object might not cause errors but fails to render on the screen), then the user can download the [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en "React Developer Tools") by React as an extension to their browser (limited to Google Chrome, and browsers that can accept extensions).

Screenshot of using React Developer Tools:
    
  <image src="https://user-images.githubusercontent.com/67940767/163111129-cb01f581-0bd6-4162-9170-4a53d4b2ad77.png" width="80%" height="80%">
    
-----
### Contact information
  You can reach me at this email: valiantbeat@gmail.com
    
-----
### Credits and Acknowledgements
* [React-three-fiber](https://github.com/pmndrs/react-three-fiber "React-three-fiber GitHub") by the Poimandres, a group created repository for open source developer collectives.
** Additional credit to the react-three-fiber team for the sample on how they created their functions of the object:
```JavaScript
     return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
```
   _Wouldn't have understood how to load an object with three.js on expo snack without this!_
    
* [Three.js documentation](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene "Three.js documentation") a Javascript cross-browser library for creating and displaying animated 3D computer graphics in a web browser through the use of WebGL. I looked through the Geometries section in the manual for using specific BufferGeometry object shapes.
* [Drawer navigation](https://reactnavigation.org/docs/drawer-based-navigation/ "Drawer navigation") for the styled navigation that makes use of a menu that the user can slide from the left side of the screen. This navigation comes from the library React Navigation.    

-----
### Future Todos:
* Uploading the expo snack files onto expo client
* Figuring out how to upload user's 3d objects from their mobile app's file explorer to the app for viewing
* Figure out orbitcontrol, so that the user can rotate the object, pan, and zoom through the use of touch gesture
* ...more cool things with 3d models! 

**The Project Status:**
*Looking to do further research with the links for further reading in the near future
    
-----
### Links to further reading on the topic
_Particularly, what libraries to look into for users interested in developing and progressing the app on Expo client_
* [React-3d-viewer](https://github.com/dwqdaiwenqi/react-3d-viewer "React-3d-Viewer") for implementing 3D model view on html, github repository by dwqdaiwenqi
* [Creating 3D sphere component with React Native and THREE](https://medium.com/@yoobi55/creating-3d-sphere-component-with-react-native-and-three-c5fb46dadbd "Creating 3D sphere component with React Native and THREE") for looking into using React Native and THREE.js on the Expo server. The author of the document is Bi Yoo.
* [React-native-gl-model-view](https://bestofreactjs.com/repo/rastapasta-react-native-gl-model-view-react-native-animation "react-native-gl-model-view") for looking into implementing specific model files from the user to a 3d model viewer application. The github repository is by Michael Straßburger.
