from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_register_client():
    response = client.post("/client/register", json={"name": "Alice"})
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == "Alice"


def test_get_client_success():
    # Register a new client
    client.post("/client/register", json={"name": "Bob"})
    response = client.get("/client/0")
    assert response.status_code == 200
    data = response.json()
    assert "name" in data


def test_get_client_not_found():
    response = client.get("/client/999")
    assert response.status_code == 404
    assert response.json()["detail"] == "Client not found"
