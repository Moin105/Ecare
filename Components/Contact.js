import React,{useState} from 'react'
import styles from '../styles/Home.module.css'
import Image from "next/image";
import doctor from '../public/doctor.png'
function Contact() {
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
        //   setShow(true);
        //   setResponse("Enter Required Details");
        //   setTimeout(function () {
        //     setShow(false);
        //   }, 5000);
          return;
        } else {
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inputs),
          };
    
          fetch("http://www.ecareserve.com/api/contact_form", requestOptions)
            .then((response) => response.json())
            .then((res) => {
              console.log(res);
            //   setResponse(res.message);
              console.log(res.message);
            });
        //   setShow(true);
        //   setTimeout(function () {
        //     setShow(false);
        //   }, 1000);
        }
      };
  return (
    <div className={styles.background}>
    <div className={styles.contact}>
        <h2 className={styles.h2}>Get In touch Today!</h2>
        <p className={styles.p}>With eCare, you can Book appointments in 5 easy steps as shown below. <br></br>
           Moreover, you can choose the method of consultancy according to your needs.</p>
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
                     <button className={styles.button}  onClick={handleSubmit}>Send</button>
                  </form>
                 
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contact