#!/bin/sh
# Serves the static client locally on port 3000.
cd "$(dirname "$0")"
exec python3 -m http.server 3000