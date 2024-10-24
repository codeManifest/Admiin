'use client'
import React from 'react'
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';



// icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import AssessmentIcon from '@mui/icons-material/Assessment';
import WorkIcon from '@mui/icons-material/Work';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';



// dinamic code for comp
const DashboardU=dynamic(()=> import('../Components/ui/Dashboard') )
const Task=dynamic(()=> import('../Components/ui/Task') )
const Activities=dynamic(()=> import('../Components/ui/Activities') )
const Message=dynamic(()=> import('../Components/ui/Message') )
const Calander=dynamic(()=> import('../Components/ui/Calander') )
const User=dynamic(()=> import('../Components/ui/User') )

export default function Dashboard() {
  const [activeComponent, setActiveComponent] = useState('Dashboard');
  const Rendercomp=()=>{
    switch(activeComponent){
      case'Task':
      return <Task/>;
      case'Calander':
      return <Calander/>;
      case'Activities':
      return <Activities/>;
      case'Message':
      return <Message/>;
      case'User':
      return <User/>;
      default:
      return <DashboardU/>
        
      

      
      ;


    }
  }

  let spanclass=[
    'flex items-center gap-3 font-medium cursor-pointer hover:text-blue-600  '
    ]
  return (
    <>
    

    <div className=' w-full flex mt-9  	 ' >

    <div  className=' w-[200px]  min-h-screen bg-slate-10 shadow-2xl flex flex-col gap-8 px-4 py-12 justify-center ' >
      <motion.span whileHover={{ scale: 1.1 }}onHoverStart={e => {}}onHoverEnd={e => {}} className={`${spanclass} ${activeComponent === 'Dashboard' ? 'text-blue-600' : ''} `}  onClick={() => setActiveComponent('Dashboard')} ><DashboardIcon/> Dashboard </motion.span>
      <motion.span whileHover={{ scale: 1.1 }}onHoverStart={e => {}}onHoverEnd={e => {}} className={`${spanclass} ${activeComponent === 'Task' ? 'text-blue-600' : ''}  `}  onClick={() => setActiveComponent('Task')} ><SplitscreenIcon/> Task </motion.span>
      <motion.span whileHover={{ scale: 1.1 }}onHoverStart={e => {}}onHoverEnd={e => {}} className={`${spanclass} ${activeComponent === 'User' ? 'text-blue-600' : ''}  `}  onClick={() => setActiveComponent('User')} ><PersonIcon/> Students  </motion.span>
      <motion.span whileHover={{ scale: 1.1 }}onHoverStart={e => {}}onHoverEnd={e => {}} className={`${spanclass} ${activeComponent === 'Message' ? 'text-blue-600' : ''}  `}  onClick={() => setActiveComponent('Message')} ><MailOutlineIcon/> Message </motion.span>
      <motion.span whileHover={{ scale: 1.1 }}onHoverStart={e => {}}onHoverEnd={e => {}} className={`${spanclass} ${activeComponent === 'Activities' ? 'text-blue-600' : ''}  `}  onClick={() => setActiveComponent('Activities')}><AccessibilityIcon/> Activites </motion.span>
      <motion.span whileHover={{ scale: 1.1 }}onHoverStart={e => {}}onHoverEnd={e => {}} className={`${spanclass} ${activeComponent === 'Calander' ? 'text-blue-600' : ''}  `}  onClick={() => setActiveComponent('Calander')} ><CalendarMonthIcon/> Calander </motion.span>
      <motion.span whileHover={{ scale: 1.1 }}onHoverStart={e => {}}onHoverEnd={e => {}} className={`${spanclass} ${activeComponent === 'Post' ? 'text-blue-600' : ''}  `}  onClick={() => setActiveComponent('Post')} ><SendOutlinedIcon/> Post </motion.span>
      <motion.span whileHover={{ scale: 1.1 }}onHoverStart={e => {}}onHoverEnd={e => {}} className={`${spanclass} ${activeComponent === 'Ticket' ? 'text-blue-600' : ''}  `}  onClick={() => setActiveComponent('Ticket')} ><ConfirmationNumberIcon/> Ticket </motion.span>
      <motion.span whileHover={{ scale: 1.1 }}onHoverStart={e => {}}onHoverEnd={e => {}} className={`${spanclass} ${activeComponent === 'Reports' ? 'text-blue-600' : ''}  `}  onClick={() => setActiveComponent('Reports')} ><AssessmentIcon/> Reports </motion.span>
      <motion.span whileHover={{ scale: 1.1 }}onHoverStart={e => {}}onHoverEnd={e => {}} className={`${spanclass} ${activeComponent === 'Jobs' ? 'text-blue-600' : ''}  `}  onClick={() => setActiveComponent('Jobs')} ><WorkIcon/> Jobs </motion.span>
      <motion.span whileHover={{ scale: 1.1 }}onHoverStart={e => {}}onHoverEnd={e => {}} className={`${spanclass} ${activeComponent === 'Documents' ? 'text-blue-600' : ''}  `}  onClick={() => setActiveComponent('Documents')} ><FolderOpenIcon/> Documents </motion.span>
      <motion.span whileHover={{ scale: 1.1 }}onHoverStart={e => {}}onHoverEnd={e => {}} className={`${spanclass} ${activeComponent === 'Security' ? 'text-blue-600' : ''}  `}  onClick={() => setActiveComponent('Security')} ><VerifiedUserIcon/> Security </motion.span>

      

        
        

    </div>
    <motion.div  className='dynamic px-8 w-[100vw]  ' >    {Rendercomp()}    </motion.div>
    </div>
    
      
      
      
    
    </>
  )
}
