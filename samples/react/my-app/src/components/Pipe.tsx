type PipeProps = {
  x: number
  gapY: number
}

const PIPE_WIDTH = 60
const GAP = 130
const GAME_HEIGHT = 400

export default function Pipe({ x, gapY }: PipeProps) {
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: x,
          top: 0,
          width: PIPE_WIDTH,
          height: gapY,
          background: "green"
        }}
      />

      <div
        style={{
          position: "absolute",
          left: x,
          top: gapY + GAP,
          width: PIPE_WIDTH,
          height: GAME_HEIGHT,
          background: "green"
        }}
      />
    </>
  )
}