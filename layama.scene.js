// Created with Motiva Layama v2.2 2201 LITE https://www.motivacg.com/layama
// Rendered with Layama for Unreal 5.3.2

function getLayamaCameras()
{
   var layamaCameras = [];
   layamaCameras.push({n: "Layama0002", a: "CineCameraActor1", p: {x:5937.01, y:185.757, z:927.348}, l: {x:5937.02, y:185.681, z:926.351},f: [5784.1,0,1,0],c: [1,1,1,1]});
   layamaCameras.push({n: "Layama0009", a: "CineCameraActor", p: {x:2105.46, y:172.539, z:804.724}, l: {x:2106.46, y:172.539, z:804.724}, f: [5770.89,0,1,0], c: [1,1,1,1]});
   layamaCameras.push({n: "Layama0016", a: "CineCameraActor2", p: {x:2105.46, y:172.539, z:550.889}, l: {x:2106.46, y:172.539, z:550.889}, f: [5770.89,0,1,0], c: [1,1,1,1]});
   layamaCameras.push({n: "Layama0023", a: "CineCameraActor3", p: {x:2342.02, y:172.539, z:550.889}, l: {x:2343.02, y:172.539, z:550.889}, f: [5770.89,0,1,0], c: [1,1,1,1]});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = [];
   layamaResolutions.push("4096");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

