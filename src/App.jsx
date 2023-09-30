import "./styles/modern-normalize.css"
import "./styles/App.css"
import "./styles/hero.css"
import "./styles/utils.css"
import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <main className="hero container">
      <Spline scene="https://prod.spline.design/8Y03I9FCMw6NfOjT/scene.splinecode" />
      <h1>Responsive</h1>
      <button className="btn">Blue Button</button>
    </main>
  )
}