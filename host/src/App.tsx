import { Suspense } from 'react'
import { Button, Text } from 'remote/components'

function App() {
  return (
    <Suspense fallback="Loading...">
      <Button />
      <Text />
    </Suspense>
  )
}

export default App
