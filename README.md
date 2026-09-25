# squirrelspotter

SquirrelSpotter is a full-stack app for sharing squirrel sightings from the community.

## Requirements

- Python 3.12+
- [uv](https://docs.astral.sh/uv/)
- A local browser

## Run the server

Open a terminal in the repo root and run:

```sh
cd server
uv sync
cp .env.example .env
uv run fastapi dev app/main.py
```

This starts the backend on:

- http://localhost:8080
- API docs: http://localhost:8080/docs

## Run the client

Open a second terminal and run:

```sh
cd client
python3 -m http.server 3000
```

Then open:

- http://localhost:3000

The frontend is a static site, so it does not need a build step. It calls the backend at localhost:8080 by default, which is why the server must be running before the client is used.

## Local development workflow

Use two terminals at the same time:

1. Terminal 1: run the backend from `server/`
2. Terminal 2: serve the frontend from `client/`

Once both are running, the app should work locally as a full-stack setup on your machine.
