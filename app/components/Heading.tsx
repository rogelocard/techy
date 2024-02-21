interface HeadingProps{
    tittle: string,
    center?: boolean
}

const Heading: React.FC<HeadingProps> = ({tittle, center}) => {
  return (
    <div className={center? 'text-center' : 'text-start'}>
        <h1 className="font-bold text-2xl">{tittle}</h1>
    </div>
  )
}

export default Heading