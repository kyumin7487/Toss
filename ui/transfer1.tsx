import Image from "next/image";

export default function TransferService({
                                            icon,
                                            category,
                                            title,
                                            comment,
                                            image,
                                            imageAlign = "left"
                                        }: {
    icon: string;
    category: string;
    title: string;
    comment: string;
    image: string;
    imageAlign: "left" | "right";
}) {
    return (
        <div className={`max-w-[1076px] flex flex-col items-center justify-between gap-8 lg:gap-16 ${imageAlign === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
            <div className="flex flex-col">
                <div className="flex items-center mb-1.5 lg:mb-2.5">
                    <Image width={24} height={24} src={icon} alt="transfer service icon" className="mr-1" />
                    <p className="text-category-blue text-sm lg:text-xl font-semibold">{category}</p>
                </div>
                <div>
                    <p className="text-[#333D4B] text-2xl lg:text-[40px] font-bold mb-2.5 lg:mb-5"
                       dangerouslySetInnerHTML={{ __html: title }} />
                </div>
                <div>
                    <p className="text-[#6b7684] text-sm lg:text-[22px] font-semibold"
                       dangerouslySetInnerHTML={{ __html: comment }} />
                </div>
            </div>
            <div>
                <Image width={508} height={385} src={image} alt="transfer service" />
            </div>
        </div>
    );
}