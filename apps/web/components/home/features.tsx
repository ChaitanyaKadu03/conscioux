import { featuresConst, featuresHeadingConst } from "@repo/constants/web";
import { IFeaturesConst } from "@repo/types/web.js";
import Image from "next/image";
import TopHeading from "../sub-components/topHeading";

const Features = () => {
    return (
        <div className="px-section py-section flex flex-col gap-12 items-center">
            <TopHeading h4={featuresHeadingConst.h4} h2={featuresHeadingConst.h2} h6={featuresHeadingConst.h6}/>
            {featuresConst.map((info: IFeaturesConst) => {
                return (
                    <div key={info.id} className={`flex ${parseInt(info.id) % 2 != 0 ? "flex-row" : "flex-row-reverse"} justify-between items-center`}>
                        <div className={`flex flex-col gap-4 ${parseInt(info.id) % 2 != 0 ? "text-left" : "text-right items-end"}`}>
                            <h2 className="h2">{info.title}</h2>
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