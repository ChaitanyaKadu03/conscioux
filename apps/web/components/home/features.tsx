import { featuresConst } from "@repo/constants/web";

const Features = () => {
    return (
        <div className="px-section py-section flex flex-row">
            {featuresConst.map((info) => {
                return (
                    <div key={info.id} className="flex flex-col gap-4">
                        <h3 className="h6">{info.title}</h3>
                        <p className="p2">{info.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Features;