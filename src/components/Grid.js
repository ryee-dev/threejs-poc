import React, { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "react-three-fiber";

const Grid = ({ position = [0, 0, 0], ...props }) => {
  const { camera, gl, mouse, intersect, viewport } = useThree();

  const [gridPos, setGridPos] = useState({
    x: 0,
    y: 0,
  });

  const ref = useRef();
  // const factor = useMemo(() => 0.5 + Math.random(), []);

  useFrame(() => {
    //  ref.current.position.set(x,y,0);
    // console.log(x + " " + y);
    intersect((e) => {
      e.position.y = gridPos.y;
    });
    // ref.current.rotation(x, y, 2.5)
  });

  const testClick = (e) => {
    setGridPos({
      x: (mouse.x * viewport.width) / 2,
      y: (mouse.y * viewport.height) / 2,
    });
    // console.log(ref.current.position.x, ref.current.position.y);
  };

  useEffect(() => {
    console.log(gridPos);
  }, [gridPos]);

  return (
    <>
      <gridHelper
        ref={ref}
        args={[12, 10, `black`, `#313638`]}
        onClick={testClick}
      />
    </>
  );
};

export default Grid;
