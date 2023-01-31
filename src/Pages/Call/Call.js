// import { IoIosCall,IoIosMail } from "react-icons/io";
// import {FaWhatsapp,FaTelegram} from "react-icons/fa"
// import Fab from "./FAB";

// const actions = [
//   { label: "Call us", icon: <IoIosCall />, onClick:console.log },
//   { label: "Mail us", icon: <IoIosMail />, onClick:console.log},
//   { label: "Whatsapp Us", icon: <FaWhatsapp />, onClick: console.log },
//   { label: "Join our Telegram group", icon: <FaTelegram />, onClick: console.log },
// ];

// const Call = () => {
//   return (
//     <main>
//       <Fab actions={actions} />
//     </main>
//   );
// };

// export default Call; 
import { IoIosCall,IoIosMail } from "react-icons/io";
import {FaWhatsapp,FaTelegram} from "react-icons/fa"
import Fab from "./FAB";

const actions = [
  { label: "Call us", icon: <IoIosCall />, onClick1:console.log("call"),label2:"tel:8777765809" },
  { label: "Mail us", icon: <IoIosMail />, onClick1:console.log("mail"),label2:"https://mail.google.com/mail/u/0/?fs=1&to=info.47bitapods@gmail.com&tf=cm"},
  { label: "Whatsapp Us", icon: <FaWhatsapp />, onClick1: console.log("whatsapp"),label2:"https://wa.me/+918981464738" },
  { label: "Join our Telegram group", icon: <FaTelegram />, onClick1: console.log("telegram"),label2:"https://mail.google.com/mail/u/0/?fs=1&to=info.47bitapods@gmail.com&tf=cm" },
];

const Call = () => {
  return (
    <main>
      <Fab actions={actions} />
    </main>
  );
};

export default Call;