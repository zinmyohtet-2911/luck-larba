import {useRef, useState} from "react";

export default function Exchange() {
    const mmkRef = useRef(null);
    const cnyRef = useRef(null);
    const thbRef = useRef(null);
    const usdRef = useRef(null);

    const [mmk, setMMK] = useState();
    const [cny, setCNY] = useState();
    const [thb, setTHB] = useState();
    const [usd, setUSD] = useState();

    function handleChangeMMK(e){
      const value = e.target.value;
      setMMK(value)
        setCNY(value / 753);
        setTHB(value / 148.15);
        setUSD(value / 5060);
    }


    function handleChangeTHB(e){
     const value = e.target.value;
      setTHB(value)
        setCNY(value * 0.2);
        setMMK(value * 148.15);
        setUSD(value * 0.029);
    }

     function handleChangeCNY(e){
     const value = e.target.value;
      setCNY(value)
        setTHB(value * 5.12);
        setMMK(value * 753);
        setUSD(value * 0.15);
    }

    function handleChangeUSD(e){
      const value = e.target.value;
      setUSD(value)
      setMMK(value * 5060);
      setTHB(value * 34.12);
      setCNY(value * 6.66);
    }
  return (
    <div className="exchange-container">
      {/* Myanmar Currency */}
      <div className="exchange-field">
        <label className="exchange-label">Myanmar Kyat (MMK)</label>
        <input
          type="number"
          className="exchange-input"
          placeholder="Enter amount"
          ref={mmkRef}
          value={mmk}
          onChange={handleChangeMMK}
        />
      </div>

      {/* Thai Baht Currency */}
      <div className="exchange-field">
        <label className="exchange-label">Thai Baht (THB)</label>
        <input
          type="number"
          className="exchange-input"
          placeholder="Enter amount"
          ref={thbRef}
          value={thb}
          onChange={handleChangeTHB}
        />
      </div>

      {/* Chinese Yuan Currency */}
      <div className="exchange-field">
        <label className="exchange-label">Chinese Yuan (CNY)</label>
        <input
          type="number"
          className="exchange-input"
          placeholder="Enter amount"
          ref={cnyRef}
          value={cny}
          onChange={handleChangeCNY}
        />
      </div>

      {/* USD Currency */}
      <div className="exchange-field">
        <label className="exchange-label">US Dollar (USD)</label>
        <input
          type="number"
          className="exchange-input"
          placeholder="Enter amount"
          ref={usdRef}
          value={usd}
          onChange={handleChangeUSD}
        />
      </div>
    </div>
  );
}