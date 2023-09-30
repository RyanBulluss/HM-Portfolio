import Details from "./Details";
import prevent from './images/prevent-type.png'
import illusion from './images/illusion.png'
import shelter from './images/dog-shelter.png'
import shy from './images/shy.png'
import reda from './images/reda.png'
import argyll from './images/argyll.png'
import omega from './images/omega.png'
import binary from './images/binary.png'

export default function Work() {

    return (
        <>
      <div className="h-[160px] md:h-[246px] flex flex-col items-center py-6 md:py-14 gap-5">
        <h1 className="text-4xl">Hanorah’s Studio</h1>
        <h2 className="font-medium text-lg">Keep scrolling to explore my portfolio!</h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 sm:mx-4 md:mx-8 lg:mx-14 transition duration-200">
      <Details text={'ILLUSION'} link={''} image={illusion} />
      <Details text={'PREVENT TYPE 2'} link={''} image={prevent} />
      <Details text={'A DOSE OF REALITY WHAT HAPPENS TO DOGS IN SHELTERS'} link={''} image={shelter} />
      <Details text={'SHY FX ESSENTIAL ALBUM'} link={''} image={shy}/>
      <Details text={'REDA'} link={''} image={reda}/>
      <Details text={'ARGYLL COVENANT'} link={''} image={argyll}/>
      <Details text={'OMEGA DIAGNOSTICS'} link={''} image={omega}/>
      <Details text={'BINARY BOTANICAL COMPETITION WINNER'} link={''} image={binary}/>
      </div>
        </>
    )
}