
// // import React, { useState } from "react";
// // // import ReactDom from "react-dom"


// // function One() {
// //     const [description, setDescription] =  useState('');
// //     const [ro, setro] =  useState('');
// //     const [gdms, setgdms] =  useState('');

// //     const resetform =()=>{
// //         setDescription("");
// //         setro("");
// //         setgdms("");
// //     }

// //     const onchangefun = (val)=>{
// //         // console.log(val);
// //     const vari = (val.target.value);
// //        console.log(vari);
// //        setDescription(vari);
// //     }


// //     return (
// //         <>
// //             <div>

// //                 <div className="container 1">

// //                     <div>
// //                         <p>Description</p>
// //                         <input value={description} onChange={onchangefun} />

// //                     </div>
// //                     <div>
// //                         <p>RO Remarks</p>
// //                         <input value={ro} onChange={(e)=> setro(e.target.value)}  />
// //                     </div>
// //                     <div>
// //                         <p>GDMS Remarks</p>
// //                         <input value={gdms} onChange={(e)=> setgdms(e.target.value)} />
// //                     </div>
// //                 </div>

// //                 <div>
// //                     <input type="reset" onClick={()=> resetform()}/>

// //                     <button className="submit" > Submit</button>
// //                 </div>
// //             </div>
// //         </>
// //     );
// // }

// // export default One;




// import React, { Fragment, useEffect, useState } from "react";
// import { Prompt } from "react-router-dom";
// import classes from "./one.module.css";
// import Button from "../ui/ButtonUi";
// import useInput from "../../src/hooks/useinputs";
// // import { useSelector } from "react-redux";
// import axios, { Axios } from "axios";

// const One = (props) => {

//     const [isEntering, setIsEntering] = useState(false);

//     const { value: enteredName,
//         hasError: nameInputHasError,
//         isValid: enteredNameIsValid,
//         valueChangeHandler: nameChangedHandler,
//         inputBlurHandler: nameBlurHandler,
//     } = useInput(value => value.trim() !== '');

//     const { value: enteredPhone,
//         hasError: phoneInputHasError,
//         isValid: enteredPhoneIsValid,
//         valueChangeHandler: phoneChangedHandler,
//         inputBlurHandler: phoneBlurHandler,
//     } = useInput(value => value.trim().length >= 10);

//     const { value: enteredEmail,
//         hasError: emailInputHasError,
//         isValid: enteredEmailIsValid,
//         valueChangeHandler: emailChangedHandler,
//         inputBlurHandler: emailBlurHandler,
//     } = useInput(value => value.includes('@'));

//     const { value: enteredMessage,
//         hasError: messageInputHasError,
//         isValid: enteredMessageIsValid,
//         valueChangeHandler: messageChangedHandler,
//         inputBlurHandler: messageBlurHandler,
//     } = useInput(value => value.trim().length >= 10);

//     let formIsValid = false;

//     if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid && enteredPhoneIsValid) {
//         formIsValid = true;
//     }

//     const [btnText, setBtnText] = useState('Submit');
//     const [clear, setclear] = useState('Clear');


//     const [isSent, setIsSent] = useState(false);
//     const [enteredLName, setEnteredLName] = useState('');




//     const onchangefun = (val) => {
//         // console.log(val);
//         const vari = (val.target.value);
//         console.log(vari);
//         setDescription(vari);
//     }


//     const lastNameChangeHandler = (event) => {
//         setEnteredLName(event.target.value);
//     }

//     const formSubmitHandler = (event) => {
//         event.preventDefault();
//         // resetNameHandler();
//         // resetEmailHandler();
//         // resetPhoneHandler();
//         // resetMessageHandler();
//         // setEnteredLName('');
//         if (!enteredNameIsValid || !enteredEmailIsValid || !enteredMessageIsValid || !enteredPhoneIsValid) {
//             return;
//         }
//         const message = {
//             time: new Date().toUTCString(),
//             name: enteredName + " " + enteredLName,
//             email: enteredEmail,
//             phone: enteredPhone,
//             message: enteredMessage,
//         }
//         finishEnteringHandler();
//         sendMessageHanlder(message);
//     }

//     const sendMessageHanlder = async (message) => {
//         setBtnText((prevValue) => 'Sending ...');
//         await fetch('https://react-redux-47ef8-default-rtdb.firebaseio.com/portfolio-messages.json', {
//             method: 'POST',
//             body: JSON.stringify(message)
//         });
//         setIsSent(true);
//         setBtnText((prevValue) => 'Message Sent');
//     }

//     const finishEnteringHandler = () => {
//         setIsEntering(false);
//     }
//     const formFocussedHandler = () => {
//         setIsEntering(true);
//     };

//     const nameInputClasses = nameInputHasError ? `${classes.Inputs} ${classes.invalidInput}` : classes.Inputs;
//     const emailInputClasses = emailInputHasError ? `${classes.Inputs} ${classes.invalidInput}` : classes.Inputs;
//     const phoneInputClasses = phoneInputHasError ? `${classes.Inputs} ${classes.invalidInput}` : classes.Inputs;
//     const messageInputClasses = messageInputHasError ? `${classes.Inputs} ${classes.invalidInput}` : classes.Inputs;
//     const formClasses = isSent ? `${classes.contactForm} ${classes.sent}` : classes.contactForm;

//     // const nonThemeColor = useSelector(state => state.nonThemeColor);


   

//     const [description, setDescription] = useState([]);
//     // const [ro, setro] = useState('');
//     // const [gdms, setgdms] = useState('');



//     const [inputdata, setinputData] = useState({
//         description: "",
//         input1: "",
//         // input2: ""
//     })

//     const handleSubmit = async (e) => {
//         e.preventDefault();
    
//         try {
//             const response = await axios.post('http://172.16.15.156:8969/predict',{
//                  ...inputdata
//             })
    
//             if (response) {
                
//                 props.onDataReceive(response.data);
                
//                 localStorage.setItem('responseData', JSON.stringify(response.data));
//                 console.log("response",response.data)
//             }
    
            
//             resetform();
//         } catch (error) {
//             // If you want to handle errors and show an error message
//             // toast.error("Some error occurred while making appointment");
//             console.error("Some error occurred while making appointment", error);
    
//         } finally {
//             // setLoading(false); // Uncomment if you have setLoading function implemented
//         }
//     };
    
    


//     const resetform = () => {
//         setinputData({
//             description: "",
//             input1: ""
//         });
        
//     }

//     return (
//         <Fragment>
//             <Prompt when={isEntering} message={(location) =>
//                 'Are You Sure You Want To Leave ? All your entered data will be lost!'}
//             />
//             <div className={classes.contactFormCard}>
//                 <h1
//                 //  style={{ color: nonThemeColor }}
//                  >Enter Details</h1>
//                 <form onFocus={formFocussedHandler} action="" onSubmit={handleSubmit} className={formClasses}>
//                     <textarea
//                         className={messageInputClasses}
//                         name="Description"
//                         placeholder="Description"
//                         onChange={(e) => {
//                             setinputData({
//                                 ...inputdata,
//                                 description: e.target.value
//                             })
//                         }}
//                     // disabled={isSent}s
//                     >

//                     </textarea>

//                     <input 
//                         type="text"
//                         className={nameInputClasses}
//                         placeholder="RO Remarks"
//                         disabled={isSent}
//                         onChange={(e) => {
//                             setinputData({
//                                 ...inputdata,
//                                 input1: e.target.value
//                             })
//                         }}
//                     />
                 

//                     <br />
                    
//                     <div className="btndiv" style={{ display: "flex" }}>

//                         <div className={classes.sendBtn}>
//                             <Button type="reset" onClick={() => resetform()} > Clear  </Button>
//                         </div>

//                         <div className={classes.sendBtn}>
//                             <Button
//                                 // disabled={!formIsValid || isSent} 
//                                 type= "submit" 
//                             >{btnText} </Button>
//                         </div>

//                     </div>
//                 </form>
//             </div>
//         </Fragment>
//     )
// };

// export default One;


import React, { Fragment, useState } from "react";
import { Prompt } from "react-router-dom";
import classes from "./one.module.css";
import Button from "../ui/ButtonUi";
import axios from "axios";

const One = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const [btnText, setBtnText] = useState("Submit");
  const [isSent, setIsSent] = useState(false);

  const [inputdata, setinputData] = useState({
    description: "",
    input1: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api2-ai-showcase.antiersolutions.com/predict",
        inputdata
      );
      if (response) {
        props.onDataReceive(response.data);
        localStorage.setItem("responseData", JSON.stringify(response.data));
        console.log("response", response.data);
      }
      resetform();
    } catch (error) {
      console.error("Some error occurred while making appointment", error);
    }
  };

  const resetform = () => {
    setinputData({
      description: "",
      input1: ""
    });
  };

  const formFocussedHandler = () => {
    setIsEntering(true);
  };

  const nameInputClasses = classes.Inputs;
  const messageInputClasses = classes.Inputs;

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) =>
          "Are You Sure You Want To Leave? All your entered data will be lost!"
        }
      />
      <div className={classes.contactFormCard}>
        <h1>Enter Details</h1>
        <form onFocus={formFocussedHandler} onSubmit={handleSubmit} className={classes.contactForm}>
          <textarea
            className={messageInputClasses}
            name="Description"
            placeholder="Description"
            onChange={(e) =>
              setinputData({
                ...inputdata,
                description: e.target.value
              })
            }
            value={inputdata.description}
          />
          <input
            type="text"
            className={nameInputClasses}
            placeholder="RO Remarks"
            disabled={isSent}
            onChange={(e) =>
              setinputData({
                ...inputdata,
                input1: e.target.value
              })
            }
            value={inputdata.input1}
          />
          <div className="btndiv" style={{ display: "flex" }}>
            <div className={classes.sendBtn}>
              <Button type="reset" onClick={resetform}>
                Clear
              </Button>
            </div>
            <div className={classes.sendBtn}>
              <Button type="submit" disabled={isSent}>
                {btnText}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default One;
