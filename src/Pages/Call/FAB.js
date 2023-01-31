// import { useState } from "react";
// import cn from "classnames";
// import { MdCall } from "react-icons/md";

// import "./call.scss";

// const FAB = ({ actions }) => {
//   const [open, setOpen] = useState(false);

//   const mouseEnter = () => setOpen(true);

//   const mouseLeave = () => setOpen(false);

//   return (
//     <ul
//       className={cn("fab-container", { open })}
//       onMouseEnter={mouseEnter}
//       onMouseLeave={mouseLeave}
//     >
//       <li className="fab-button">
//         <MdCall />
//       </li>
//       {actions.map((action, index) => (
//         <li
//           style={{ transitionDelay: `${index * 25}ms` }}
//           className={cn("fab-action", { open })}
//           key={action.label}
//           onClick={action.onClick}
//         >
//           {action.icon}
//           <span className="tooltip">{action.label}</span>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default FAB;

import { useState } from "react";
import cn from "classnames";
import { MdCall } from "react-icons/md";
import React from "react"
import "./call.scss";

const FAB = ({ actions }) => {
  const [app,setApp]=React.useState(true);
  function myGreeting(){
      setApp(false);
  }
  React.useEffect(()=>{
    setTimeout(myGreeting, 5000);
  },[]);
  function clickk(eve){
    if (!app)
    {
      window.location.href=eve;
    }
  }
  const [open, setOpen] = useState(false);

  const mouseEnter = () => setOpen(true);

  const mouseLeave = () => setOpen(false);

  return (
    <ul
      className={cn("fab-container", { open })}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      
    >
      <li className="fab-button">
        <MdCall />
      </li>
      {actions.map((action, index) => (
        <li
          style={{ transitionDelay: `${index * 25}ms` }}
          className={cn("fab-action", { open })}
          key={action.label}
          onClick={() => clickk(action.label2)}
        >
          <div>
          {action.icon}</div>
          <span className="tooltip">{action.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default FAB;