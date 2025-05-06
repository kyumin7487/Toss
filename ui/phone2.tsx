import Image from "next/image";

export default function OverlayImages() {
    return (
        <div>
            <Image
                src="/home/home_screen_2.png"
                alt="Home Screen"
                width={342}
                height={741}
                className="absolute top-25 left-33 z-1"
            />
            <Image
                src="/iPhone15_Clay_Shadow_03.png"
                alt="iPhone Frame"
                width={600}
                height={936}
                className="absolute top-0 left-0 z-20"
            />
        </div>
    );
}
