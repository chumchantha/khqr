"use client";

import QRCodeGenerator from "@/Components/QRCodeGenerator";
import { KHQR, CURRENCY, COUNTRY, TAG } from "ts-khqr";

export default function Home() {
  //Generate KHQR code
  const result = KHQR.generate({
    tag: TAG.INDIVIDUAL, // TAG.MERCHANT
    accountID: "chumchantha@aclb",
    merchantName: "Chum Chantha",
  });

  console.log(result);

  //Verify KHQR code

  const khqrString = result.data.qr;

  const isKHQR = KHQR.verify(khqrString).isValid;

  console.log(isKHQR);

  //Parse KHQR code

  const ParseResult = KHQR.parse(khqrString);

  console.log(ParseResult);

  return (
    <main className="flex flex-col gap-4 py-14 items-center w-full justify-center">
      <h1 className="font-bold text-5xl mb-4">KHQR Generator</h1>
      <QRCodeGenerator text={result.data.qr} />
    </main>
  );
}
