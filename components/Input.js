import Image from 'next/image'

const Input = ({ value, error, action, blurAction, focusAction, icon }) => {
  return (
    <div className="relative z-10">
      {icon && (
        <div className="absolute z-20 left-4 inset-y-0 flex items-center">
          <Image
            src={icon.src}
            height={icon.height}
            width={icon.width}
            alt="icon"
          />
        </div>
      )}
      <input
        type="number"
        className={`bg-clr-input w-full rounded-md text-right text-2xl px-4 py-1.5 capitalize text-clr-primary font-bold appearance-none focus:outline-2 outline-clr-accent focus:outline placeholder:text-clr-placeholder cursor-pointer ${
          error ? 'outline-2 outline-clr-error outline' : ''
        } `}
        value={value}
        onChange={action}
        placeholder="0"
        onFocus={focusAction}
        onBlur={blurAction}
      />
    </div>
  )
}
export default Input
