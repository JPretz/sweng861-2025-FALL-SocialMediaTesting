from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

# Root endpoint
@app.get("/")
def root():
    return {"message": "Hello, Backend is running!"}

# Auth
class LoginData(BaseModel):
    username: str
    password: str

@app.post("/auth/login")
def login(data: LoginData):
    if data.username == "user" and data.password == "pass":
        return {"message": "Login successful"}
    raise HTTPException(status_code=401, detail="Invalid credentials")

@app.post("/auth/logout")
def logout():
    return {"message": "Logged out"}

# Posts
class PostData(BaseModel):
    title: str
    content: str

posts = []

@app.post("/posts/")
def create_post(post: PostData):
    posts.append(post.model_dump())   # ✅ replaced dict() with model_dump()
    return post

@app.get("/posts/")
def get_posts():
    return posts

@app.get("/posts/{post_id}")
def get_post(post_id: int):
    if 0 <= post_id < len(posts):
        return posts[post_id]
    raise HTTPException(status_code=404, detail="Post not found")

# Client
class ClientData(BaseModel):
    name: str

clients = []

@app.post("/client/register")
def register_client(client: ClientData):
    clients.append(client.model_dump())   # ✅ replaced dict() with model_dump()
    return client

@app.get("/client/{client_id}")
def get_client(client_id: int):
    if 0 <= client_id < len(clients):
        return clients[client_id]
    raise HTTPException(status_code=404, detail="Client not found")
