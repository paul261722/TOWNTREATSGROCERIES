import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Footer from "./Footer";
import './styling/Signin.css'

const Signin = () => {
  

  // initilaize hooks to help you store data entered by the user on the form

  const [email,setEmail] = useState("");
  const[passsword, setPassword] = useState("");

  // initialize three additional hooks to help you manage the  state of the application.
  const[loading, setLoading] = useState("");
  const[success, setSuccess] = useState("");
  const[error, setError] = useState("");

  const navigate = useNavigate();

  // create a function to handle th user to signin 
  const login = async (e) =>{
    // prevent your site from reloading
    e.preventDefault();

    // update the loading hook  with a message
    setLoading("please wait as we log  you in...")
    

    try{
      // create anew form dat object 
      const data= new FormData()

      // append the two details i.e the email and the password onto the form data

      data.append("email", email);
      data.append("password", passsword);
      
      // post the dat through API 
      const response  = await axios.post("https://andera.pythonanywhere.com/api/signin",data);

      // chechk weather the details return from the api contain a ke user
      if(response.data.user){
        setLoading("")
        // setSuccess("Login success")
        navigate("/")

      }
      else{
        setLoading("")
        setError("invalid login details. pls try again...")
      }
    }
    catch(error){
      setLoading("")
      setError(error.message)
    }
  }

  return (
  <div className="mycontainer">
     <div className="row justify-content-center mt-3">
     <div className="col-md-6 card shadow p-2">
      <h3 className="text-success">Sign In Here</h3>
      <b className=" text-success">{loading}</b>
      <b className=" text-success">{success}</b>
      <b className=" text-danger">{error}</b>
      <form onSubmit={login}>
        <input type="Email" 
        placeholder="Enter the email Address"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"/> <br />

        {/* {email} */}

        <input type="Password"
        placeholder="Enter the Password"
        required
        value={passsword}
        onChange={(e) =>setPassword(e.target.value)}
        className="form-control" /> <br />

        {/* {passsword} */}

        <input type="Submit"
        value="Sign In"
        
        className="btn btn-outline-success" /> <br /> <br />

                  <p>Dont have an account have an account ? <Link to ={'/signup'} className="text-info">sign up</Link></p>
     

      </form>
     </div>
      <Footer/>
   </div>
  </div>
  
  )
}

export default Signin
