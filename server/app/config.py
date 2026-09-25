import os
from pathlib import Path
from dotenv import load_dotenv

# Load server/.env no matter which directory the app is started from.
# Real environment variables (e.g. set by a hosting provider) take precedence.
load_dotenv(Path(__file__).resolve().parent.parent / ".env")

APP_NAME = os.getenv("APP_NAME", "SquirrelSpotter API")
CORS_ORIGINS = [
    origin.strip()
    for origin in os.getenv("CORS_ORIGINS", "http://localhost:5173").split(",")
    if origin.strip()
]
