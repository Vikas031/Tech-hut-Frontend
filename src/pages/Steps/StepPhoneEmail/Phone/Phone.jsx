import React,{useState} from 'react'
import Card from "../../../../components/shared/Card/Card";
import Button from "../../../../components/shared/Button/Button";
import Textinput from '../../../../components/shared/Textinput/Textinput';
import styles from '../StepPhoneEmail.module.css';
import { sendOtp } from '../../../../http';
import {useDispatch} from 'react-redux';
import { setOtp } from '../../../../store/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Phone = ({onClick}) => {
    const [phoneNumber,setphone]=useState('');
     const notify = () => {
       toast.error('Please enter a 10 digit phone number !', {
           position: toast.POSITION.TOP_RIGHT
       });
   };


    const dispatch=useDispatch();

    async function submit(){
      if(phoneNumber.length!=10)
      {
        notify(); 
        return;
      }
      
      //server request
      const res=await sendOtp({phone:phoneNumber});
      window.alert(`This is a testng Phase for the Application : Your OTP is :${res.data.otp}`)
      dispatch(setOtp({phone:res.data.phone,hash:res.data.hash}))

      onClick();
    }
  return (
    <>
    <ToastContainer/>
    <Card title="Enter Your Phone Number " logo="phone.png">

    <Textinput value={phoneNumber} onChange={(e)=>setphone(e.target.value)} />
    
    <div className={styles.actionButtonWrap}> 
    <Button text="Next" onclick={submit}></Button>
    </div>
  
    <p className={styles.bottomParagraph}>
        By enterting your number , you're agreeing to our Terms of service and Privacy Policy. Thanks!
    </p>
     </Card>
     </> 
  )
}

export default Phone