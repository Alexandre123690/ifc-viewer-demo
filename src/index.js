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

// TODO: Initialize the Renderer (SimpleRenderer) and attach it to the container

// TODO: Initialize the Camera (OrthoPerspectiveCamera) and set the initial position

// TODO: Initialize the components (components.init())

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
