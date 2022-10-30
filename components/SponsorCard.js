import Image from "next/image"

export default function SponsorCard(props){
    return(
        <div className="w-[326px] sm:w-[303px] h-[132px] sm:h-[124px] mx-[20px] sm:mx-[57.03px] my-[16.2px] flex justify-center items-center bg-white/60">
            <div>
                <Image src={props.src} width={200} height={props.height} alt="sponsors" />
            </div>
        </div>
    )
}