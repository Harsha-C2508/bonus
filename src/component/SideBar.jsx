import React from 'react'
import { Avatar, Stack } from '@chakra-ui/react'
import Styles from "../component/sidebar.module.css"
import {GrCopy} from "react-icons/gr"
import {BsBarChartLine,BsSignpost,BsCart4} from 'react-icons/bs'
import {IoMdChatbubbles} from "react-icons/io"
import {IoSettingsOutline} from "react-icons/io5"
import {MdContentCopy,MdAddCircleOutline} from 'react-icons/md'
const SideBar = () => {
  return (
    <div className={Styles.box}>
        <div className={Styles.firstChild}>
            <Stack direction='row'>
            <Avatar className={Styles.avatar} src='https://eddie-hernandez.com/wp-content/uploads/2021/05/Mens-Business-Professional-Headshot-San-Francisco-Photographer.jpg' />
            </Stack>
        </div>
        <div className={Styles.secChild}>
              <div style={{height:"auto",marginTop:"10px"}}>
                 <BsBarChartLine className={Styles.i}/>
              </div>
              <div style={{height:"auto",marginTop:"20px"}}>
                 <BsSignpost className={Styles.i}/>
              </div>
              <div style={{height:"auto",marginTop:"20px"}}>
                 <BsCart4 className={Styles.i}/>
              </div>
              <div style={{height:"auto",marginTop:"20px"}}>
                <IoMdChatbubbles className={Styles.i}/>
              </div>
              <div style={{height:"auto",marginTop:"20px"}}>
                <MdContentCopy className={Styles.i}/>
              </div>
              <div style={{height:"auto",marginTop:"20px"}}>
                <IoSettingsOutline className={Styles.i}/>
              </div>
        </div>
        <div className={Styles.add}>
            <MdAddCircleOutline className={Styles.addicon}/>
        </div>
    </div>
  )
}

export default SideBar