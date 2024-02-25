

import React, {useContext, useState} from 'react';
import { AppContext } from '../../context/appContext';
import styles from './ageCalculator.module.css';
import { SlArrowDown } from "react-icons/sl";
const AgeCalculator = () => {
    const data=useContext(AppContext);

    const [birthdate, setbirthdate] = useState("")
    const [age, setage] = useState(null)

    const calculateAge = () => {
      const birthDate = new Date(birthdate);
      const today = new Date();

      const yearsDiff = today.getFullYear() - birthDate.getFullYear();
      const monthsDiff = today.getMonth() - birthDate.getMonth();
      const daysDiff = today.getDate() - birthDate.getDate();

      let ageYears = yearsDiff;
      let ageMonths = monthsDiff;
      let ageDays = daysDiff;

      if (daysDiff < 0) {
        const lastMonth = new Date(today.getFullYear(), today.getMonth() -1, birthDate.getDate());
        ageMonths -= 1;
        ageDays = Math.floor((today - lastMonth) /(24 * 60 * 60 *1000));
      }

      if (monthsDiff < 0) {
        ageYears  -= 1;
        ageMonths  += 12;
      }

      setage ({
        years: ageYears,
        months: ageMonths,
        days: ageDays,
      });

    };

  return (
    <div className={styles.container}>
     <h1>Age calculator</h1>
     <label htmlFor="date">day /month /year</label>
     <input className={styles.container_input}
     type='date'
     value={birthdate}
     onChange={(e) =>{

      if ( e.target.value.length <= 10) {
        setbirthdate(e.target.value);
      }
     }}
     max="9999-12-31"
     min="0000-01-01"
     />

<SlArrowDown className={styles.container_btn} onClick={calculateAge}/>
     
     {age && (
       <div className='result'>
      <p>You are {age.years} years, {age.months}months, and {age.days}days old </p>
     </div>
       )}
    </div>
)
};

export default AgeCalculator;




// 2nd method
// Method 2 is not complete

// import React, {useContext, useState} from 'react';
// import { AppContext } from '../../context/appContext';
// import styles from './ageCalculator.module.css';
// import { SlArrowDown } from "react-icons/sl";

// const AgeCalculator = () => {
//     const data=useContext(AppContext);

//     const [birthdate, setbirthdate] = useState("")
//     const [age, setage] = useState([])

//     const calculateAge = () => {
//       const birthDate = new Date(birthdate);
//       const today = new Date();

//       const yearsDiff = today.getFullYear() - birthDate.getFullYear();
//       const monthsDiff = today.getMonth() - birthDate.getMonth();
//       const daysDiff = today.getDate() - birthDate.getDate();

//       let ageYears = yearsDiff;
//       let ageMonths = monthsDiff;
//       let ageDays = daysDiff;

//       if (daysDiff < 0) {
//         const lastMonth = new Date(today.getFullYear(), today.getMonth() -1, birthDate.getDate());
//         ageMonths -= 1;
//         ageDays = Math.floor((today - lastMonth) /(24 * 60 * 60 *1000));
//       }

//       if (monthsDiff < 0) {
//         ageYears  -= 1;
//         ageMonths  += 12;
//       }

//       setage ({
//         years: ageYears,
//         months: ageMonths,
//         days: ageDays,
//       });

//     };

//   return (
//     <>
//      <h1>Age calculator</h1>
//     <div className={styles.container}>



// <div className={styles.input_flex}>
// <div className={styles.container_input}>
//   <label htmlFor="number">Day</label>
//   <input type="number" 
//    value={birthdate}
//    onChange={(e) =>{

//     if ( e.target.value.length <= 10) {
//       setbirthdate(e.target.value);
//     }
//    }}
//    max="9999-12-31"
//    min="0000-01-01" />
   
//   <small className={styles.error_day}>Must be a valid day</small>  
  
// </div>

// <div className={styles.container_input}>
// <label htmlFor="number">Month</label>
//   <input type="number" 
//    value={birthdate}
//    onChange={(e) =>{

//     if ( e.target.value.length <= 10) {
//       setbirthdate(e.target.value);
//     }
//    }}
//    max="9999-12-31"
//    min="0000-01-01" />

//   <small className={styles.error_month}>Must be a valid month</small>
  
// </div>

// <div className={styles.container_input}>
// <label htmlFor="number">Year</label>
//   <input type="number" 
//    value={birthdate}
//    onChange={(e) =>{

//     if ( e.target.value.length <= 10) {
//       setbirthdate(e.target.value);
//     }
//    }}
//    max="9999-12-31"
//    min="0000-01-01" />
  
//   {age && (
//   <small className={styles.error_year}>{age.years}Must be in the past</small>
//   )}
// </div>

// </div>
//      <SlArrowDown className={styles.container_btn} onClick={calculateAge}/>

     
//      {age && (
// <div className='output'>
// <h1><span className={styles.output_year}>--</span>{age.years}years</h1>
// <h1><span className={styles.output_month}>--</span>{age.months}months</h1>
// <h1><span className={styles.output_day}>--</span>{age.days}days</h1>

// </div>
// )} 

//     </div>
//     </>
// )
// };

// export default AgeCalculator;
