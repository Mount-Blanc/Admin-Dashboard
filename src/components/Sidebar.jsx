import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups' ;

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const {activeMenu, setActiveMenu} =useStateContext();

  const activeLink = `flex i
  tems-center
  gap-5 pl-3 pt-3 pb-2.5 rounded -lg text-white text-md m-2`;
  
  const normalLink =`flex items-center
  gap-5 pl-3 pt-3 pb-2.5 rounded -lg text-white text-md 
  text-gray-700 dark:text-gray-200 dark:hover:text-black 
  hover:bg-light-gray m-2`

  return (

  )

export default Sidebar