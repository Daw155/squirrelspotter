"""Provide the command-line entry point for starting the development server."""

import uvicorn


def main() -> None:
    uvicorn.run("app.main:app", host="127.0.0.1", port=8080, reload=True)