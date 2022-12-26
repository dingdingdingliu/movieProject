import React from "react"
type Props = {
  title: string
}

const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex items-center h-6 w-11">
      <span className="bg-linearBackground h-full w-[3px] mr-2 rounded-[50px]" />
      <p className="text-white whitespace-nowrap">{title}</p>
    </div>
  )
}

export default SectionTitle
