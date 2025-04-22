import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Getproducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState('');
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  const navigate = useNavigate();
  const img_url = "https://andera.pythonanywhere.com/static/images/";

  const getproducts = async () => {
    setLoading("Please wait as we retrieve the products...");
    try {
      const response = await axios.get("https://andera.pythonanywhere.com/api/getproducts");
      setProducts(response.data);
      setLoading('');
    } catch (error) {
      setLoading('');
      setError("There was an error encountered");
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

  const filtered_products = products.filter((item) =>
    item.product_name.toLowerCase().includes(search.toLowerCase()) ||
    item.product_description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img src="images/br1.jpeg" alt="Banner 1" className="d-block w-100" height="300px" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/pp1.jpeg" alt="Banner 2" className="d-block w-100" height="300px" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/tm1.jpeg" alt="Banner 3" className="d-block w-100" height="300px" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/ch1.jpeg" alt="Banner 4" className="d-block w-100" height="300px" />
        </SwiperSlide>
      </Swiper>

      <div className="row">
        <div className="col-md-4"></div>
        <h3 className="text-info mt-2">Available Products</h3>
        <div className="col-md-4">
          <input
            type="text"
            placeholder="Search for a product here"
            className="form-control justify-content-center"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-4"></div>
      </div>

      <div className="row p-3">
        {error && <b className="text-danger">{error}</b>}
        {loading && <h3 className="text-success">{loading}</h3>}

        {filtered_products.map((product, index) => (
          <div key={index} className="col-md-3 justify-content-center mb-4">
            <div className="card shadow">
              <img src={`${img_url}${product.product_photo.replace(/^\/+|\/+$/g, '')}`}
              />
              <div className="card-body">
                <h5 className="mt-2 text-danger">{product.product_name}</h5>
                <p className="text-muted">{product.product_description.slice(0, 50)}...</p>
                <b className="text-warning">Kes {product.product_cost}</b>
                <br /><br />
                <button
                  className="btn btn-info"
                  onClick={() => navigate("/makepayment", { state: { product } })}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Getproducts;
