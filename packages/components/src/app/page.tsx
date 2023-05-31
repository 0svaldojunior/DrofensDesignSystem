import { Box } from './components/Box'
import { ButtonTheme } from './components/ButtonTheme'

export default function Home() {
  return (
    <div className={`flex h-screen w-screen flex-col items-center justify-center gap-4`}>
      <Box>
        <ButtonTheme />
      </Box>
    </div>
  )
}
