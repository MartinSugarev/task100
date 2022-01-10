import "./App.css";

function App() {
  return (
    <div className="App">
      <div className={{display: "flex",justifyContent: "space-between",margin: "1rem",paddingBottom: "1rem", borderBottom: "1px solid #ccc"}}>
        <h3 className={{margin: "0 0 0.25rem 0"}}>Sushi</h3>
        <div className={{fontStyle: "italic"}}>I prefer steak than sushi.</div>
        <div className={{marginTop: "0.25rem", fontWeight: "bold", color: "#ad5502", fontSize: "1.25rem"}}>$9.99</div>
      </div>
    </div>
  );
}

export default App;
