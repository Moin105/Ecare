import React,{useState} from 'react'
import styles from '../styles/Home.module.css'
import Image from "next/image";
import doctor from '../public/doctor.png'
import { useRouter } from 'next/router';
import en from "../Locales/en"
import fr from "../Locales/fr"
import Modal from './modal'

function Contact() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ?   en : fr;
  const [show, setShow] = useState(false);
  const [response, setResponse] = useState("");
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        message: "",
      });
      const handleChange = (e) => {
        setInputs({
          ...inputs,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (inputs.name == "" || inputs.email == "" || inputs.message == "") {
            console.log("gee")
          setShow(true);
          setResponse("Enter Required Details");
          setTimeout(function () {
            setShow(false);
          }, 5000);
          return;
        } else {
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inputs),
          };
    
          fetch("https://www.admin.ecareserve.com/api/contact_form", requestOptions)
            .then((response) => response.json())
            .then((res) => {
              console.log(res);
              setResponse(res.message);
              console.log(res.message);
              setInputs({
                ...inputs,
                name:"",
                message:"",
                email:""
              });
            });
          setShow(true);
          setTimeout(function () {
            setShow(false);
          }, 1000);
        }
      };
  return (
    <>
    <div className={styles.background}>
    <div className={styles.contact} id='contact'>
        <h2 className={styles.h2}>{t.gitt}</h2>
        <p className={styles.p}>{t.gith}</p>
        <div className={styles.sep}>
            <div className={styles.left}>
                <figure className={styles.figure}>
                <Image
                    src={doctor}
                    alt="apple"
                    layout="fill"
                    objectFit="contain"
                        />
                </figure>
            </div>
            <div className={styles.right}>
            <form className={styles.form}>
                      <input
                        type='text'
                        name='name'
                        id='name'
                        className={styles.input}
                        placeholder='Name'
                        value={inputs.name}
                        onChange={handleChange}
                      />
                      <input
                        type='text'
                        name='email'
                        id='email'
                        placeholder='Email'
                        className={styles.input}
                        value={inputs.email}
                        onChange={handleChange}
                      />
                    <textarea
                      type='text'
                      name='message'
                      id='message'
                      placeholder='Message'
                      className={styles.message}
                      value={inputs.message}
                      onChange={handleChange}
                    />
                     <button className={styles.button}  onClick={handleSubmit}>{t.send}</button>
                  </form>
                 
            </div>
        </div>
        </div>
    </div>
    
    {show == true && <Modal message={response} />}
</>)
}

export default Contact