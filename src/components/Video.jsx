function Video(){
    return(
        <div class="flex flex-col mt-8 gap-4 items-center">
        <h1 class="font-medium text-3xl">Exercise Video Library</h1>
        <p class="text-center">Our comprehensive videos and instructions show you how to perform exercises using correct technique for the best result.</p>

        <div class="relative animate-pulse">
          <button class="rounded-full border-none ring ring-1 px-10 py-2 w-3/4 font-medium w-full ">View Exercises</button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 absolute -mt-8 ml-2 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
          </svg>
      </div>
        
       </div>

    );
}

export default Video;