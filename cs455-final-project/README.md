# Final Project -- My3dmodel Viewer App
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
   To setup the project on a server outside of expo snacks, the user can upload the code to the expo command line and start the server with npm nodes.
    
   *Unfortunately, I struggled with getting the project to work on a server during the time frame of this assignment. There are package dependencies and other expo dependencies necessary to install.*
    
-----
### Installation Instructions
   To install the project on the webt, the user can download the github files, and then copy the file code into Expo Snacks on the Expo web development.
   
   To install the project on 

-----
### Operating Instructions
**For Mobile users:** The user must have the mobile app Expo Go to be able to view the application on their respective mobile device (this app is rendered with consideration for android users).
    
**For Web apps:**
*
   
**For Server development:**

-----
### Manifest
*
*
*

-----
### Copyright Information
*
*
*

-----
### Contact Information
*
*
*

-----
### Bug List
**For Mobile users:** When viewing through multiple objects on a mobile device, revisiting an object the second time sometimes causes the object to shrink and move to the lower left corner of the screen. I have no clue as to why this happens, and can only put it on the bug list for now.
    
  Screenshot of bug:
    
  <image src="https://user-images.githubusercontent.com/67940767/163109232-6d48bcb5-4f10-405a-8eb3-9e4b2628a7cf.png" width="30%" height="30%">

-----
### Troubleshooting Tips
*In my experience, there isn't a direct way on the Expo Go App to troubleshoot on the mobile.*
    
**For Web users:** On the Expo snack web browser development, the snack ide has a built in debugger to help with simple expo variables. For further specific cases of debugging needed (such as why the code in rendering the object might not cause errors but fails to render on the screen), then the user can download the [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en "React Developer Tools") by React as an extension to their browser (limited to Google Chrome, and browsers that can accept extensions).

Screenshot of using React Developer Tools:
    
  <image src="https://user-images.githubusercontent.com/67940767/163111129-cb01f581-0bd6-4162-9170-4a53d4b2ad77.png" width="80%" height="80%">
    
-----
### Credits and Acknowledgements
* [React-three-fiber](https://github.com/pmndrs/react-three-fiber "React-three-fiber GitHub") by the Poimandres, a group created repository for open source developer collectives.
* [Three.js documentation](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene "Three.js documentation") a Javascript cross-browser library for creating and displaying animated 3D computer graphics in a web browser through the use of WebGL. I looked through the Geometries section in the manual for using specific BufferGeometry object shapes.
    

-----
### Future Todos:
* Uploading the expo snack files onto expo client
* Figuring out how to upload user's 3d objects from their mobile app's file explorer to the app for viewing
* Figure out orbitcontrol, so that the user can rotate the object, pan, and zoom through the use of touch gesture
* ...more cool things with 3d models! 

-----
### Links to further reading
