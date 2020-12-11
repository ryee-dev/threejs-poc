import React from "react";
import "./App.css";
import { Canvas } from "react-three-fiber";
import Grid from "./components/Grid";
import CameraView from "./components/CameraView";

function App() {
  return (
    <Canvas
      pixelRatio={window.devicePixelRatio}
      camera={{
        position: [10, 10, 10],
      }}
      orthographic={true}
      style={{ height: "100vh", boxSizing: "border-box", overflow: "auto" }}
    >
      <Grid />
      <CameraView />
    </Canvas>
  );
}

export default App;
