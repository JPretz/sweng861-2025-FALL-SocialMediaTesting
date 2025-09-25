import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import Card from './components/Card';

function App() {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
      {/* Header */}
      <Header 
        title="My Homework App" 
        subtitle="Testing Components in React" 
      />

      {/* Main content */}
      <main>
        <section>
          <h2>Interactive Section</h2>
          <Button label="Click Me" onClick={handleButtonClick} />
        </section>

        <section>
          <h2>Cards Section</h2>
          <Card title="Card 1" content="This is the first card." />
          <Card title="Card 2" content="This is the second card." />
          <Card title="Card 3" content="This is the third card." />
        </section>
      </main>

      {/* Footer */}
      <Footer text="© 2025 My Homework App" />
    </div>
  );
}

export default App;
