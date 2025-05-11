import Link from "next/link";
import { type MouseEventHandler } from "react";
export default function NavigationItem({
   className="",
   name,
   url="",
   onClick=undefined
}:{
    className?:string,
    name:string,
    url?:string,
    onClick?:MouseEventHandler<HTMLDivElement>|undefined
}){
    return (
        <div onClick={onClick}
             className={`${className} hover:cursor-pointer inline-block px-5 py-2.5 text-15px text-[#4e5968] hover:bg-gray-100 hover:rounded-lg hover:text-category-blue`}>
            {onClick?
                <p className="inline">{name}</p>
                :
                <Link href={url}>{name}</Link>
            }
        </div>
    );
}