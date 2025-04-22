import axios from "axios";
import { useState } from "react"
import Footer from "./Footer";

const Addproduct = () => {
  // initialize the use state
  const [productName, setProductName ] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productPhoto, setProductPhoto] = useState("");

  // Initialize three additional hooks to store the state of your application when the signup button is clicked.
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
 

  // create the function that will handle the submit action
  const uploadProduct = async (e) =>{
    // prevent site from reload
    e.preventDefault();

    // update the loading hook with a message
    setLoading("Please wait as your product is been uploaded...")

    try{
      // create a form data object
      const data = new FormData()

      // append the different details onto the form data
      data.append("product_name", productName);
      data.append("product_description", productDescription);
      data.append("product_cost", productPrice);
      data.append("product_photo", productPhoto);

      // access the api endpoint for adding products
      const response = await axios.post("https://sengi2025.pythonanywhere.com/api/addproduct", data)

      // set loading back to default
      setLoading("");

      // update the success hook with a message
      setSuccess(response.data.message)

      // clear the hooks
      setProductName("");
      setProductDescription("");
      setProductPrice("");
      setProductPhoto("");
    }
    catch(error){
      // set loading back to default
      setLoading("");
      // update the error hook with a new message
      setError(error.message)
    }

  }
  return (
    <div className="row justify-content-center mt-3">
      <div className="col-md-6 card shadow p-3">
        <h3>Welcome to add products page</h3>

        <b className="text-success"> {loading} </b>
        <b className="text-success"> {success} </b>
        <b className="text-danger"> {error} </b>

        <form onSubmit={uploadProduct}>
          <input
          type="text"
          required
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Enter the product name"
          className="form-control" /> <br />

          {/* {productName} */}

          <textarea
          required
          placeholder="Please put in a slight decription of the product"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          className="form-control"></textarea> <br />

          {/* {productDescription} */}

          <input type="number"
          required
          placeholder="Enter the price of the product"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          className="form-control" /> <br />

          {/* {productPrice} */}

          <label> Choose an image for the product </label> <br />
          <input
          type="file"          
          className="form-control"
          accept="/*"
          onChange={(e) => setProductPhoto(e.target.files[0])}
           /> <br />  <br />

           <input type="submit" value="Add product" className="btn btn-info" />

        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Addproduct