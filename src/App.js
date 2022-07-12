import Header from "./components/Header/Header"
import './App.css'
import ImageDiv from "./components/ImageDiv/ImageDiv"
import { useState } from "react"
import AddUI from "./components/AddUI/AddUI"
import AddC from './components/AddC/AddC'
import {useDispatch} from 'react-redux';
const App = () => {
  let [addStatus, updateAddStatus] = useState(false)
  let [changeInput, updateChange] = useState('')
  const dispatch = useDispatch()
  const addPhotoHandler = () => {
    updateAddStatus(true)
  }
  const clickHandler = () => {
    updateAddStatus(false)
  }
  const submitHandler = (url, name) => {
    dispatch({ type: 'add', item: { url: url, name: name, id: url } })
    updateAddStatus(false)
  }
  const onChangeHandler = (search) => {
    updateChange(search)
  }
  return (
    <div className={'wholeDiv'}>
      {addStatus && <AddUI clickHandler={clickHandler}></AddUI>}
      {addStatus && <AddC submitHandler={submitHandler}></AddC>}
      <div className={'container'}>
      <Header addPhotoHandler={addPhotoHandler} onChangeHandler={onChangeHandler}></Header>
      <ImageDiv search = {changeInput}></ImageDiv>
      </div> 
    </div>
  )
}

export default App