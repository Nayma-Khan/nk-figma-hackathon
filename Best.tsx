import React from 'react';
import Image from 'next/image';

const Best = () => {
  return (

    <div className="wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-[132px]">
      {/* Product 1 */}
      <div className="relative group">
        <Image
          src="/img.png"
          alt="Nike Air Max Pulse"
          layout="responsive"
          width={4444}
          height={2107}
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white group-hover:opacity-100">
          <p>Nike Air Max Pulse</p>
          <p>₹ 13,995</p>
          <h1>Women's Shoes</h1>
        </div>
      </div>

      {/* Product 2 */}
      <div className="relative group">
        <Image
          src="/imgt.png"
          alt="Nike Air Max Pulse"
          layout="responsive"
          width={4444}
          height={2107}
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white group-hover:opacity-100">
          <p>Nike Air Max Pulse</p>
          <p>₹ 13,995</p>
          <h1>Men's Shoes</h1>
        </div>
      </div>

      {/* Product 3 */}
      <div className="relative group">
        <Image
          src="/imgth.png"
          alt="Nike Air Max 97 SE"
          layout="responsive"
          width={4444}
          height={2107}
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white group-hover:opacity-100">
          <p>Nike Air Max 97 SE</p>
          <p>₹ 16,995</p>
          <h1>Men's Shoes</h1>
        </div>
      </div>
    </div>
  );
};

export default Best;