import Image from "next/image"

export default function Third(){
    return(
        <div className="wrapper mt-[132px]">
            <div>
                <p>Featured</p>
            </div>

<div className="wrapper">
<Image src="/run.png" alt='runimage' height={925} width={1344}/>
</div>

<div className="flex justify-center wrapper mt-[55px] wrapper">
    <div className="items-center">
    <h1>STEP INTO WHAT FEELS GOOD</h1>
    <p>Cause everyone should know the feeling of running in that perfect pair.</p>
<button className="rounded-full bg-black text-white">Find Your Shoe</button>

</div>
</div>

        </div>
    )
}