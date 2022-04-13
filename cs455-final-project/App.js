/**
 *  file: App.js
 *  author: Mikhaela (Mikha) Aguilar <mab295@uregina.ca>
 *  version: 0.1
 *  date-created:  mar-27-2022
 *  last-modified: apr-12-2022
 */
import React, { useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Switch,
  TextInput
} from 'react-native';
import {
  Canvas,
  useRender,
  useFrame,
  useUpdate,
  useThree,
  useResource,
  useLoader,
} from 'react-three-fiber';
import { OBJModel } from 'react-3d-viewer';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as THREE from 'three';

//Creates a Drawer Navigator so that it can be used to call and create drawer screen object
const Drawer = createDrawerNavigator();

//Global variable for background, text colour, and object colour of the Application
var bgColor = 'black';
var txtColor = 'white';
var objColor = 'orange';

//Global variable for manipulating the object's X, Y, and Z rotation
var xRot = 0;
var yRot = 0;
var zRot = 0;

  /**
   * Cube
   * This is the cube object's creation function.
   * Purpose: Creates
   * Parameter(s): 
   *  <1> Takes in a props call to the function.
   *
   * Precondition(s):
   * <1> The xRot, yRot and zRot rotation values should be defined globally, as it represents the current object's orientation.
   * <2> The objColor should be defined globally to be used for the Object's color.
   * 
   * SideSide effect:
   * <1> The useFrame() function will take the value of xRot, yRot, and zRot rotation values to render the current object's orientation.
   * <2> Clicking on the object will increase the size of the object. Re clicking the object will shrink the object to its original size.
   * 
   * Returns:
   * <mesh>
   * </mesh>
   */  
function Cube(props) {
  //This reference will give us direct access to the mesh
  const mesh = useRef();

  //Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = xRot));
  useFrame(() => (mesh.current.rotation.y = yRot));
  useFrame(() => (mesh.current.rotation.z = zRot));

  //The mesh component applies the on click toggle of the object(increase object size/ shrink object size), creates the object based on the Three.js BufferGeometry function, and applies a color to that object by making use of the meshStandardMaterial
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [2, 2, 2] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={objColor} />
    </mesh>
  );
}

  /**
   * Sphere
   * This is the sphere object's creation function.
   * Purpose: Creates
   * Parameter(s): 
   *  <1> Takes in a props call to the function.
   *
   * Precondition(s):
   * <1> The xRot, yRot and zRot rotation values should be defined globally, as it represents the current object's orientation.
   * <2> The objColor should be defined globally to be used for the Object's color.
   * 
   * SideSide effect:
   * <1> The useFrame() function will take the value of xRot, yRot, and zRot rotation values to render the current object's orientation.
   * <2> Clicking on the object will increase the size of the object. Re clicking the object will shrink the object to its original size.
   * 
   * Returns:
   * <mesh>
   * </mesh>
   */  
function Sphere(props) {
  // // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = xRot));
  useFrame(() => (mesh.current.rotation.y = yRot));
  useFrame(() => (mesh.current.rotation.z = zRot));

  //The mesh component applies the on click toggle of the object(increase object size/ shrink object size), creates the object based on the Three.js BufferGeometry function, and applies a color to that object by making use of the meshStandardMaterial
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <sphereBufferGeometry attach="geometry" args={[1, 12]} />
      <meshStandardMaterial attach="material" color={objColor} />
    </mesh>
  );
}

  /**
   * Octahedron
   * This is the octahedron object's creation function.
   * Purpose: Creates
   * Parameter(s): 
   *  <1> Takes in a props call to the function.
   *
   * Precondition(s):
   * <1> The xRot, yRot and zRot rotation values should be defined globally, as it represents the current object's orientation.
   * <2> The objColor should be defined globally to be used for the Object's color.
   * 
   * SideSide effect:
   * <1> The useFrame() function will take the value of xRot, yRot, and zRot rotation values to render the current object's orientation.
   * <2> Clicking on the object will increase the size of the object. Re clicking the object will shrink the object to its original size.
   * 
   * Returns:
   * <mesh>
   * </mesh>
   */  
function Octahedron(props) {
  // // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = xRot));
  useFrame(() => (mesh.current.rotation.y = yRot));
  useFrame(() => (mesh.current.rotation.z = zRot));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <octahedronBufferGeometry attach="geometry" args={[1,0]} />
      <meshStandardMaterial attach="material" color={objColor} />
    </mesh>
  );
}

  /**
   * Torus
   * This is the torus object's creation function.
   * Purpose: Creates
   * Parameter(s): 
   *  <1> Takes in a props call to the function.
   *
   * Precondition(s):
   * <1> The xRot, yRot and zRot rotation values should be defined globally, as it represents the current object's orientation.
   * <2> The objColor should be defined globally to be used for the Object's color.
   * 
   * SideSide effect:
   * <1> The useFrame() function will take the value of xRot, yRot, and zRot rotation values to render the current object's orientation.
   * <2> Clicking on the object will increase the size of the object. Re clicking the object will shrink the object to its original size.
   * 
   * Returns:
   * <mesh>
   * </mesh>
   */  
function Torus(props) {
  // // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = xRot));
  useFrame(() => (mesh.current.rotation.y = yRot));
  useFrame(() => (mesh.current.rotation.z = zRot));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [0.35, 0.35, 0.35] : [0.2, 0.2, 0.2]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <torusBufferGeometry attach="geometry" args={[5, 2, 8, 24]} />
      <meshStandardMaterial attach="material" color={objColor} />
    </mesh>
  );
}

  /**
   * TorusKnot
   * This is the torusknot object's creation function.
   * Purpose: Creates
   * Parameter(s): 
   *  <1> Takes in a props call to the function.
   *
   * Precondition(s):
   * <1> The xRot, yRot and zRot rotation values should be defined globally, as it represents the current object's orientation.
   * <2> The objColor should be defined globally to be used for the Object's color.
   * 
   * SideSide effect:
   * <1> The useFrame() function will take the value of xRot, yRot, and zRot rotation values to render the current object's orientation.
   * <2> Clicking on the object will increase the size of the object. Re clicking the object will shrink the object to its original size.
   * 
   * Returns:
   * <mesh>
   * </mesh>
   */ 
function TorusKnot(props) {
  // // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = xRot));
  useFrame(() => (mesh.current.rotation.y = yRot));
  useFrame(() => (mesh.current.rotation.z = zRot));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [0.35, 0.35, 0.35] : [0.2, 0.2, 0.2]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <torusKnotBufferGeometry attach="geometry" args={[5, 2, 30, 24]} />
      <meshStandardMaterial attach="material" color={objColor} />
    </mesh>
  );
}


/**
* Nav
* This is the Navigation Container
* Purpose: This is one of the app's exported view, and it holds the object screens together as a group of drawer screens
* Parameter(s): 
*  <1> N/A
*
* Precondition(s):
* <1> N/A
*
* Returns:
* <NavigationContainer>
*   <Drawer.Navigator>
*   <Drawer.Screen />
*   <Drawer.Screen />
*   <Drawer.Screen />
*   <Drawer.Screen />
*   <Drawer.Screen />
*   </Drawer.Navigator>
* </NavigationContainer>
*/ 
const Nav = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Cube" component={CubeScreen} />
        <Drawer.Screen name="Sphere" component={SphereScreen} />
        <Drawer.Screen name="Octahedron" component={OctoScreen} />
        <Drawer.Screen name="Torus" component={TorusScreen} />
        <Drawer.Screen name="TorusKnot" component={TorusKnotScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};


  /**
   * CubeScreen
   * This is the cube's object view screen
   * Purpose: Displays the cube object to the user, and allows them to rotate the cube, toggle the background of the cube, and type the colour of the cube.
   * Parameter(s): 
   *  <1> none
   *
   * Precondition(s):
   * <1> Light theme mode values must be specified, colour change values must be declared and saved to be applied to the object's view screen.
   * <2> Object must have a creation function for its rendered view.
   * <3> Object color must be specified.
   * 
   * SideSide effect:
   * <1> Light theme mode can be toggled on or off and it will affect the object's background colours.
   * <2> Pressing the X Axis, Y Axis and Z Axis buttons should affect the object's current orientation.
   * <3> Pressing the Reset button should reset the object's current orientation back to origin point (0,0,0). This means the object should face the front of the camera.
   * <4> Typing a valid color in the text input will change the object's current color.
   * 
   * Returns:
   * <View>
   *  <View>
   *   <Text>
   *     <Switch/>
   *   </Text>
   *  </View>
   *  <Canvas>
   *  </Canvas>
   *  <View>
   *    <TextInput/>
   *  </View>
   *  <View>
   *   <Button/>
   *   <Button/>
   *   <Button/>
   *  </View>
   * </View>
   */  
const CubeScreen = () => {
  //set the light mode/dark mode switch values
  const [switchValue, setSwitchValue] = useState(false);
  const toggleSwitch = (value) => {
    setSwitchValue(value);
  };

  //if the light mode was toggled on, then switch the background color to white and the text color to black
  if (switchValue) {
    bgColor = 'white';
    txtColor = 'black';
  } else {
    bgColor = 'black';
    txtColor = 'white';
  }

  //set the color state values
  const [newObjColor, setObjColor] = useState();

  //take the value from the TextInput and set the newObjcolor as that value
  const checkPass = (colorText) => {
    setObjColor(colorText);
  };

  //replace the current object color with the newObjcolor
  if (newObjColor)
  {
    objColor = newObjColor;
  }
  //else, leave the default value as orange
  else{
    objColor = "orange";
  }

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={styles.lightmodeBtn}>
        <Text style={[{ alignContent: 'center', fontSize: 25 }]}>
          {' '}
          {switchValue ? '🌞' : '🌙'}
          <Switch
            style={[{ marginTop: 10, marginBottom: 30 }]}
            onValueChange={toggleSwitch}
            value={switchValue}
          />
        </Text>
      </View>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Cube position={[0, 0, 0]} />
      </Canvas>
      <View style={styles.txtInput}>
        <TextInput
        style={{fontSize: 25, color: txtColor }}
        placeholder="type a color here"
        value={newObjColor}
        onChangeText={(newText) =>
        {
          checkPass(newText);
        }}
        />
      </View>
      <View style={styles.axisBtns}>
        <Button 
        title="X Axis" 
        color="#2f4f4f" 
        onPress={(e) => (xRot += 0.1)} />
        <Button
          title="Y Axis"
          styles={styles.btn}
          color="#2f4f4f"
          onPress={(e) => (yRot += 0.1)}
        />
        <Button
          title="Z Axis"
          styles={styles.btn}
          color="#2f4f4f"
          onPress={(e) => (zRot += 0.1)}
        />
        <Button
          title="Reset"
          styles={styles.btn}
          color="#2f4f4f"
          onPress={(e) => {
            (zRot = 0), (yRot = 0), (xRot = 0);
          }}
        />
      </View>
    </View>
  );
};

  /**
   * SphereScreen
   * This is the sphere's object view screen.
   * Purpose: Displays the sphere object to the user, and allows them to rotate the sphere, toggle the background of the sphere, and type the colour of the sphere.
   * Parameter(s): 
   *  <1> none
   *
   * Precondition(s):
   * <1> Light theme mode values must be specified, colour change values must be declared and saved to be applied to the object's view screen.
   * <2> Object must have a creation function for its rendered view.
   * <3> Object color must be specified.
   * 
   * SideSide effect:
   * <1> Light theme mode can be toggled on or off and it will affect the object's background colours.
   * <2> Pressing the X Axis, Y Axis and Z Axis buttons should affect the object's current orientation.
   * <3> Pressing the Reset button should reset the object's current orientation back to origin point (0,0,0). This means the object should face the front of the camera.
   * <4> Typing a valid color in the text input will change the object's current color.
   * 
   * Returns:
   * <View>
   *  <View>
   *   <Text>
   *     <Switch/>
   *   </Text>
   *  </View>
   *  <Canvas>
   *  </Canvas>
   *  <View>
   *    <TextInput/>
   *  </View>
   *  <View>
   *   <Button/>
   *   <Button/>
   *   <Button/>
   *  </View>
   * </View>
   */
const SphereScreen = () => {
  //set the light mode/dark mode switch values
  const [switchValue, setSwitchValue] = useState(false);
  const toggleSwitch = (value) => {
    setSwitchValue(value);
  };

  //if the light mode was toggled on, then switch the background color to white and the text color to black
  if (switchValue) {
    bgColor = 'white';
    txtColor = 'black';
  } else {
    bgColor = 'black';
    txtColor = 'white';
  }

  //set the color state values
  const [newObjColor, setObjColor] = useState();

  //take the value from the TextInput and set the newObjcolor as that value
  const checkPass = (colorText) => {
    setObjColor(colorText);
  };

  //replace the current object color with the newObjcolor
  if (newObjColor)
  {
    objColor = newObjColor;
  }
  //else, leave the default value as orange
  else{
    objColor = "orange";
  }

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View></View>
      <View style={styles.lightmodeBtn}>
        <Text style={[{ alignContent: 'center', fontSize: 25 }]}>
          {' '}
          {switchValue ? '🌞' : '🌙'}
          <Switch
            style={[{ marginTop: 10, marginBottom: 30 }]}
            onValueChange={toggleSwitch}
            value={switchValue}
          />
        </Text>
      </View>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Sphere position={[0, 0, 0]} />
      </Canvas>
      <View style={styles.txtInput}>
        <TextInput
        style={{fontSize: 25, color: txtColor }}
        placeholder="type a color here"
        value={newObjColor}
        onChangeText={(newText) =>
        {
          checkPass(newText);
        }}
        />
      </View>
      <View style={styles.axisBtns}>
        <Button 
        title="X Axis" 
        color="#2f4f4f" 
        onPress={(e) => (xRot += 0.1)} />
        <Button
          title="Y Axis"
          styles={styles.btn}
          color="#2f4f4f"
          onPress={(e) => (yRot += 0.1)}
        />
        <Button
          title="Z Axis"
          styles={styles.btn}
          color="#2f4f4f"
          onPress={(e) => (zRot += 0.1)}
        />
        <Button
          title="Reset"
          styles={styles.btn}
          color="#2f4f4f"
          onPress={(e) => {
            (zRot = 0), (yRot = 0), (xRot = 0);
          }}
        />
      </View>
    </View>
  );
};

  /**
   * OctoScreen
   * This is the octahedron's object view screen.
   * Purpose: Displays the octahedron object to the user, and allows them to rotate the octahedron, toggle the background of the octahedron, and type the colour of the octahedron.
   * Parameter(s): 
   *  <1> none
   *
   * Precondition(s):
   * <1> Light theme mode values must be specified, colour change values must be declared and saved to be applied to the object's view screen.
   * <2> Object must have a creation function for its rendered view.
   * <3> Object color must be specified.
   * 
   * SideSide effect:
   * <1> Light theme mode can be toggled on or off and it will affect the object's background colours.
   * <2> Pressing the X Axis, Y Axis and Z Axis buttons should affect the object's current orientation.
   * <3> Pressing the Reset button should reset the object's current orientation back to origin point (0,0,0). This means the object should face the front of the camera.
   * <4> Typing a valid color in the text input will change the object's current color.
   * 
   * Returns:
   * <View>
   *  <View>
   *   <Text>
   *     <Switch/>
   *   </Text>
   *  </View>
   *  <Canvas>
   *  </Canvas>
   *  <View>
   *    <TextInput/>
   *  </View>
   *  <View>
   *   <Button/>
   *   <Button/>
   *   <Button/>
   *  </View>
   * </View>
   */
const OctoScreen = () => {
  //set the light mode/dark mode switch values
  const [switchValue, setSwitchValue] = useState(false);
  const toggleSwitch = (value) => {
    setSwitchValue(value);
  };

  //if the light mode was toggled on, then switch the background color to white and the text color to black
  if (switchValue) {
    bgColor = 'white';
    txtColor = 'black';
  } else {
    bgColor = 'black';
    txtColor = 'white';
  }

  //set the color state values
  const [newObjColor, setObjColor] = useState();

  //take the value from the TextInput and set the newObjcolor as that value
  const checkPass = (colorText) => {
    setObjColor(colorText);
  };

  //replace the current object color with the newObjcolor
  if (newObjColor)
  {
    objColor = newObjColor;
  }
  //else, leave the default value as orange
  else{
    objColor = "orange";
  }

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View></View>
      <View style={styles.lightmodeBtn}>
        <Text style={[{ alignContent: 'center', fontSize: 25 }]}>
          {' '}
          {switchValue ? '🌞' : '🌙'}
          <Switch
            style={[{ marginTop: 10, marginBottom: 30 }]}
            onValueChange={toggleSwitch}
            value={switchValue}
          />
        </Text>
      </View>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Octahedron position={[0, 0, 0]} />
      </Canvas>
      <View style={styles.txtInput}>
        <TextInput
        style={{fontSize: 25, color: txtColor }}
        placeholder="type a color here"
        value={newObjColor}
        onChangeText={(newText) =>
        {
          checkPass(newText);
        }}
        />
      </View>
      <View style={styles.axisBtns}>
        <Button 
        title="X Axis" 
        color="#2f4f4f" 
        onPress={(e) => (xRot += 0.1)} />
        <Button
          title="Y Axis"
          styles={styles.btn}
          color="#2f4f4f"
          onPress={(e) => (yRot += 0.1)}
        />
        <Button
          title="Z Axis"
          styles={styles.btn}
          color="#2f4f4f"
          onPress={(e) => (zRot += 0.1)}
        />
        <Button
          title="Reset"
          styles={styles.btn}
          color="#2f4f4f"
          onPress={(e) => {
            (zRot = 0), (yRot = 0), (xRot = 0);
          }}
        />
      </View>
    </View>
  );
};

  /**
   * TorusScreen
   * This is the Torus' object view screen.
   * Purpose: Displays the Torus object to the user, and allows them to rotate the Torus, toggle the background of the Torus, and type the colour of the Torus.
   * Parameter(s): 
   *  <1> none
   *
   * Precondition(s):
   * <1> Light theme mode values must be specified, colour change values must be declared and saved to be applied to the object's view screen.
   * <2> Object must have a creation function for its rendered view.
   * <3> Object color must be specified.
   * 
   * SideSide effect:
   * <1> Light theme mode can be toggled on or off and it will affect the object's background colours.
   * <2> Pressing the X Axis, Y Axis and Z Axis buttons should affect the object's current orientation.
   * <3> Pressing the Reset button should reset the object's current orientation back to origin point (0,0,0). This means the object should face the front of the camera.
   * <4> Typing a valid color in the text input will change the object's current color.
   * 
   * Returns:
   * <View>
   *  <View>
   *   <Text>
   *     <Switch/>
   *   </Text>
   *  </View>
   *  <Canvas>
   *  </Canvas>
   *  <View>
   *    <TextInput/>
   *  </View>
   *  <View>
   *   <Button/>
   *   <Button/>
   *   <Button/>
   *  </View>
   * </View>
   */
const TorusScreen = () => {
  //set the light mode/dark mode switch values
  const [switchValue, setSwitchValue] = useState(false);
  const toggleSwitch = (value) => {
    setSwitchValue(value);
  };

  //if the light mode was toggled on, then switch the background color to white and the text color to black
  if (switchValue) {
    bgColor = 'white';
    txtColor = 'black';
  } else {
    bgColor = 'black';
    txtColor = 'white';
  }

  //set the color state values
  const [newObjColor, setObjColor] = useState();

  //take the value from the TextInput and set the newObjcolor as that value
  const checkPass = (colorText) => {
    setObjColor(colorText);
  };

  //replace the current object color with the newObjcolor
  if (newObjColor)
  {
    objColor = newObjColor;
  }
  //else, leave the default value as orange
  else{
    objColor = "orange";
  }

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View></View>
      <View style={styles.lightmodeBtn}>
        <Text style={[{ alignContent: 'center', fontSize: 25 }]}>
          {' '}
          {switchValue ? '🌞' : '🌙'}
          <Switch
            style={[{ marginTop: 10, marginBottom: 30 }]}
            onValueChange={toggleSwitch}
            value={switchValue}
          />
        </Text>
      </View>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Torus position={[0, 0, 0]} />
      </Canvas>
      <View style={styles.txtInput}>
        <TextInput
        style={{fontSize: 25, color: txtColor }}
        placeholder="type a color here"
        value={newObjColor}
        onChangeText={(newText) =>
        {
          checkPass(newText);
        }}
        />
      </View>
      <View style={styles.axisBtns}>
        <Button 
        title="X Axis" 
        color="#2f4f4f" 
        onPress={(e) => (xRot += 0.1)} />
        <Button
          title="Y Axis"
          styles={styles.btn}
          color="#2f4f4f"
          onPress={(e) => (yRot += 0.1)}
        />
        <Button
          title="Z Axis"
          styles={styles.btn}
          color="#2f4f4f"
          onPress={(e) => (zRot += 0.1)}
        />
        <Button
          title="Reset"
          styles={styles.btn}
          color="#2f4f4f"
          onPress={(e) => {
            (zRot = 0), (yRot = 0), (xRot = 0);
          }}
        />
      </View>
    </View>
  );
};

  /**
   * TorusKnotScreen
   * This is the TorusKnot's object view screen.
   * Purpose: Displays the TorusKnot object to the user, and allows them to rotate the TorusKnot, toggle the background of the TorusKnot, and type the colour of the TorusKnot.
   * Parameter(s): 
   *  <1> none
   *
   * Precondition(s):
   * <1> Light theme mode values must be specified, colour change values must be declared and saved to be applied to the object's view screen.
   * <2> Object must have a creation function for its rendered view.
   * <3> Object color must be specified.
   * 
   * SideSide effect:
   * <1> Light theme mode can be toggled on or off and it will affect the object's background colours.
   * <2> Pressing the X Axis, Y Axis and Z Axis buttons should affect the object's current orientation.
   * <3> Pressing the Reset button should reset the object's current orientation back to origin point (0,0,0). This means the object should face the front of the camera.
   * <4> Typing a valid color in the text input will change the object's current color.
   * 
   * Returns:
   * <View>
   *  <View>
   *   <Text>
   *     <Switch/>
   *   </Text>
   *  </View>
   *  <Canvas>
   *  </Canvas>
   *  <View>
   *    <TextInput/>
   *  </View>
   *  <View>
   *   <Button/>
   *   <Button/>
   *   <Button/>
   *  </View>
   * </View>
   */
const TorusKnotScreen = () => {
  //set the light mode/dark mode switch values
  const [switchValue, setSwitchValue] = useState(false);
  const toggleSwitch = (value) => {
    setSwitchValue(value);
  };

  //if the light mode was toggled on, then switch the background color to white and the text color to black
  if (switchValue) {
    bgColor = 'white';
    txtColor = 'black';
  } else {
    bgColor = 'black';
    txtColor = 'white';
  }

  //set the color state values
  const [newObjColor, setObjColor] = useState();

  //take the value from the TextInput and set the newObjcolor as that value
  const checkPass = (colorText) => {
    setObjColor(colorText);
  };

  //replace the current object color with the newObjcolor
  if (newObjColor)
  {
    objColor = newObjColor;
  }
  //else, leave the default value as orange
  else{
    objColor = "orange";
  }

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View></View>
      <View style={styles.lightmodeBtn}>
        <Text style={[{ alignContent: 'center', fontSize: 25 }]}>
          {' '}
          {switchValue ? '🌞' : '🌙'}
          <Switch
            style={[{ marginTop: 10, marginBottom: 30 }]}
            onValueChange={toggleSwitch}
            value={switchValue}
          />
        </Text>
      </View>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <TorusKnot position={[0, 0, 0]} />
      </Canvas>
      <View style={styles.txtInput}>
        <TextInput
        style={{fontSize: 25, color: txtColor }}
        placeholder="type a color here"
        value={newObjColor}
        onChangeText={(newText) =>
        {
          checkPass(newText);
        }}
        />
      </View>
      <View style={styles.axisBtns}>
        <Button 
        title="X Axis" 
        color="#2f4f4f" 
        onPress={(e) => (xRot += 0.1)} />
        <Button
          title="Y Axis"
          styles={styles.btn}
          color="#2f4f4f"
          onPress={(e) => (yRot += 0.1)}
        />
        <Button
          title="Z Axis"
          styles={styles.btn}
          color="#2f4f4f"
          onPress={(e) => (zRot += 0.1)}
        />
        <Button
          title="Reset"
          styles={styles.btn}
          color="#2f4f4f"
          onPress={(e) => {
            (zRot = 0), (yRot = 0), (xRot = 0);
          }}
        />
      </View>
    </View>
  );
};


//Stylesheet for the views and the view objects of the applications
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  lightmodeBtn: {
    marginLeft: 275,
    marginRight: 15,
    marginTop: 15,
    height: 75,
    alignContent: 'center',
  },

  axisBtns: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },

  txtInput: {
    padding: 50,
  }
});

//export the Navigation function as the main view of the application
export default Nav;
