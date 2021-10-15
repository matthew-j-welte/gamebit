# Phase 1

### Overall End Goal

- Be able to start the frontend
- Be able to start any relevant APIs
- Navigate to the gamepad click a single game which will be written in rust and compiled through web assembly and have it do some static animation

### Stories needed to accomplish above

**Frontend**

- Refamiliarize yourself with react
- Create a react app with sass enabled
- Make the gamepad page
- Come up with a way to inject the WASMs into the frontend (will probably just be an API call?)
  - Important to note you want to avoid loading the WASM until you're actually playing the game, otherwise it'll prolly be wayyyy too slow

**Backend/APIs**

- Plan out the backend models (needed for phase 1)
- Plan out the Microservices/Services (needed for phase 1)
- Write any needed code to pull the WASM file to the frontend

**Infrastructure**

- Fork sentrain-shell into gamebit for now (will update to its own repo eventually)
- Leverage the K8s work as well

**Games**

- Learn rust
- Take rust -> WASM tutorial
- Take rust + gaming (openGL) tutorial
- Write a basic rust script and ensure it can be compiled into WASM and displayed + interfaced with on the frontend (through javascript)

--- Done ---
