import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import styled from "styled-components";
import { animationCss } from "../utils/animationCss";

const Square = () => {
  const ref = useRef(null);
  const animationFn = useRef(() => {});

  useEffect(() => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, 1, 1, 100);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(200, 200);

    ref.current.appendChild(renderer.domElement);
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 2;
    renderer.render(scene, camera);

    animationFn.current = () => {
      requestAnimationFrame(animationFn.current);
      cube.rotation.x += 0.05;
      cube.rotation.y += 0.05;
      renderer.render(scene, camera);
    };
  }, []);

  return (
    <div
      onClick={() => {
        animationFn.current();
      }}
      ref={ref}
    >
      Holaa
    </div>
  );
};

const AnimatedSquare = styled(Square)`
  ${animationCss}
`;

export { Square, AnimatedSquare };
