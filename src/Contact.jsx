export default function Contact() {
  return (
    <div className="max-w-[600px] flex flex-col items-center gap-4 md:gap-8 px-4 mx-auto my-[40px]">
      <h1 className="text-center text-2xl md:mt-4 font-semibold">Contact</h1>
      <p className="text-center text-gray-600">Please fill out the quick form and I will be in touch as soon as I can!</p>
      <form className="flex flex-col gap-4 my-8 w-full" action="">
        <div>
            <label className="font-bold" htmlFor="">Name *</label>
            <input type="text" className="border p-2 mt-1 w-full rounded-md" 
            placeholder="Your Name..."/>
        </div>
        <div>
            <label className="font-bold" htmlFor="">Email Address *</label>
            <input type="text" className="border p-2 mt-1 w-full rounded-md" 
            placeholder="Your Name..."/>
        </div>
        <div>
            <label className="font-bold" htmlFor="">Message *</label>
            <textarea type="text" rows={6} className="border p-2 mt-1 w-full rounded-md" 
            placeholder="Your Name..."/>
        </div>
        <button className="bg-black hover:bg-black/70 duration-300 rounded-full w-28 py-2 text-white">
            Submit
        </button>
      </form>
    </div>
  );
}
