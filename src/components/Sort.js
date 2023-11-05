import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// Element Component
const Element = ({ value, color }) => {
  return <div className="element" style={{ backgroundColor: color }}>{value}</div>;
};

// Array Component
const ArrayComponent = ({ array, i }) => {
  return (
    <div className="array">
      {array.map((value, index) => (
        <Element key={index} value={value} color={index <= i ? "limegreen" : "tomato"} />
      ))}
    </div>
  );
};

// Animation Component
const Animation = () => {
  const [array, setArray] = useState([0,0,1,1,1,2,2,3,3,4]);
  const [i, setI] = useState(0);
  const [j, setJ] = useState(1);
  const [modalContent, setModalContent] = useState("");

  const handleNext = () => {
    if (j < array.length) {
      let newArray = array.slice();
      if (array[i] !== array[j]) {
        setModalContent(`Since nums[${i}] !== nums[${j}], increment i and copy nums[${j}] to nums[${i}]`);
        setI((prevI) => prevI + 1);
        newArray[i + 1] = array[j];
      } else {
        setModalContent(`Since nums[${i}] === nums[${j}], do nothing and just increment j`);
      }
      setJ((prevJ) => prevJ + 1);
      setArray(newArray);
    }
  };

  return (
    <div className="animation">
      <ArrayComponent array={array} i={i} />
      <div className="pointers">
        <div className="pointer-i" style={{ left: `${i * 30}px` }}>i</div>
        <div className="pointer-j" style={{ left: `${j * 30}px` }}>j</div>
      </div>
      <button onClick={handleNext} disabled={j >= array.length}>Next</button>
      {modalContent && <div className="modal">{modalContent}</div>}
    </div>
  );
};

export default Animation


