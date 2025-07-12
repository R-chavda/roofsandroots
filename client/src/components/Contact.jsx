import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  const phoneNumber = "9265417900";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsAppChat = () => {
    window.open(`https://wa.me/${phoneNumber}?text=hello`, "_blank");
  };

  const handleWhatsAppVideoCall = () => {
    window.open(`https://wa.me/${phoneNumber}?text=hello`, "_blank");
  };

  const handleSMS = () => {
    window.location.href = `sms:${phoneNumber}`;
  };

  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better{" "}
          </span>

          <div className="flexColStart contactModes">
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call :</span>
                    <span className="secondaryText">{phoneNumber}</span>
                  </div>
                </div>
                <div className="flexCenter button" onClick={handleCall}>
                  Call now
                </div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat :</span>
                    <span className="secondaryText">Rahul chavda</span>
                  </div>
                </div>
                <div className="flexCenter button" onClick={handleWhatsAppChat}>
                  Chat now
                </div>
              </div>
            </div>

            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call :</span>
                    <span className="secondaryText">meeting link</span>
                  </div>
                </div>
                <div
                  className="flexCenter button"
                  onClick={handleWhatsAppVideoCall}
                >
                  Video Call now
                </div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message :</span>
                    <span className="secondaryText">SMS</span>
                  </div>
                </div>
                <div className="flexCenter button" onClick={handleSMS}>
                  Message now
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className=" c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
