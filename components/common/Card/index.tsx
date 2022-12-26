type Props = {
  title: string
  score: number
  imageUrl: string
}

const Card = (props: Props) => {
  const { title, score, imageUrl } = props
  const cardWrapper =
    "relative inline-block drop-shadow-md bg-cover bg-center bg-gradient-to-b from-white/50 via-black/20 to-black/80"
  const image =
    "w-[152px] h-[201px] rounded-[4px] drop-shadow-md mix-blend-overlay"
  const scroe =
    "bg-linearBackground w-[33px] rounded-[4px] text-center absolute bottom-2 right-0.5"
  return (
    <div className="inline-block mx-2 my-8">
      <div className={cardWrapper}>
        <img src={imageUrl} alt="" className={image} />
        <div className={scroe}>{score}</div>
      </div>
      <div className="text-center">{title}</div>
    </div>
  )
}

export default Card
