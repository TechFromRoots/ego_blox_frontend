import { wallet } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={wallet} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Your Phone Number <br className="sm:block hidden" /> is Your Wallet.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-10`}>
        Imagine if you could send and receive money just like sending a text message.
        <br />
        With our service, your phone number acts as your digital wallet.
        <br />
        No need to remember complicated account numbers, wallet addresses or passwords, just use your phone number to manage your money.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Button styles={`mt-10`} />
      </div>
    </div>
  </section>
);

export default Billing;
