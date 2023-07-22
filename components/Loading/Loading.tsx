// type Props = {
//   text: string
//   disabled: boolean
//   onClick: () => void
// }
import Spinner from '../../assets/spinner.gif'
import Image from "next/image"

const Loading = () => {
  return (
    <div>
       <Image 
          className="" 
          src={Spinner} 
          alt="logo"
        />
    </div>
)}

export default Loading