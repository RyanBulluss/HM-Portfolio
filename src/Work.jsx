import Details from "./Details";
import pt2 from './images/HP1.png'
import illusion from './images/HP2.png'

export default function Work() {

    return (
        <>
      <div className="h-[160px] md:h-[246px] flex flex-col items-center py-6 md:py-14 gap-5">
        <h1 className="text-4xl">Hanorah’s Studio</h1>
        <h2 className="font-medium text-lg">Keep scrolling to explore my portfolio!</h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 sm:mx-8 md:mx-14 transition duration-200">
      <Details text={'ILLUSION'} color={'bg-[#e2b8d7]'} link={''} image={illusion} />
      <Details text={'PREVENT TYPE 2'} color={'bg-[#71bbfb]'} link={''} image={pt2} />
      {/* <Details text={'A DOSE OF REALITY WHAT HAPPENS TO DOGS IN SHELTERS'} color={'bg-gray-300'} link={''} />
      <Details text={'SHY FX ESSENTIAL ALBUM'} color={'bg-black'} link={''} /> */}
    
      </div>
        </>
    )
}