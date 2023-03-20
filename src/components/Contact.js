import React from 'react';
import '../App.css';

function Contact() {

    const mystyle1 = {
        minHeight: '50vh',
        minWidth: '100vw',
        display: 'flex',
        flexDirection: 'column'
    }
    const mystyle2 ={
        //marginTop: 'auto',
        opacity: '0.9',
        backgroundColor: "#205375"
    }
    
    return (
        <div>
        <div className='d-flex'>
            <div className='flex-fill'>
                <img src={'https://img.freepik.com/free-vector/earth-map-countries_1284-34068.jpg'} width={"100%"} height={"100%"} />
            </div>
            <div className="p-4 flex-fill form">
                <h1>Get In Touch</h1>
                <p> Register below </p>
                <p>Tel: 123-456-7890  |  Email: info@mysite.com</p>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput2" className="form-label">FirstName</label>
                    <input type="text" className="form-control" id="exampleFormControlInput2" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput2" className="form-label">SecondName</label>
                    <input type="text" className="form-control" id="exampleFormControlInput2" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className=" btn btn-outline-success rounded-0 d-block ms-auto">Submit</button>
            </div>
        </div>
        <div class=" box"  style={mystyle1}>
  <div className='footer'
          class="text-center text-lg-start text-white"
          style={mystyle2}
          >
    <div class="container p-3 pb-0 ">
      <section class="">
        <div class="row">
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">
              Company name
            </h6>
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet
            </p>
          </div>

          <hr class="w-100 clearfix d-md-none" />


          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Contact us</h6>
            <p><i class="fas fa fa-home mr-3"></i>VNR VJIET, Bachupally, HYDERABAD</p>
            <p><i class="fas fa fa-envelope mr-3"></i> merlions22@gmail.com</p>
            <p><i class="fas fa fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
        </div>
      </section>

     < hr class="my-3"/>

      <section class="p-3 pt-0">
        <div class="row d-flex align-items-center">
          <div class="col-md-7 col-lg-8 text-center text-md-start">
            <div class="p-3">
              © 2022 Copyright: knowyourAccent
            
            </div>
          </div>

          <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            <a
               class="btn btn-outline-light btn-floating m-1 text-white"
               role="button"
               ><i class="fab fa fa-facebook-f"></i
              ></a>

            <a
               class="btn btn-outline-light btn-floating m-1 text-white"
               role="button"
               ><i class="fab fa fa-twitter"></i
              ></a>

            <a
               class="btn btn-outline-light btn-floating m-1 text-white"
               role="button"
               ><i class="fab fa-google"></i
              ></a>

            <a
               class="btn btn-outline-light btn-floating m-1 text-white"
               role="button"
               ><i class="fab fa fa-instagram"></i
              ></a>
          </div>
        </div>
      </section>
    </div>
  </div>

    </div>
    </div>
    )
}

export default Contact;