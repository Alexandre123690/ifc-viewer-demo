import * as OBC from "@thatopen/components";
import * as BUI from "@thatopen/ui";
import * as THREE from "three";
import Stats from "stats.js";
import * as BUI from "@thatopen/ui";
// You have to import * as OBC from "@thatopen/components"
import * as OBC from "../..";

// --------------------------------------------------------------------------
// 1. THE WORLD: Setting up the 3D Environment
// --------------------------------------------------------------------------

// TODO: Initialize the Components instance
  const container = document.getElementById("container");
  const components = new OBC.Components();
// TODO: Get the Worlds component and create a new world
// Tip: Use `const world = worlds.create();` to create a new world
const worlds = components.get(OBC.Worlds);
const world = worlds.create(
  OBC.SimpleScene,
  OBC.SimpleCamera,
  OBC.SimpleRenderer
);
// TODO: Initialize the Scene (SimpleScene), setup it, and clear the background
world.scene = new OBC.SimpleScene(components);
world.renderer = new OBC.SimpleRenderer(components, container);
world.camera = new OBC.SimpleCamera(components);

components.init();

world.scene.setup();

world.scene.three.background = null;

const workerUrl =
  "https://thatopen.github.io/engine_fragment/resources/worker.mjs";
const fragments = components.get(OBC.FragmentsManager);
fragments.init(workerUrl);

world.camera.controls.addEventListener("rest", () =>
  fragments.core.update(true),
);

fragments.list.onItemSet.add(({ value: model }) => {
  model.useCamera(world.camera.three);
  world.scene.three.add(model.object);
  fragments.core.update(true);
});

const fragPaths = ["https://thatopen.github.io/engine_components/resources/frags/school_arq.frag"];
await Promise.all(
  fragPaths.map(async (path) => {
    const modelId = path.split("/").pop()?.split(".").shift();
    if (!modelId) return null;
    const file = await fetch(path);
    const buffer = await file.arrayBuffer();
    return fragments.core.load(buffer, { modelId });
  }),
);
// TODO: Initialize the Renderer (SimpleRenderer) and attach it to the container

// TODO: Initialize the Camera (OrthoPerspectiveCamera) and set the initial position
await world.camera.controls.setLookAt(68, 23, -8.5, 21.5, -5.5, 23);
await fragments.core.update(true);
// TODO: Initialize the components (components.init())
BUI.Manager.init();

const panel = BUI.Component.create<BUI.PanelSection>(() => {
  return BUI.html`
    <bim-panel label="Worlds Tutorial" class="options-menu">
      <bim-panel-section label="Controls">
      
        <bim-color-input 
          label="Background Color" color="#202932" 
          @input="${({ target }: { target: BUI.ColorInput }) => {
            world.scene.config.backgroundColor = new THREE.Color(target.color);
          }}">
        </bim-color-input>
        
        <bim-number-input 
          slider step="0.1" label="Directional lights intensity" value="1.5" min="0.1" max="10"
          @change="${({ target }: { target: BUI.NumberInput }) => {
            world.scene.config.directionalLight.intensity = target.value;
          }}">
        </bim-number-input>
        
        <bim-number-input 
          slider step="0.1" label="Ambient light intensity" value="1" min="0.1" max="5"
          @change="${({ target }: { target: BUI.NumberInput }) => {
            world.scene.config.ambientLight.intensity = target.value;
          }}">
        </bim-number-input>
        
      </bim-panel-section>
    </bim-panel>
    `;
});

document.body.append(panel);


// --------------------------------------------------------------------------
// 2. THE TOOLS: Adding capabilities (Grid, IFC Loading, Fragments)
// --------------------------------------------------------------------------

// TODO: Initialize the Grids component and create a grid in the world

// TODO: Initialize the IfcLoader component
// Tip: Check this link https://docs.thatopen.com/Tutorials/Components/Core/IfcLoader on how to setup the IfcLoader

// TODO: Initialize the FragmentsManager component
// Tip #1: Check this link https://docs.thatopen.com/Tutorials/Components/Core/FragmentsManager on how to setup the FragmentsManager
// Tip #2: You need to provide the path to the worker script (./assets/workers/worker.mjs)

// TODO: Connect Fragments to the World (update on camera rest, add loaded models to scene)


// --------------------------------------------------------------------------
// 3. THE LOGIC: Application functions
// --------------------------------------------------------------------------

async function loadIfc(path) {
  // TODO: Fetch the file from the path
  // TODO: Get the array buffer from the file
  // TODO: Create a Uint8Array from the buffer
  // TODO: Load the buffer using the IfcLoader
}

async function downloadFragments() {
  // TODO: Get the first model from fragments.list
  // TODO: Get the buffer from the model
  // TODO: Create a File object from the buffer
  // TODO: Create a download link and click it to download the file
}

// --------------------------------------------------------------------------
// 4. THE UI: User Interface (BUI)
// --------------------------------------------------------------------------

// TODO: Initialize the BUI Manager

// TODO: Create the UI panel using BUI.Component.create
// Tip: The panel should contain buttons to load the IFC and download the fragments

// TODO: Append the panel to the document body
// TODO: Update the panel when a fragment is loaded
