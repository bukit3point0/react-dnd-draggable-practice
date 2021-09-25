import SortingDiv from './SortingDiv'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const App = () => {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <SortingDiv/>
      </DndProvider>
    </div>
  )
}

export default App;
