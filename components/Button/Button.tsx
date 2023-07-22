type Props = {
  text: string
  disabled: boolean
  onClick: () => void
}

const Button = ({text, disabled, onClick} : Props) => {



  return (
  <button
    className={`bg-[#9f50ac] select-none font-bold h-[34px] min-w-[120px] rounded-[10px] text-white mr-2 ml-2`}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
)}

export default Button