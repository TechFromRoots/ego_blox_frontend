import React, { useState } from "react";

const Button = ({ styles, text, onClick }) => (
  <button
    type="button"
    className={`py-6 px-20 font-poppins font-medium text-[18px] text-primary rounded-[10px] outline-none ${styles}`}
    onClick={onClick}
  >
    {text}
  </button>
);

// Usage
const ButtonGroup = () => {
  const [buttonText, setButtonText] = useState("Get USSD");
  const [buttonColor, setButtonColor] = useState("bg-orange-500");

  const handleCopyToClipboard = () => {
    const code = "*123#";

    navigator.clipboard.writeText(code)
      .then(() => {
        setButtonText("Copied!");
        setButtonColor("bg-green-500");

        setTimeout(() => {
          setButtonText("Get USSD");
          setButtonColor("bg-orange-500");
        }, 2000);
      })
      .catch(err => {
        console.error("Failed to copy code:", err);
      });
  };

  return (
    <div className="mt-10 flex space-x-28">
      <Button
        styles="bg-green-500"
        text="Get Bot"
        onClick={() => window.location.href = "https://t.me/egoblox_bot"}
      />
      <Button
        styles={buttonColor}
        text={buttonText}
        onClick={handleCopyToClipboard}
      />
    </div>
  );
};

export default ButtonGroup;