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

const ButtonGroup = () => {
  const [buttonText, setButtonText] = useState("Get USSD  ");
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
    <div className="mt-10 flex flex-wrap justify-start md:justify-start gap-20 space-x-28">
      <Button
        styles={`whitespace-nowrap bg-green-500 md:w-[150px] lg:w-[180px]`}
        text="Get Bot"
        onClick={() => window.location.href = "https://t.me/egoblox_bot"}
      />
      <Button
        styles={`whitespace-nowrap ${buttonColor} md:w-[150px] lg:w-[180px]`}
        text={buttonText}
        onClick={handleCopyToClipboard}
      />
    </div>
  );
};

export default ButtonGroup;