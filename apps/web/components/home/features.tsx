import { featuresConst } from "@repo/constants/web";
import { IFeaturesConst } from "@repo/types/web.js";
import Image from "next/image";

const Features = () => {
    return (
        <div className="px-section py-section flex flex-col gap-24">
            {featuresConst.map((info: IFeaturesConst) => {
                return (
                    <div key={info.id} className={`flex ${parseInt(info.id) % 2 != 0 ? "flex-row" : "flex-row-reverse"} justify-between items-center`}>
                        <div className={`flex flex-col gap-4 ${parseInt(info.id) % 2 != 0 ? "text-left" : "text-right items-end"}`}>
                            <h3 className="h4">{info.title}</h3>
                            <p className="h6 text-neutral-50 w-[80%]">{info.body}</p>
                        </div>
                        <Image src={info.link} alt={info.title} className="h-[420px] w-fit" width={100} height={100} unoptimized={true}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Features;