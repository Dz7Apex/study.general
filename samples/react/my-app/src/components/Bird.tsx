type BirdProps = {
  y: number
}

export default function Bird({ y }: BirdProps) {
  return (
    <div
      style={{
        position: "absolute",
        left: 80,
        top: y,
        width: 30,
        height: 30,
        background: "yellow",
        borderRadius: "50%"
      }}
    />
  )
}