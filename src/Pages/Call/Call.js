import { IoIosCall,IoIosMail } from "react-icons/io";
import {FaWhatsapp,FaTelegram} from "react-icons/fa"
import Fab from "./FAB";

const actions = [
  { label: "Call us", icon: <IoIosCall />, onClick:console.log },
  { label: "Mail us", icon: <IoIosMail />, onClick:console.log},
  { label: "Whatsapp Us", icon: <FaWhatsapp />, onClick: console.log },
  { label: "Join our Telegram group", icon: <FaTelegram />, onClick: console.log },
];

const Call = () => {
  return (
    <main>
      <Fab actions={actions} />
    </main>
  );
};

export default Call; 