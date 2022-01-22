export default ({ children, action, isActive }) => {
  return (
    <button
      className={`w-full bg-clr-accent font-bold rounded-md py-2 text-2xl uppercase text-clr-primary ${
        isActive
          ? 'opacity-100 hover:bg-clr-section-hover transition-colors duration-200 '
          : 'opacity-20 cursor-not-allowed'
      }`}
      type="button"
      onClick={action}
    >
      {children}
    </button>
  )
}
