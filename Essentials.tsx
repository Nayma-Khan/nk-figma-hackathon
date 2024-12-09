import Image from 'next/image';

export default function Sixth() {
  return (
    <>
      <div className="m-4 wrapper mt[100px]">
        <p>The Essentials</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-5 wrapper">
        <Image src="/E1.png" alt="icon" height={540} width={440} className="md:w-1/3" />
        <Image src="/E2.png" alt="icon" height={540} width={440} className="md:w-1/3" />
        <Image src="/E3.png" alt="icon" height={540} width={440} className="md:w-1/3" />
      </div>
    </>
  );
}