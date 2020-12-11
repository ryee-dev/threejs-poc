import React from "react";
import {
  OrbitControls,
  MapControls,
  OrthographicCamera,
  PerspectiveCamera,
} from "drei";
import * as THREE from "three";

const CameraView = (props) => {
  const { isOrthographic } = props;

  return (
    <>
      {isOrthographic ? (
        <MapControls
          enableRotate={false}
          dampingFactor={0.6}
          mouseButtons={{
            LEFT: THREE.MOUSE.ROTATE,
            MIDDLE: THREE.MOUSE.PAN,
            RIGHT: THREE.MOUSE.PAN,
          }}
        />
      ) : (
        <OrbitControls
          maxDistance={100}
          minDistance={10}
          enablePan
          dampingFactor={0.6}
          maxPolarAngle={Math.PI / 2.1}
          mouseButtons={{
            LEFT: THREE.MOUSE.ROTATE,
            MIDDLE: THREE.MOUSE.PAN,
            RIGHT: THREE.MOUSE.PAN,
          }}
        />
      )}

      <OrthographicCamera
        makeDefault={isOrthographic}
        position={[0, 0, 20]}
        zoom={10}
      />
      <PerspectiveCamera
        makeDefault={!isOrthographic}
        position={[-29, -20, 20]}
      />
    </>
  );
};

export default CameraView;
