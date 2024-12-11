import { workConst } from '@repo/constants/web'

const Work = () => {
  return (
    <div>
      {workConst.map((info) => {
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

export default Work