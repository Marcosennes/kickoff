import { MyCard } from './my-components/MyCard'
import Brasileirao from './components/Brasileirao'
import { MyTable } from './my-components/MyTable'
// Importar meu componente MyCard
export function App() {
  return (
    <div>
      <div>
        <MyTable></MyTable>
      </div>
      <div className="p-10 flex justify-end">
        <Brasileirao />
        {/* <MyCard></MyCard> */}
      </div>
    </div>
  )
}