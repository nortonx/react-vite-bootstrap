import './scss/styles.scss'
import * as bootstrap from 'bootstrap'

function App() {

  return (
    <>
      <div className="container py-4 px-3 mx-auto">
        <h1>Hello, bootstrap and Vite</h1>
        <button className="btn btn-primary">Primary Button</button>
        {bootstrap.Button}
      </div>
    </>
  )
}

export default App
