const Footer = () => {
    return (
    <div>
        <section className="row  mt-4 footer-background-color success ">
            <div className="col-md-4 text-left text-light">
                <h5 className="p-2 text-center text-info">About Us</h5>
                <p className="text-light">Freshness You Can Trust. Convenience You Deserve.

At TOWNTREATSGROCERIES, we’re more than just a grocery store — we’re your neighbor, your pantry partner, and your go-to for everything fresh, local, and delicious. Since [Year], we’ve been committed to bringing you high-quality products, friendly service, and a shopping experience you can feel good about.

Whether you're stocking up on everyday essentials, hunting for the perfect produce, or exploring new flavors, our shelves are packed with a carefully curated selection of fresh fruits and vegetables, dairy, pantry staples, organic items, and locally sourced goods.

</p>
                <p className="text-secondary"></p>
                <br/>
            </div>
            <div className="col-md-4 text-light">
                <h5 className="p-2 text-center text-info">Reach Us Out</h5>
                <input className="form-control" type="email" placeholder="Enter your email"/>
                <br/>
                <textarea className="form-control" rows="7" placeholder="Leave a comment"></textarea>
                <br/>
                <input type="submit" value="Send Message" className="btn btn-primary"/>
            </div>
            <div className="col-md-4 ">
                <h4 className="text-center text-info">Connect With Us</h4>
                <br/>
                <a href="https://facebook.com">
                <img src="images/fb.png" alt="" className="socialspictures"/>
                </a>
                <a href="https://instagram.com">
                <img src="images/ig.jpeg" alt="" className="socialspictures"/>
                </a>
                <p className=" text-light">With convenient shopping options — including in-store, curbside pickup, and home delivery — we make it easy to get what you need, when you need it.

At [Your Grocery Store Name], we believe in supporting our community, minimizing our environmental footprint, and making good food accessible to everyone.

Thank you for letting us be a part of your table.</p>
            </div>
        </section>
        <footer className="text-white text-center p-2 mt-2 bootom-footer">
                <h5>Developed by Paul Andera &copy; 2025.All rights reserved</h5>
        </footer>
    </div>
    );
    }
     
   
    export default Footer;
