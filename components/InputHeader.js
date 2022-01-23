const InputHeader = ({ type, error }) => {
  return (
    <h2 className="font-bold text-clr-secondary flex flex-col md:flex-row justify-between">
      <p>{type}</p>
      {error && <p className="text-clr-error">Can{"'"}t be zero</p>}
    </h2>
  )
}
export default InputHeader
