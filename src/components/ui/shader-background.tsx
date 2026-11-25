import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export function ShaderBackground() {
  return (
    <ShaderGradientCanvas
      pixelDensity={1}
      fov={45}
      style={{ position: "fixed", inset: 0, zIndex: -10, pointerEvents: "none" }}
    >
      <ShaderGradient
        animate="on"
        brightness={3}
        cAzimuthAngle={180}
        cDistance={3.59}
        cPolarAngle={90}
        cameraZoom={1}
        color1="#0000ba"
        color2="#78d1db"
        color3="#000000"
        envPreset="city"
        grain="off"
        lightType="env"
        positionX={-1.4}
        positionY={0}
        positionZ={0}
        reflection={0.4}
        rotationX={0}
        rotationY={10}
        rotationZ={50}
        shader="defaults"
        type="waterPlane"
        uAmplitude={1}
        uDensity={1.3}
        uFrequency={5.5}
        uSpeed={0.25}
        uStrength={4}
        uTime={0}
        wireframe={false}
      />
    </ShaderGradientCanvas>
  );
}
