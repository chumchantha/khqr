"use client";

import { useState, useEffect } from "react";
import QRCode from "qrcode";

const QRCodeGenerator = ({ text }) => {
  const [qrCodeUrl, setQRCodeUrl] = useState("");

  useEffect(() => {
    if (text) {
      QRCode.toDataURL(text)
        .then((url) => {
          setQRCodeUrl(url);
        })
        .catch((err) => {
          console.error("Error generating QR code:", err);
        });
    }
  }, [text]);

  return (
    <div className="flex justify-center items-center w-full h-full">
      {qrCodeUrl && (
        <img src={qrCodeUrl} alt="QR Code" className="w-[50%] h-[50%]" />
      )}
    </div>
  );
};

export default QRCodeGenerator;
