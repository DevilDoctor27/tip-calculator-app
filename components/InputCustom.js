export default ({ value, action, active, blurAction }) => {
  return (
    <div>
      <input
        type="number"
        className={`bg-clr-input w-full rounded-md text-right  px-4 py-1.5 capitalize text-clr-primary font-bold appearance-none active:outline-2 outline-clr-accent placeholder:text-clr-placeholder cursor-pointer text-xl ${
          active && 'outline active:outline-2'
        }`}
        placeholder="custom"
        value={value}
        onChange={action}
        onBlur={blurAction}
      />
    </div>
  )
}
