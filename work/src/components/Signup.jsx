import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"
import Footer from "./Footer";
import './styling/Signup.css'

const Signup = () => {

// creat hooks that will enable you to store the different information entered by the user on the  form
const[username, setusername,] = useState("");
const[email,setEmail] = useState("");
const[passsword, setPassword] = useState("");
const[number, setNumber] = useState("");

// initialize three additional hooks to store the state of the application when the signup button is clicked.
const [loading, setLoading] = useState("");
const[success, setSuccess ] = useState("")
const[error, setError] =useState("");

// creat a function to handle the submit logic.
const submit = async (e) =>{
  // prevent your site from reloading
  e.preventDefault();
  // update the loading hook with a message.
  setLoading("  Please wait as we submit your details...");

  try{
    // create a form data object that can hold the signup details.
    const data = new FormData();

    // add the different information on to the form data .
    data.append("username",username);
    data.append("email", email)
    data.append("password",passsword)
    data.append("phone",number)

    // post your data through your end point 
    // here we shall use axios which is alibrary thta enables to intetract with http request.

    const response = await axios.post("https://andera.pythonanywhere.com/api/signup",data);

    // update the loading hook back to default.
    setLoading("");

    // update the success hook with the response message.
    setSuccess(response.data.message)

    // clear the hooks for the form input field
    setusername("");
    setEmail("");
    setNumber("");
    setPassword("");
  }
  catch(error){
    // catch any error if their is 
    setLoading("")
    setError(error.message)

  }
} 
  return (
  <div className="mycontainer">
     <div className="row justify-content-center mt-3">
    <div className="col-md-6 card show p-2">
      <h3 className="text-success">Sign up</h3>

      {loading}
      <b className="text-success">{loading}</b>
      <b className="text-success">{success}</b>
      <b className="text-danger">{error}</b>






      <form  onSubmit={submit}>
      <input 
        type="Name"
        placeholder="Enter User Name"
        Value= {username}
        onChange={(e) =>setusername(e.target.value)}
        className="form-control" required/><br />
         {/* {username}  */}
        
        <input 
        type="Email"
        placeholder="Enter Email"
        value = {email}
        onChange={(e)=> setEmail(e.target.value)}
        className="form-control"required/><br />

        {/* {email} */}

        <input type="Password" 
         placeholder="Enter Password"
         value = {passsword}
         onChange={(e)=> setPassword(e.target.value)}
         className="form-control"required/><br />

         {/* {passsword} */}

        <input type="Number" 
        placeholder="Enter Phone "
        value = {number}
        onChange ={(e)=> setNumber(e.target.value)}
        
         className="form-control"required/><br /> <br />

        {/* {number} */}


         <button className = "btn btn-outline-success">Sign Up</button>
         <p>Already have an account ? <Link to ={'/signin'} className="text-info">sign in</Link></p>
     
      </form>
      
     
    </div>

    <Footer/>
   </div>
  </div>
  
  )
}

export default Signup
