import React,{useState,useEffect} from 'react'
import Card from "../../../../components/shared/Card/Card";
import Button from "../../../../components/shared/Button/Button";
import Textinput from '../../../../components/shared/Textinput/Textinput';
import styles from '../StepPhoneEmail.module.css';

const Email = ({onClick}) => {
    const [email,setmail]=useState('');

    function Alert(){
      window.alert("Verification by e-mail hasn't been implemented yet! Please try through Phone No.")
    }
    useEffect(() => {
      const fetchRooms = () => {
        Alert();
      };
      fetchRooms();
  }, []);
  return (
    <Card title="Enter Your E-mail" logo="email-emoji.png">

    <Textinput value={email} onChange={(e)=>setmail(e.target.value)} />

    <div className={styles.actionButtonWrap}> 
    <Button text="Next" onclick={Alert}></Button>
    </div>
  
    <p className={styles.bottomParagraph}>
        By enterting your e-mail , you're agreeing to our Terms of service and Privacy Policy. Thanks!
    </p>
     </Card>  
  )
}

export default Email