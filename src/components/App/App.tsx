import css from './App.module.css'
import Notelist from '../Notelist/Notelist'
import fetchNotes from '../../services/noteService'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
function App() {

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["notes"],
    queryFn: () => fetchNotes(),
    placeholderData: keepPreviousData,
    
  });


  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        {/* Компонент SearchBox */}
        {/* Пагінація */}
        {/* Кнопка створення нотатки */}
      </header>
      {data && data.length > 0 && <Notelist notes={data ?? []} />}
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {isSuccess && <div>Success</div>}
    </div>
  );
}

export default App
