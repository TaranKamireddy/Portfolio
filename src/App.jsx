import "./styles/modern-normalize.css"
import "./styles/App.css"
import "./styles/components/hero.css"
import "./styles/utils.css"

import Navbar from "./Navbar"

export default function App() {
  return (
      <main className="hero container">
        <Navbar />
      </main>
  )
}