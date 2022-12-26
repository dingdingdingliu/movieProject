import type { NextPage } from "next"
import SectionTitle from "../components/common/SectionTitle"
import {
  ColorChangeButton,
  ColorChangeBorderButton,
  ColorButton
} from "../components/common/Button"
import Card from "../components/common/Card"

const IndexPage: NextPage = () => {
  return (
    <div className="bg-opacityBackground h-screen">
      <SectionTitle title="類型" />
      <ColorChangeButton buttonTitle="2022" styleSize="sm" isActive={true} />
      <ColorChangeButton buttonTitle="2021" styleSize="sm" isActive={false} />
      <ColorChangeBorderButton buttonTitle="加入片單" isActive={true} />
      <ColorChangeBorderButton buttonTitle="更多資訊" isActive={false} />
      <div className="w-40 h-12">
        <ColorButton buttonTitle="2022" />
      </div>
      <Card
        title="天能"
        score={7.7}
        imageUrl="https://s.yimg.com/ny/api/res/1.2/W.EUB2AF2aPUkJV8Zoo3AA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTk0OA--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-07/753bda10-bc25-11ea-9f9d-f6dd8a70fc6b"
      ></Card>
      <Card
        title="天能"
        score={7.7}
        imageUrl="https://s.yimg.com/ny/api/res/1.2/W.EUB2AF2aPUkJV8Zoo3AA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTk0OA--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-07/753bda10-bc25-11ea-9f9d-f6dd8a70fc6b"
      ></Card>
    </div>
  )
}

export default IndexPage
