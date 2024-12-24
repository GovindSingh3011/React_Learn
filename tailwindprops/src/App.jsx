import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold pb-8">
        Card Components
      </h1>

      <div className="flex flex-wrap flex items-center">
        < Card
          username="Delhi"
          image="https://images.pexels.com/photos/1542620/pexels-photo-1542620.jpeg?auto=compress&cs=tinysrgb&w=600"
        />

        < Card
          username="Mumbai"
          image="https://images.pexels.com/photos/15528027/pexels-photo-15528027/free-photo-of-tourists-at-historic-landmark.jpeg?auto=compress&cs=tinysrgb&w=600"
        />

        < Card
          username="Jaipur"
          image="https://images.pexels.com/photos/784879/pexels-photo-784879.jpeg?auto=compress&cs=tinysrgb&w=600"
        />

        < Card
          username="Agra"
          image="https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=600"
        />

        < Card
          username="Mysore"
          image="https://images.pexels.com/photos/4134644/pexels-photo-4134644.jpeg?auto=compress&cs=tinysrgb&w=600"
        />

        < Card
          username="Varanasi"
          image="https://images.pexels.com/photos/8112558/pexels-photo-8112558.jpeg?auto=compress&cs=tinysrgb&w=600"
        />

      </div>
    </>
  )
}

export default App
