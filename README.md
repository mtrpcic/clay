# Clay
Clay is an experiment with bringing [MUD](https://en.wikipedia.org/wiki/MUD) games into the modern gaming scene. MUD's were largely text-based and took place directly on a terminal (usually via Telnet), with limited (or no) graphical components. Clay aims to keep that simplistic experience, while also allowing simple augmentations with a richer UI for the player, images to set the tone for gameplay, and other modern browser perks.

# Design Philosophy
Clay is being designed with a "move fast, break stuff" mentality. Many of my projects end up being plagued with planning for endless future iterations that never happen (largely due to the never ending planning). This project is just me throwing code at a problem until it works, and refactoring it when I need to.

The code won't always be pretty.

# Running The Code
Download this repository, `npm install`, and then `npm run server`. You can connect by going to the `client.html` file from anywhere.

This project uses the experimental ES2015 `import` syntax available in Node 8.5.0, so all files use the `mjs` extension to identify themselves as modules. See the experimental flag in use in `package.json`.