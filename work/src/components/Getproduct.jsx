import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Getproducts = () => {

  // CREATE hooks
  const [products, setProducts] = useState([]); // this usestate hook contains an empty array
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  //  const navigate = useNavigate();

  // create the navigate hook. 
  // This hook will help navigate to the mpesa payment page when the "purchase now button is clicked"
  const navigate = useNavigate();

  // specify the loaction of the image
  const img_url = "https://sengi2025.pythonanywhere.com/static/images/"

  // create a function that will handle the get operation(method)
  const getproducts = async () =>{
    // update the loading hook with a message
    setLoading("Please wait as we retrieve the products...")

    try{
      // handle the response given from pythonanywhere
      const response = await axios.get("https://sengi2025.pythonanywhere.com/api/getproducts")

      // update the products hook with the products recieved from the API
      setProducts(response.data)
      // console.log(response.data)

      // set the loading hook back to default
      setLoading("");
    }
    catch(error){
      // set the loading hook back to default
      setLoading("");

      // project an error message
      setError("There was an error encountered")
    }
  } // end getproducts function

  // below we shall use the useEffect hook to call our getproducts function.
  // useEffect is hook that applies new effects/changes to the user interface after an action has happened.
  useEffect(
    () => {getproducts()},
    []) //dependency. This hook contains an empty array depency to ensure that it only runs once when the component (Getproducts component) renders.


    // we create a hook thta hold those products thta matches whatever the user will be typing..
    const[search,setSearch] = useState("")

    const filtered_products = products.filter((item) =>
      item.product_name.toLowerCase().includes(search.toLowerCase())||
      item.product_description.toLowerCase().includes(search.toLowerCase())
 );


  return (
   <div>
    <div className="row">
      <div className="col-md-4"></div>
      <h3 className="text-info mt-2">Available Products</h3>
      <div className="col-md-4"> {/* below is the input for the search functionality
         */}

         <input type="text"
         placeholder='search for a product here'
         className='form-control justify-contenet-center'
         value={search}
         onChange={(e)=>setSearch(e.target.value)} />

         {/* {search} */}</div>
      <div className="col-md-4"></div>
    </div>
     <div className="row p-3">
      

     
      <b  className='text-success'>{error}</b>
      <h3 className='text-success'>{loading}</h3>

      

      {/* bind the loading and error */}
      {loading}
      {error}

      {filtered_products.map((product)=> (
        <div className="col-md-3 justify-content-center mb-4">
        {/* below div will carry the card that contains a single product */}
        <div className="card shadow">
            <img src={img_url + product.product_photo} className="product_img mt-4" alt="" />

           

            {/* below is the card body */}
            <div className="card-body">
              <h5 className='mt-2 text-danger'>{product.product_name}</h5>
              <p className='text-muted'>{product.product_description.slice(0, 50)}...</p>
              <b className='text-warning'>Kes {product.product_cost}</b> <br /> <br />
               <b className='btn btn-info' onClick={() => navigate("/makepayment",{state : {product}})}>Buy Now</b>
              
            </div>
        </div>
        </div>
      ))}

       
    </div>
    {/* bind footer */}
    <Footer/>
   </div>
  )
}

export default Getproducts