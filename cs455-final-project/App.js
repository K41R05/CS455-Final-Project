import React, { useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Switch,
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


const Drawer = createDrawerNavigator();

var bgColor = 'black';
var txtColor = 'white';

var xRot = 0;
var yRot = 0;
var zRot = 0;

function Box(props) {
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
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={'orange'} />
    </mesh>
  );
}

const Nav = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="" component={App} />
        <Drawer.Screen name="Load an Object" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const SettingsScreen = () => {
  return (
    <View>
      <Text>Hello!</Text>
    </View>
  );
};

const App: React.FC = () => {
  const [switchValue, setSwitchValue] = useState(false);
  const toggleSwitch = (value) => {
    setSwitchValue(value);
  };

  if (switchValue) {
    bgColor = 'white';
    txtColor = 'black';
  } else {
    bgColor = 'black';
    txtColor = 'white;';
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
        <Box position={[0, 0, 0]} />
      </Canvas>
      <View style={styles.axisBtns}>
        <Button title="X Axis" color="#2f4f4f" onPress={(e) => (xRot += 0.1)} />
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
});

export default Nav;
//Reference: @wcandillon/728f26
//https://docs.expo.dev/bare/using-libraries/

//https://blog.logrocket.com/react-three-fiber-3d-rendering-in-the-browser/

//https://docs.pmnd.rs/react-three-fiber/getting-started/introduction

//or orbit control
