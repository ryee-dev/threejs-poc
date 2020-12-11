import React, { useRef, useState } from "react";
// import { useFrame } from "react-three-fiber";

const Box = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead


  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [3, 3, 3] : [1, 1, 1]}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      <gridHelper args={[10, 10, `black`, `gray`]} />
    </mesh>
  );
};

export default Box;
