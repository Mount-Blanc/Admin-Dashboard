import React, {useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { AiFillShopping, FiShoppingCart } from 'react-icons/fi';
import {BsChatLeft} from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import {MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import { TiPipette } from 'react-icons/ti';

const NavButton =({ title, customFunc, icon,

  )

const Navbar = () => {
  const {activeMenu, setActiveMenu } = useStateContext();


  return (
  
 }  
export default Navbar