# tests/test_endpoints.py
import pytest
from fastapi.testclient import TestClient
from app.main import app, posts, clients

client = TestClient(app)

# Fixture to clear state before each test
@pytest.fixture(autouse=True)
def clear_data():
    posts.clear()
    clients.clear()

# ------------------------
# Posts Endpoints
# ------------------------

def test_create_post():
    response = client.post("/posts/", json={"title": "Post 1", "content": "Content 1"})
    assert response.status_code == 200
    assert response.json()["title"] == "Post 1"
    assert response.json()["content"] == "Content 1"

def test_get_all_posts():
    # Create two posts
    client.post("/posts/", json={"title": "Post 1", "content": "Content 1"})
    client.post("/posts/", json={"title": "Post 2", "content": "Content 2"})
    response = client.get("/posts/")
    assert response.status_code == 200
    assert len(response.json()) == 2

def test_get_post_success():
    client.post("/posts/", json={"title": "Post 1", "content": "Content 1"})
    response = client.get("/posts/0")
    assert response.status_code == 200
    assert response.json()["title"] == "Post 1"

def test_get_post_not_found():
    response = client.get("/posts/999")
    assert response.status_code == 404
    assert response.json()["detail"] == "Post not found"

# ------------------------
# Client Endpoints
# ------------------------

def test_register_client():
    response = client.post("/client/register", json={"name": "Client 1"})
    assert response.status_code == 200
    assert response.json()["name"] == "Client 1"

def test_get_client_success():
    client.post("/client/register", json={"name": "Client 1"})
    response = client.get("/client/0")
    assert response.status_code == 200
    assert response.json()["name"] == "Client 1"

def test_get_client_not_found():
    response = client.get("/client/999")
    assert response.status_code == 404
    assert response.json()["detail"] == "Client not found"
