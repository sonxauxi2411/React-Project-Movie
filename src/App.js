import 'bootstrap/dist/css/bootstrap.min.css'
import routerPulic from './Router'
import { Route, Routes } from 'react-router-dom'
import Layout from './Page/Layout'
import './App.css'

function App() {
  return (
    <div className="w-100 text-light App">
      {routerPulic.map((router, index) => {
        const Page = router.element

        return (
          <Routes key={index}>
            <Route
              path={router.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          </Routes>
        )
      })}
    </div>
  )
}

export default App
