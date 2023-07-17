import React from "react";
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from 'react-icons/ai'; 

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechWhiz.</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

      <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nostrum
            itaque, veritatis dolorem voluptatem provident consequuntur,
            deleniti incidunt expedita hic, tempora amet pariatur assumenda in
            inventore voluptate aspernatur labore esse. Molestiae?
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiisofficiis hic illo quos sit commodi, aut magnam odio eligendi? Totamquis officiis fugit sunt dolores nostrum tenetur iusto est odiomollitia. Dolor placeat repellendus officia aspernatur dolorumharum. Dolorem cumque quaerat eius qui deserunt ullam laudantiumquia tempore. Dignissimos esse sequi numquam est ipsam nemo,voluptas vel recusandae iste aspernatur qui quasi, commodi, atqueipsa dolores tempore asperiores? Dolores soluta placeat molestiaeaperiam, ullam officia fugiat corrupti odio, suscipit ipsum cum velnemo. Ratione quo tempore fugit quaerat! Facilis beatae impeditsimilique maxime praesentium sunt unde necessitatibus voluptatesipsa, et, numquam reiciendis eveniet? Aliquid nemo nesciunt placeat,qui fuga quae repellat sunt, non natus, iure ab officia rem ipsa cumsed cumque corporis voluptate quibusdam nostrum quod saepe
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>

            <article>
                <div style={{
                    animationDelay: "0.3s"
                }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div> 

                <div style={{
                    animationDelay: "0.5s"
                }}>  
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>

                <div style={{
                    animationDelay: "0.7s"
                }}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>

                <div style={{
                    animationDelay: "0.9s"
                }}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
      </div>
    </>
  );
};

export default Home;
