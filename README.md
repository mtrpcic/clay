# Clay
Clay is an experiment with bringing [MUD](https://en.wikipedia.org/wiki/MUD) games into the modern gaming scene. MUD's were largely text-based and took place directly on a terminal (usually via Telnet), with limited (or no) graphical components. Clay aims to keep that simplistic experience, while also allowing simple augmentations with a richer UI for the player, images to set the tone for gameplay, and other modern browser perks.

# Design Philosophy
Clay is being designed with a "move fast, break stuff" mentality. Many of my projects end up being plagued with planning for endless future iterations that never happen (largely due to the never ending planning). This project is just me throwing code at a problem until it works, and refactoring it when I need to.

I'm not writing tests for features until after they're built and refined, as I'm driving blind on this one. Things I'm not doing, but will evenetually do, might include:

* Getting the application easily configurable (via ENV, or config file). Right now, I'm harcoding paths and ports because it lets me move forward without needing to think about the little things.
* Database management, migrations, and seeding. Skipping this for now so I can get right into the fun parts of the project without needing to prepare for other team members or users that don't exist.
* Tests. Everything will get tests, don't worry. I'm just not sure what _everything_ is yet, and don't want to spend 40% of my time writing tests, only to rewrite 30% of them in their entirety as things change.
* Documentation is important, but until I get stuck in the codebase because I can't remember how things work, I'm not adding too much documentation.

The code won't always be pretty.


# Running The Code
Download this repository, `npm install`, and then `npm run start`. You can connect by going to `localhost:3000`.

This project uses the experimental ES2015 `import` syntax available in Node 8.5.0, so all files use the `mjs` extension to identify themselves as modules. See the experimental flag in use in `package.json`.