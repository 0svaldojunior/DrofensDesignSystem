import { Button } from './components/Button'
import { UseButton } from './components/UseButton'

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4">
      <Button variant="DANGER" isOutline={false} disabled={true}>
        DANGER
      </Button>
      <Button variant="DEFAULT" isOutline={false} disabled={true}>
        DEFAULT
      </Button>
      <Button variant="DISABLED" isOutline={true} disabled={true}>
        DISABLED
      </Button>
      <Button variant="WARNING" isOutline={false} disabled={true}>
        WARNING
      </Button>
      <UseButton />
      <Button variant="cyan" isOutline={false} disabled={true}>
        cyan
      </Button>
      <Button variant="green" isOutline={false} disabled={true}>
        green
      </Button>
      <Button variant="pink" isOutline={false} disabled={true}>
        pink
      </Button>
      <Button variant="purple" isOutline={false} disabled={true}>
        purple
      </Button>
      <Button variant="teal" isOutline={false} disabled={true}>
        teal
      </Button>
      <Button variant="yellow" isOutline={false} disabled={true}>
        yellow
      </Button>
      {/* <button className="cursor-not-allowed border-transparent bg-gray text-gray-50 hover:brightness-50">
        test
      </button> */}
    </div>
  )
}
