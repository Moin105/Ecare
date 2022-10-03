import React, { useEffect } from "react";
// import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import styles from '../styles/Home.module.css'
import Review from "./Review";
import k1 from '../public/k1.png'
import k2 from '../public/k2.png'
import k3 from '../public/k3.png'

import star from '../public/star.png'
import stars from '../public/stars.png'

export default function Customer() {
  
  // useEffect(() => {
  //   // fetch("https://www.admin.ecareservecom/api/get_site_review")
  //   .then((response) => response.json())
  //   .then((res) => {
  //     console.log(res);
  //   //   setResponse(res.message);
  //     console.log(res.message);
  //   });
  // }, [])
  
  return (

    <>
  
      {/* // <div style={MyCarousel.CONTAINER_STYLE}> */}
    
      <div  className={styles.customer}>
       <h2>Our Patient’s Reviews</h2>
        <div style={{position:"relative",width:"100%" ,overflow:"hidden"}} className={styles.high}>
      <ReactCardCarousel autoplay={true} autoplay_speed={5500} disable_box_shadow={true} spread={"wide"} > 
        {/* <div style={{height:"10px"}}>First Card</div> */}
        <Review review="“A very helpful 
         mobile app for booking appointments
         and searching for the required doctors. 
         Has made my life a lot easy”"
         name="Peter Parker"
         img={k1}
         img2={stars}
         />
            <Review review="“A very helpful 
         mobile app for booking appointments
         and searching for the required doctors. 
         Has made my life a lot easy”"
         name="Mary Jane"
         img={k2}
         img2={star}
         />
            <Review review="“A very helpful 
         mobile app for booking appointments
         and searching for the required doctors. 
         Has made my life a lot easy”"
         name="Joseph Hill"
         img={k3}
         img2={stars}
         />
      </ReactCardCarousel>
       </div>
       </div>
      
    </>
  )
}

// export default Customer


















// class MyCarousel extends Component {
//   static get CONTAINER_STYLE() {
//     return {
//       height: "10vh",
//       width: "10%",
//       display: "flex",
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "middle"
//     };
//   }

//   static get CARD_STYLE() {
//     return {
//       height: "200px",
//       width: "200px",
//       paddingTop: "80px",
//       textAlign: "center",
//       background: "#52C0F5",
//       color: "#FFF",
//       fontFamily: "sans-serif",
//       fontSize: "12px",
//       textTransform: "uppercase",
//       borderRadius: "10px",
//       boxSizing: "border-box",
//       margin: 200
//     };
//   }

 
// }
// export default MyCarousel
// const rootElement = document.getElementById("root");
// ReactDOM.render(<MyCarousel />, rootElement);
