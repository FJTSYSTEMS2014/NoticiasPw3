import React, { useState } from 'react';
import QRCode from 'qrcode.react';
//https://www.cluemediator.com/generate-and-download-a-qr-code-image-in-react
function AppQR() {

  const [inputText, setInputText] = useState('');
  const [qrCodeText, setQRCodeText] = useState('');

  // generate QR code
  const generateQRCode = () => {
    setQRCodeText(inputText);
  }

  // download QR code
  const downloadQRCode = () => {
    const qrCodeURL = document.getElementById('qrCodeEl')
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log(qrCodeURL)
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "QR_Code.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  }

  return (
    <div className="text-center">
      <h3>Generar QR </h3>
      <div className="flex p-4">
        
        <input
          type="text"
          className="flex p-2"
          placeholder="Ingresar Dato a Codificar"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
        /> <hr/>
        <input
          type="button"
          value="Generar"
          onClick={generateQRCode}
          className=" flex p-2 btn btn-outline-secondary my-0 my-sm-0"
        />
      </div>
      <div className="text-center">
      <QRCode
        id="qrCodeEl"
        size={150}
        value={qrCodeText}
     
      /> 
      <br/></div>
      <input
        type="button"
        className="p-4 btn btn-outline-secondary my-0 my-sm-0"
        value="Descargar"
        onClick={downloadQRCode}
      />
    </div>
  );
}

export default AppQR;