import { useRef, useState } from "react";
import QRCode, { CanvasQRCodeProps } from "qrcode.react";

import styles from "./styles/App.module.scss";

function App() {
  const linkRef = useRef<any>();

  const [code, setCode] = useState<string>("");

  const handleDownloadQRcode = () => {
    const canvas = document.querySelector(
      `.${styles.QrCodeWrapper} > canvas`
    ) as HTMLCanvasElement;

    const link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = "QRCODE.png";
    link.click();
  };

  return (
    <div className={styles.container}>
      <h2>QRCode Generator</h2>

      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Insira o texto aqui..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>

      {code.length > 0 && (
        <div className={styles.codeContainer}>
          <div className={styles.QrCodeWrapper}>
            <QRCode value={code} renderAs={"canvas"} size={400} />
          </div>
          <button
            type="button"
            className={styles.btnDownloadQRcode}
            onClick={handleDownloadQRcode}
          >
            Baixar QRCODE
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
