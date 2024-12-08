const Banner = () => {

  return (
    <>
      <div className="carousel w-full h-[500px] md:h-[600px]">
        <div id="item1" className="carousel-item bg-bannerOne w-full bg-cover">
          <h1 className="">hey</h1>

        </div>
        <div id="item2" className="carousel-item bg-bannerTwo w-full bg-cover">
          <h1>hey</h1>
        </div>
        <div id="item3" className="carousel-item bg-BannerThree w-full bg-no-repeat bg-cover">
          <h1>hey</h1>
        </div>
        <div id="item4" className="carousel-item bg-BannerFour w-full bg-no-repeat bg-cover">
          <h1>hey</h1>
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>

      {/* <div className="carousel w-full h-[500px] md:h-[600px]">
        <div className="carousel-item relative w-full">
          {/* Background Image */}
          {/* <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div> */}

          {/* Text Overlay */}
          {/* <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-6 text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1>
            <p className="text-base md:text-lg mt-4">{slide.description}</p>
          </div> */} 
        {/* </div> */}
      {/* </div> */}


    </>
  );
};

export default Banner;
