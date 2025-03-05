import React from "react";
import "../assets/Styles/crypto.css"
import BTC from "../assets/bitcoin.svg";
import ETH from "../assets/Eth.svg";
import DOGE from "../assets/Doge.svg";
import BNB from "../assets/Coin.svg";
function CryptoFloatingIcons() {
  return (
    <>
    <img src={BTC} alt="" className="crypto-icon BTC" />
    <img src={ETH} alt="" className="crypto-icon ETH" />
    <img src={DOGE} alt="" className="crypto-icon DOGE" />
    <img src={BNB} alt="" className="crypto-icon BNB" />
    </>
  );
}

export default CryptoFloatingIcons;
