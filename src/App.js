import "./App.css";
import CustomSvg from "./CustomSvg";
import { createWallet } from "./eth";

function App() {
  const wallet = createWallet();

  return (
    <div className="App">
      <header className="App-header">
        <CustomSvg address={wallet.address} />
        <p>Address</p>
        <p>{wallet.address}</p>
        <p>Private Key</p>
        <p>{wallet.privateKey}</p>
      </header>
    </div>
  );
}

export default App;
