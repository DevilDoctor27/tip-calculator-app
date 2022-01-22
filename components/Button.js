export default ({ value, active, action }) => {
  // Percent will change on button click

  return (
    <button
      className={` ${
        active
          ? 'bg-clr-accent text-clr-primary'
          : 'bg-clr-primary text-white hover:bg-clr-section-hover transition-colors duration-200 hover:text-clr-primary'
      } w-full  font-bold rounded-md py-2 text-2xl uppercase `}
      type="button"
      onClick={action}
      value={value}
    >
      {value}%
    </button>
  )
}
