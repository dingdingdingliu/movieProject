import React, { useState } from "react"
type ColorChangeButtonProps = {
	buttonTitle: string,
	styleSize: string,
	isActive: boolean
}

type ColorChangeBorderButtonProps = {
	buttonTitle: string,
	isActive: boolean
}

type ColorButtonProps = {
	buttonTitle: string
}

export const ColorChangeButton: React.FC<ColorChangeButtonProps> = ({buttonTitle, styleSize, isActive}) => {
	const paddingStyle = styleSize === 'sm' ? 'px-5 py-1' : 'px-9 py-1.5'
	const backgroundStyle = isActive ? 'bg-linearBackground' : 'bg-black'
  return (
    <div className={`${paddingStyle} ${backgroundStyle} cursor-pointer w-auto rounded-md inline-block`}>
			<p className="text-sm text-white">{buttonTitle}</p>
    </div>
  )
}

export const ColorChangeBorderButton: React.FC<ColorChangeBorderButtonProps> = ({buttonTitle, isActive}) => {
	const paddingStyle = isActive ? 'px-[37px] py-2.5' : 'px-[36px] py-2'
	const backgroundStyle = isActive ? 'bg-linearBackground' : 'bg-black'
	const borderStyle = isActive ? 'bg-transparent' : 'bg-linearBackground'
	const marginStyle = isActive ? 'm-0' : 'm-0.5'
  return (
		<div className={`${borderStyle} cursor-pointer w-auto rounded-md inline-block`}>
			<div className={`${paddingStyle} ${backgroundStyle} rounded-md ${marginStyle}`}>
				<p className="text-sm text-white">{buttonTitle}</p>
    	</div>
		</div>
  )
}

export const ColorButton: React.FC<ColorButtonProps> = ({buttonTitle}) => {
  return (
			<div className="flex justify-center items-center bg-linearBackground rounded-md w-full h-full">
				<p className="text-sm text-white">{buttonTitle}</p>
    	</div>
  )
}
