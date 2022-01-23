const DisplayField = ({ type, value }) => {
  return (
    <div className="flex flex-col xs:flex-row items-center justify-between pt-4 md:pt-0 relative">
      <div>
        <p className="text-white font-bold text-md md:text-lg">{type}</p>
        <p className="text-clr-secondary text-sm md:text-base">/ person</p>
      </div>
      <p className="text-4xl font-bold text-clr-accent absolute right-0 bg-clr-primary">
        ${value}
      </p>
    </div>
  )
}
export default DisplayField
