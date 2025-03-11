/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <div className="shape-container overflow-hidden">
        <div className="bg-primary-dark position-relative">
          <div className="container content-space-1 content-space-t-md-3 sb-md-4">
            <div className="position-relative w-lg-75 text-center mx-lg-auto">
              <div className="mb-7">
                <h1 className="text-white">
                  Our <span className="text-warning">Origin Story</span>
                </h1>
                <p className="lead text-white-70">
                  Learn how we have grown over the years
                </p>
              </div>
              {/* End Row */}
              {/* Background Shapes */}
              <div
                className="position-absolute"
                style={{ top: "-6rem", left: "-6rem" }}
              >
               
              </div>
              <div
                className="position-absolute"
                style={{ bottom: "-12rem", right: "-7rem" }}
              >
                
              </div>
              {/* End Background Shapes */}
            </div>
          </div>
        </div>
        {/* Shape */}
        <div className="shape shape-bottom zi-1">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
            <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z" />
          </svg>
        </div>
        {/* End Shape */}
      </div>
      {/* End Hero */}
    </>
  );
};

export default Hero;
