import { MyCard } from './my-components/MyCard'
import Brasileirao from './components/Brasileirao'
// Importar meu componente MyCard
export function App() {
  return (
    <div className="p-10 flex justify-end">
      <Brasileirao />
      {/* <MyCard></MyCard> */}
    </div>
  )
}