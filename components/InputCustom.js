export default ({ value, action, blurAction }) => {
  return (
    <div className="h-full py-1">
      <input
        type="number"
        className="bg-clr-input h-full  w-full rounded-md text-right  px-4 py-1.5 capitalize text-clr-primary font-bold appearance-none focus:outline-2 focus:outline outline-clr-accent placeholder:text-clr-placeholder cursor-pointer text-xl"
        placeholder="custom"
        value={value}
        onChange={action}
        onBlur={blurAction}
      />
    </div>
  )
}
