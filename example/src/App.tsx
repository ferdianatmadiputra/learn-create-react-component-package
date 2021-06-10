import React from 'react'

import Component from 'learn-create-package'
import 'learn-create-package/dist/index.css'

const App = () => {
  const { ExampleComponent, Button } = Component
  return (
    <>
      <ExampleComponent text='Create React Library Example 😄' />
      <Button color="red" />
      <p> blablablaascasca</p>
      <a href="/home">ascascuasc</a>
    </>
  )
}

export default App
