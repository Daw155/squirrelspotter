"""Expose the backend health-check endpoint."""

from fastapi import APIRouter

router = APIRouter(prefix="/api", tags=["health"])

@router.get(
    "/health",
    summary="Check API health",
    description="Returns the basic status of the backend service.",
    response_description="Service health status",
)
def get_health() -> dict[str, str]:
    """Return a simple health-check response for the backend."""
    return {"status": "ok"}
