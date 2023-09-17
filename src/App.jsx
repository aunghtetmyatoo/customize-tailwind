import "./style.css";

function App() {
  return (
    <>
      <div className="flex justify-center mb-5">
        <div className="card">
          <div className="card-body">
            <div className="typography">
              Because it's about motivating the doers. Because I'm here to
              follow my dreams and inspire others.
            </div>
          </div>
          <div className="card-footer">
            <button class="normal-button mr-5">BUTTON</button>
            <button class="gradient-button">BUTTON</button>
          </div>
        </div>
      </div>

      <button class="gradient-button mr-5">Button</button>
      <button class="normal-button mr-5">Button</button>
    </>
  );
}

export default App;
