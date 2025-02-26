function Hero(){
    return(
        <div>
        <div class="flex flex-col bg-[#c2ece4] p-4 rounded-md mt-8 gap-4 pb-12 relative">
        <h1 class="text-6xl font-medium">Build Your Ideal Body</h1>
        <p class="text-md">Best workout tools created by leading fitness and sports experts fit for every purpose and experience</p>

        <div class="flex gap-4 ">
          <button className="rounded-full border-none ring ring-black ring-1 px-4 py-2 w-1/2">Download App</button>
          <button class="rounded-full border-none px-4 py-2 bg-black text-white w-1/2 ">Get started</button>
        </div>
      </div>
      <div class=" -mt-4 z-10 mr-0 flex justify-end ">
        <div class="bg-white -mt-2 z-100 mr-0 flex justify-end z-10 h-10 rounded-l-full ">
           <div class="invisible w-42 -mt-8">h</div>
          </div>
        </div>
        </div>
        
    );
}

export default Hero;