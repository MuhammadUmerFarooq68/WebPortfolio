import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { gsap } from "gsap";
import p1 from '../public/p1.png';
import p2 from '../public/p2.png';
import p3 from '../public/p3.png';
import p5 from '../public/p5.png'
// import p3 from '../public/p3.webp';
// import p4 from '../public/p4.png';
// import p6 from '../public/p6.png';

const Projectpage = () => {
  useEffect(() => {
    gsap.fromTo(
      ".gallery-img",
      { opacity: 0 },
      { opacity: 1, duration: 2, stagger: 0.3 }
    );
  }, []);

  return (
    <>
      <Navbar />
      <section className="text-white text-xs md:text-lg">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="md:flex flex-wrap">
            <div className="flex flex-wrap md:w-1/2">
              <div className="relative md:p-2 p-1 w-1/2">
                <img
                  alt="Ecommerce Api"
                  className="gallery-img w-full object-cover h-full object-center block"
                  src={p2}
                />
                <div className="overlay justify-center cursor-pointer">
                  <p className="p-4 tracking-wide">Ecommerce Api's</p>
                  <button type="button" class="text-black bg-white font-medium text-sm px-2 py-1 md:px-5 md:py-2.5">
                    <a href="https://github.com/MuhammadUmerFarooq68/E-commerce-store" target="_blank" rel="noopener noreferrer">Explore</a>
                  </button>
                </div>
              </div>
              <div className="relative hidden md:p-2 p-1 w-1/2"></div>
              <div className="relative md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="gallery-img w-full object-cover h-full object-center block"
                  src={p5}
                />
                <div className="overlay justify-center cursor-pointer">
                  <p className="p-4 tracking-wide">Auction_system</p>
                  <button type="button" class="text-black bg-white font-medium text-sm px-2 py-1 md:px-5 md:py-2.5">
                    <a href="https://github.com/umerfarooq-68/auction_system-backend-only-" target="_blank" rel="noopener noreferrer">Explore</a>
                  </button>
                </div>
              </div>
              <div className="relative md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="gallery-img w-full h-full object-cover object-center block"
                  src={p1}
                />
                <div className="overlay justify-center cursor-pointer">
                  <p className="p-4 tracking-wide">Crypto-by-umer</p>
                  <button type="button" class="text-black bg-white font-medium text-sm px-2 py-1 md:px-5 md:py-2.5">
                    <a href="https://github.com/MuhammadUmerFarooq68/crypto-by-umer" target="_blank" rel="noopener noreferrer">Explore</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap md:w-1/2">
              <div className="relative md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="gallery-img w-full h-full object-cover object-center block"
                  src={p3}
                />
                <div className="overlay justify-center cursor-pointer">
                  <p className="p-4 tracking-wide">Real Time Whiteboard</p>
                  <button type="button" class="text-black bg-white font-medium text-sm px-2 py-1 md:px-5 md:py-2.5">
                    <a href="https://github.com/umerfarooq-68/whiteboard" target="_blank" rel="noopener noreferrer">Explore</a>
                  </button>
                </div>
              </div>
              {/* <div className="relative md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="gallery-img w-full object-cover h-full object-center block"
                  // src={p6}
                />
                <div className="overlay justify-center cursor-pointer">
                  <p className="p-4 tracking-wide">A simple music system with HTML, CSS and JS, aligned with the theme of Spotify.</p>
                  <button type="button" class="text-black bg-white font-medium text-sm px-2 py-1 md:px-5 md:py-2.5">
                    <a href="https://spotifyreplica.vercel.app/" target="_blank" rel="noopener noreferrer">Explore</a>
                  </button>
                </div>
              </div> */}
              {/* <div className="relative md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="gallery-img w-full object-cover h-full object-center block"
                  // src={p4}
                />
                <div className="overlay justify-center cursor-pointer">
                  <p className="p-4 tracking-wide">An innovative fire prediction system desiged using advanced machine learning algorithms.</p>
                  <button type="button" class="text-black bg-white font-medium text-sm px-2 py-1 md:px-5 md:py-2.5">
                    <a href="https://github.com/umerfarooq-68" target="_blank" rel="noopener noreferrer">Explore</a>
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projectpage;
