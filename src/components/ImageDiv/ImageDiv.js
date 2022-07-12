import classes from './ImageDiv.module.css'
import Image from '../Image/Image'
import { useEffect, useState} from 'react'

import { useSelector, useDispatch } from 'react-redux'
const ImageDiv = (props) => {
    let images = useSelector((state)=>{return state.images})
    let dispatch = useDispatch()
    let [updated, setUpdated]= useState(false)
    //<Image number={string} name={'photo' + string} id={i} key={i} deleteHandler={ deleteHandler }></Image>
    const deleteHandler = (id) => {
        dispatch({ type: 'remove', item: { id: id } })
        setUpdated((prevState) => {
            return !prevState
        })
    }
    console.log(images)
   
    useEffect(() => {    
        for (let i = 1; i < 24; i++){
            let string = 'photo' + ` (${i})`
            dispatch({ type: 'add', item: {id: i, name: string} })
        }
        setUpdated((prevState) => {
            return !prevState
        })    
    }, [])

    return (
        <div className={classes.grid}>
            {images.map((element) => {
                let display;
                if(element.name.includes(props.search)){
                if (!element.url) {
                    display = <Image name={element.name} id={element.id} key={element.id} deleteHandler={deleteHandler}></Image>
                } else {
                    console.log(element + 'in the url')
                    display = <Image name={element.name} url={element.url} id={element.url} key = {element.url} deleteHandler={deleteHandler}></Image>;
                }
                    return display;
                } else {
                    return 
                }
            }) }
        </div>        
    )
}

export default ImageDiv