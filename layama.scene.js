// Created with Motiva Layama v2.2 2201 LITE https://www.motivacg.com/layama
// Rendered with Layama for Unreal 5.3.2

function getLayamaCameras()
{
   var layamaCameras = [];
   layamaCameras.push({n: "Layama0002", a: "CineCameraActor1", p: {x:259.804, y:605.69, z:276.977}, l: {x:260.804, y:605.722, z:276.949},f: [3985.28,0,1,0],c: [1,1,1,1]});
   layamaCameras.push({n: "Layama0009", a: "CineCameraActor", p: {x:1102.76, y:555.515, z:291.733}, l: {x:1103.76, y:555.515, z:291.733}, f: [3935.11,0,1,0], c: [1,1,1,1]});
   layamaCameras.push({n: "Layama0016", a: "CineCameraActor2", p: {x:1840.72, y:555.515, z:189.02}, l: {x:1841.72, y:555.515, z:189.02}, f: [3935.11,0,1,0], c: [1,1,1,1]});
   layamaCameras.push({n: "Layama0023", a: "CineCameraActor3", p: {x:2877.37, y:555.515, z:498.996}, l: {x:2878.37, y:555.515, z:498.996}, f: [3935.11,0,1,0], c: [1,1,1,1]});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = [];
   layamaResolutions.push("2048");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

