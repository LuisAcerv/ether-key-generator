import { useState } from "react";
import html2canvas from 'html2canvas'
import "./App.css";

import CustomSvg from "./CustomSvg";
import { createWallet } from "./eth";

function App() {
  const [state, setstate] = useState({
    address: "",
    privateKey: "",
  });

  function handleChange(e) {
    setstate((prev) => ({ ...prev, address: e.target.value, privateKey: "" }));
  }

  function generateAddress() {
    const wallet = createWallet();
    setstate((prev) => ({
      ...prev,
      address: wallet.address,
      privateKey: wallet.privateKey,
    }));
  }

  async function saveAvatar() {
    html2canvas(document.getElementById("avatar")).then(function (canvas) {
      const a = document.createElement("a"); //Create <a>
      a.href = canvas.toDataURL(); //Image Base64 Goes here
      a.download = state.address + ".png"; //File name Here
      a.click(); //Downloaded file

    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Generate a svg avatar from your Ethereum address</h3>
        <CustomSvg address={state.address} />
        <br />
        <br />
        <p>Enter your ehtereum address or generate a new one</p>
        <input value={state.address} type="text" onChange={handleChange} />
        <input value={state.privateKey} type="text" readOnly />
        <br />
        <br />
        <button onClick={generateAddress}>Generate address</button>
      </header>
    </div>
  );
}

export default App;
