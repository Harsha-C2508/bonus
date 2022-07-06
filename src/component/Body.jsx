import React from 'react'
import { Avatar, Stack,Slider,SliderTrack,SliderFilledTrack,SliderThumb } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import Styles from "../component/body.module.css"
export const Body = () => {
  return (
    <div style={{border:"2px solid",height:"500px",width:"50%",marginLeft:"20px",marginBottom:"10px"}}>
       <div className={Styles.nav}>
        <h5 className={Styles.p}>Active Users</h5>
        <h5>for August 2019 <ChevronDownIcon/></h5>
       </div>
{/* ------------------------------------------1st user------------------------------------------------------------------- */}
       <div className={Styles.user}>
        <Stack direction='row'>
              <Avatar src='https://bit.ly/kent-c-dodds' />
              <h3>Nrupul Dev</h3><br />
          </Stack>
          <p className={Styles.para}>Banglore,India</p>
          <Slider aria-label='slider-ex-1' defaultValue={90}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
         <div className={Styles.nav}>
         <h3>Professional level 15</h3>
         <p>4723 points</p>
         </div>
       </div>
{/* ------------------------------------------2nd user------------------------------------------------------------------- */}
       <div className={Styles.user}>
        <Stack direction='row'>
              <Avatar src='https://perfectczechwomen.com/wp-content/uploads/2019/04/New-Profile-15-500x580.jpg' />
              <h3>Sandhya</h3><br />
          </Stack>
          <p className={Styles.para}>Banglore,India</p>
          <Slider aria-label='slider-ex-1' defaultValue={60}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
         <div className={Styles.nav}>
         <h3>Professional level 11</h3>
         <p>2339 points</p>
         </div>
       </div>
{/* ------------------------------------------3rd user------------------------------------------------------------------- */}
       <div className={Styles.user}>
        <Stack direction='row'>
              <Avatar src='https://thumbs.dreamstime.com/b/profile-picture-smiling-male-employee-posing-workplace-close-up-headshot-portrait-smiling-caucasian-businessman-look-190961990.jpg' />
              <h3>Elon Tusk</h3><br />
          </Stack>
          <p className={Styles.para}>California,USA</p>
          <Slider aria-label='slider-ex-1' defaultValue={30}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
         <div className={Styles.nav}>
         <h3>Professional leve 6</h3>
         <p>1884 points</p>
         </div>
       </div>
    </div>
  )
}
