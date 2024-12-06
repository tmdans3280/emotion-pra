import './App.css'
import { Route, Routes } from 'react-router-dom';
import { useReducer, useRef, createContext } from 'react';

import Home from './pages/Home';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/Notfound';




const mockData = [{
  id: 1,
  createdDate: new Date("2024-12-05").getTime(),
  emotionid: 1,

  content: "1번 일기내용"
},
{
  id: 2,
  createdDate: new Date("2024-12-06").getTime(),
  emotionid: 2,

  content: "2번 일기내용"
},
{
  id: 3,
  createdDate: new Date("2024-11-06").getTime(),
  emotionid: 3,

  content: "3번 일기내용"
},

]

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state]
    case "UPDATE":
      return state.map((item) => String(item.id) === String(action.data.id) ? action.data : item)
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id))
    default:
      return
  }

}

export const DiaryStateContext = createContext()
export const DiaryDispatchContext = createContext()


function App() {

  const [data, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(4)


  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content
      }
    })
  }

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content
      }
    })
  }

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id

    })
  }


  return (
    <>



      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/diary/:id' element={<Diary />} />
            <Route path='/edit:id' element={<Edit />} />
            <Route path='*' element={<Notfound />} />
          </Routes>

        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider >


    </>
  )
}

export default App
