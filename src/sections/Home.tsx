export const Home = () => {
  
    return (
      <>
        {/* Full-screen header section */}
        <header
          id="home"
          className="min-h-screen flex items-center justify-center relative mb-4">
          
          {/* Background video container */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted>
              <source
                src="/canon-video.mp4"
                type="video/mp4" />
              Your browser does not support the video.
            </video>
          </div>
  
          {/* Overlay text */}
          <div className="absolute z-10 text-5xl p-14
                          md:text-8xl md:p-0 lg:text-8xl lg:p-0">
            <h1 className="outlineText">not the legit Canon website</h1>
          </div>
        </header>
      </>
    );
  };
  