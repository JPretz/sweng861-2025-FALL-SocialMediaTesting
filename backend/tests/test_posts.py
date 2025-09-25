from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_create_post():
    response = client.post("/posts/", json={"title": "Test Post", "content": "Hello"})
    assert response.status_code == 200
    data = response.json()
    assert data["title"] == "Test Post"
    assert data["content"] == "Hello"


def test_get_posts():
    response = client.get("/posts/")
    assert response.status_code == 200
    assert isinstance(response.json(), list)


def test_get_post_success():
    # Create a new post first
    client.post("/posts/", json={"title": "New Post", "content": "Content"})
    response = client.get("/posts/0")
    assert response.status_code == 200
    data = response.json()
    assert "title" in data
    assert "content" in data


def test_get_post_not_found():
    response = client.get("/posts/999")
    assert response.status_code == 404
    assert response.json()["detail"] == "Post not found"
