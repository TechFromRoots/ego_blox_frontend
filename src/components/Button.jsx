import React, { useState } from "react";

const Button = ({ styles, text, onClick }) => (
  <button
    type="button"
    className={`py-6 px-20 justify-between font-poppins font-bold text-[16px] text-primary rounded-[10px] outline-none ${styles}`}
    onClick={onClick}
  >
    {text}
  </button>
);

const ButtonGroup = () => {
  const [buttonText, setButtonText] = useState("Get USSD");
  const [buttonColor, setButtonColor] = useState("bg-orange-500");

  const handleCopyToClipboard = () => {
    const code = "*384*308040#";

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
    <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-12">
      <Button
        styles="bg-green-500 w-auto md:w-[150px] lg:w-[180px]"
        text="Get Bot"
        onClick={() => window.location.href = "https://t.me/egoblox_bot"}
      />
      <Button
        styles={`${buttonColor} w-auto md:w-[150px] lg:w-[180px]`}
        text={buttonText}
        onClick={handleCopyToClipboard}
      />
    </div>
  );
};

export default ButtonGroup;
