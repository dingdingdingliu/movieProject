import type { NextPage } from 'next'
import SectionTitle from "../components/common/SectionTitle"
import { ColorChangeButton, ColorChangeBorderButton, ColorButton } from "../components/common/Button"

const IndexPage: NextPage = () => {
  return (
    <div className="bg-opacityBackground h-screen">
			<SectionTitle title="類型"/>
			<ColorChangeButton buttonTitle="2022" styleSize="sm" isActive={true}/>
			<ColorChangeButton buttonTitle="2021" styleSize="sm" isActive={false}/>
			<ColorChangeBorderButton buttonTitle="2022" isActive={true}/>
			<ColorChangeBorderButton buttonTitle="2021" isActive={false}/>
			<div className="w-40 h-12">
				<ColorButton buttonTitle="2022"/>
			</div>
    </div>
  )
}

export default IndexPage
