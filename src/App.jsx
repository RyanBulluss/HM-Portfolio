import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import Details from "./Details";

function App() {
  return (
    <div className="bg-gray-100 min-h-[100vh]">
      <div className="h-[120px] flex mx-[3%]">
        <div className="w-1/3 h-full flex items-center gap-6 text-md">
          <a href="">ABOUT ME</a>
          <a href="" className="font-semibold">WORK</a>
          <a href="">CONTACT</a>
        </div>
        <div className="w-1/3 h-full flex justify-center">
          <a href="">
            <img
              className="h-[120px] ml-3"
              src="https://cdn.myportfolio.com/8602d74a-2f44-4984-98f4-1d6af02cd812/4b91dff5-29fb-4355-840e-cac932466a0b_rwc_582x554x1222x1222x4096.png?h=0e948e7ce62efc06da04e5ad56401be1"
              alt="logo"
            />
          </a>
        </div>
        <div className="w-1/3 h-full flex justify-end items-center mr-2 gap-6">
          <a href="">
            <FaLinkedin />
          </a>
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="h-[246px] flex flex-col items-center py-14 gap-5">
        <h1 className="text-4xl">Hanorah’s Studio</h1>
        <h2 className="font-medium text-lg">Keep scrolling to explore my portfolio!</h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 sm:mx-8 md:mx-14 transition duration-200">
      <Details text={'ILLUSION'} color={'bg-pink-300'} link={''} />
      <Details text={'PREVENT TYPE 2'} color={'bg-blue-400'} link={''} />
      <Details text={'A DOSE OF REALITY WHAT HAPPENS TO DOGS IN SHELTERS'} color={'bg-gray-300'} link={''} />
      <Details text={'SHY FX ESSENTIAL ALBUM'} color={'bg-black'} link={''} />
    
      </div>
    </div>
  );
}

export default App;
