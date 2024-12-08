const Banner = () => {
  return (
    <>
      <div className="carousel w-full h-[500px] md:h-[600px]">
        <div id="item1" className="carousel-item bg-bannerOne w-full bg-cover">
          <div className="flex flex-col my-auto text-left pl-5">
            <h1 className="text-4xl text-white font-extrabold">
              Deadpool vs. Wolverine
            </h1>
            <p className="font-normal text-gray-400 text-sm my-5 w-6/12">
              The Merc with a Mouth clashes with the clawed mutant in this epic
              battle of wit and brutality. When a shadowy organization
              manipulates both heroes into a deadly confrontation, Deadpool's
              wisecracks meet Wolverine's berserker rage in a chaotic showdown
              that forces them to decide: are they enemies or reluctant allies?
            </p>
            <button className="text-white btn w-40 border-none bg-red-600 transition-transform transform hover:scale-105">
              Watch Now
            </button>
          </div>
        </div>
        <div id="item2" className="carousel-item bg-bannerTwo w-full bg-cover">
          <div className="flex flex-col my-auto text-left pl-5">
            <h1 className="text-4xl text-white font-extrabold">
              The Meg (2018)
            </h1>
            <p className="font-normal text-gray-400 text-sm my-5 w-6/12">
              A prehistoric 75-foot-long megalodon shark emerges from the depths
              of the Mariana Trench, threatening humanity. A rescue diver, Jonas
              Taylor, must confront his fears and stop the terrifying predator
              before it wreaks havoc on the open seas.
            </p>
            <button className="text-white btn w-40 border-none bg-red-600 transition-transform transform hover:scale-105 ">
              Watch Now
            </button>
          </div>
        </div>
        <div
          id="item3"
          className="carousel-item bg-BannerThree w-full bg-no-repeat bg-cover"
        >
          <div className="flex flex-col my-auto text-left pl-5">
            <h1 className="text-4xl text-white font-extrabold">
              Kong: Skull Island (2017)
            </h1>
            <p className="font-normal text-gray-400 text-sm my-5 w-6/12">
              In the 1970s, a team of explorers and soldiers ventures to the
              uncharted Skull Island, home to colossal creatures and the mighty
              Kong. Struggling to survive, the group discovers Kong is not their
              only threat on this mysterious and deadly island.
            </p>
            <button className="text-white btn w-40 border-none bg-red-600 transition-transform transform hover:scale-105">
              Watch Now
            </button>
          </div>
        </div>
        <div
          id="item4"
          className="carousel-item bg-BannerFour w-full bg-no-repeat bg-cover"
        >
          <div className="flex flex-col my-auto text-left pl-5">
            <h1 className="text-4xl text-white font-extrabold">
              Godzilla vs. Kong (2021)
            </h1>
            <p className="font-normal text-gray-400 text-sm my-5 w-6/12">
              Legends collide as Godzilla and Kong face off in an epic battle
              for supremacy. While humanity watches in awe, a hidden conspiracy
              threatens to unleash a more dangerous force, pushing the two
              titans to a reluctant alliance.
            </p>
            <button className="text-white btn w-40 border-none bg-red-600 transition-transform transform hover:scale-105">
              Watch Now
            </button>
          </div>
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
    </>
  );
};

export default Banner;
