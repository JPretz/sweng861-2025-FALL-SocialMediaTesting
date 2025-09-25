from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_login_success():
    response = client.post("/auth/login", json={"username": "user", "password": "pass"})
    assert response.status_code == 200
    assert response.json()["message"] == "Login successful"


def test_login_failure():
    response = client.post("/auth/login", json={"username": "wrong", "password": "bad"})
    assert response.status_code == 401
    assert response.json()["detail"] == "Invalid credentials"


def test_logout():
    response = client.post("/auth/logout")
    assert response.status_code == 200
    assert response.json()["message"] == "Logged out"
