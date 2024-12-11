import { featuresConst } from "@repo/constants/web";

const Features = () => {
    return (
        <div>
            {featuresConst.map((info) => {
                return (
                    <div key={info.id}>
                        <h3>{info.title}</h3>
                        <p>{info.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Features;