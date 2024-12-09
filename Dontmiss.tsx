import Image from "next/image"

export default function Third(){
    return(
        <div className="Wrapper">
            <div className="wrapper">
                <p>Don't Miss</p>
            </div>

<div>
<Image className="wrapper" src="/man.png" alt='icon' height={700} width={1344}/>
</div>

<div className="wrapper">
    <h1>FLIGHT ESSENTIAL</h1>
    <p>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
<button>Shop</button>

</div>

        </div>
    )
}