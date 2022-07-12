import classes from './AddUI.module.css'
const AddUI = (props) => {
    return (
        <div className={classes.addUI} onClick={props.clickHandler}>

        </div>
    )
}
export default AddUI