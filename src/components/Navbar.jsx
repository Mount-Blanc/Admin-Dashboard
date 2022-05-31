import React, {useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { AiFillShopping } from 'react-icons/fi';
import {BschatLeft} from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import {MDkeyboardArrowDown }from 'react-cons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton =({ title, customFunc, icon,
  color, dotColor }) => (
    <TooltipComponent content ={title}
    position="Bottom-center">
      <button></button>
    </TooltipComponent>
  )



const Navbar = () => {
  const {activeMenu, setActiveMenu } =
  useStateContext();


  return (
    <div className= "flex justify-between p-2 md:mx-6 relative">

    </div>
  )
}

export default Navbar