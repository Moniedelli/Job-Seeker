
'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';

function CarouselComponent() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <Image src="https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg" width={10000} height={10000}/>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <Image src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg" width={10000} height={10000}/>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <Image src="https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg" width={10000} height={10000}/>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;