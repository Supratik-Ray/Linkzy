import Navbar from "../components/Navbar";
import { Copy, Settings, BarChart } from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-dot-matrix flex flex-col">
      <Navbar />
      <main className="flex-1 flex justify-center items-center flex-col w-full max-w-175 mx-auto">
        <h1 className="text-5xl text-neon-glow font-bold mb-6">
          Short Links. Big Impact.
        </h1>
        <p className="text-gray-muted text-xl max-w-175 text-center mb-8">
          Developer-first URL shortening and link management. High-speed,
          secure, and built for precision tracking.
        </p>

        <div className="w-full  relative mb-8">
          <input type="text" className="p-4 w-full h-20  rounded-md" />
          <button className="btn-neon absolute py-4 top-1/2 transform -translate-y-1/2 right-4">
            Shorten
          </button>
        </div>

        <div className="card w-full ">
          <div className="pb-4 border-b border-b-gray-muted mb-8">
            <h3 className="uppercase text-gray-muted text-sm font-bold">
              Original url
            </h3>
            <p>https://github.com/developer/very-long-repository</p>
          </div>
          <div className="mb-12">
            <h3 className="uppercase text-neon-green text-sm font-bold">
              Short url
            </h3>
            <div className="relative">
              <input
                type="text"
                className="w-full bg-black-primary rounded-md p-4 text-neon-glow border border-lime-electric"
              />
              <span className="absolute top-1/2 transform -translate-y-1/2 right-4">
                <Copy />
              </span>
            </div>
          </div>
          <div className="flex  gap-8">
            <div className="text-gray-muted flex gap-2">
              <span>
                <BarChart />
              </span>
              Stats
            </div>
            <div className="text-gray-muted flex gap-2">
              <span>
                <Settings />
              </span>
              Customize
            </div>
          </div>
        </div>
        {/* <div className="loader-neon"></div> */}
      </main>
    </div>
  );
}

export default Home;
