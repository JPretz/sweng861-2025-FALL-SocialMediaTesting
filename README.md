# Social Media Testing Project

This project demonstrates **backend API development with FastAPI** and **frontend UI with React**, along with comprehensive testing for both sides.  
The goal is to achieve **100% code coverage** (Bonus Option A) through well-structured test cases.

---------------------------------------------------------------------------------

## 📂 Project Structure

SocialMediaTesting/
│
├── backend/ # FastAPI backend
│ ├── app/
│ │ └── main.py # FastAPI app with endpoints
│ └── tests/ # Backend test cases (pytest)
│
├── frontend/ # React frontend
│ ├── src/
│ │ ├── App.js # Main React app
│ │ ├── components/ # UI components (Header, Footer, Button, Card)
│ │ └── tests/ # Frontend Jest tests
│
└── README.md








-------------------------------------------------------------------------------

## ⚙️ Setup Instructions

### Backend (FastAPI + Pytest)
1. Navigate to backend folder:
   ```bash
   cd backend

2. Create and activate a virtual environment:
   python -m venv venv
   venv\Scripts\activate
3. Install dependencies:
   pip install -r requirements.txt

4. Run the server:
   uvicorn app.main:app --reload

5. Run backend tests:
   pytest --cov=app --cov-report=term-missing

    Access API docs at: http://127.0.0.1:8000/docs
------------------------------------------------------------------------------------

Frontend (React + Jest)

1. Navigate to frontend folder:
   cd frontend

2. Install dependencies:
   npm install

3. Start frontend app:
   npm start

4. Run frontend tests:
   npm test -- --coverage
---------------------------------------------------------------------------------------

🚀 Features: 
Backend API:

Auth: /auth/login, /auth/logout

. Posts: Create, list, retrieve posts
. Client: Register client, retrieve client info
. Fully tested with Pytest

Frontend UI:

. Components: Header, Footer, Button, Card
. App.js integrates all components
. Fully tested with Jest

----------------------------------------------------------------------------------------

🧪 Code Walkthrough:
Backend (FastAPI):

app/main.py:
@app.post("/auth/login")
def login(data: LoginData):
    if data.username == "user" and data.password == "pass":
        return {"message": "Login successful"}
    raise HTTPException(status_code=401, detail="Invalid credentials")

. Handles login with simple username/password check.
. Tested for both success and failure cases.


app/tests/test_auth.py: 
def test_login_success():
    response = client.post("/auth/login", json={"username": "user", "password": "pass"})
    assert response.status_code == 200
    assert response.json()["message"] == "Login successful"

. Tests the happy path.
. Additional tests ensure error handling for bad credentials.
-------------------------------------------------------------------------------------------

Frontend (React):

   src/components/Button.js
   function Button({ label = "Click Me", onClick }) {
  return (
    <button className="App-button" onClick={onClick}>
      {label}
    </button>
  );
}


src/components/Button.test.js
test('fires onClick event', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick} />);
  fireEvent.click(screen.getByText(/Click Me/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

. Confirms button renders with default label.
. Confirms user interaction works as expected.
-----------------------------------------------------------------------------------------------

📊 Code Coverage:
Backend (Pytest)
app/main.py      100%

Frontend (Jest)
All files       100%

✅ Achieved 100% coverage for both backend and frontend.
