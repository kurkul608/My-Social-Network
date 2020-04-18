import React from 'react';
import classes from './Music.module.css'



function Music(props){

let insert=(num)=> {

}

    return(
        <div className={classes.main}>
            <form name="form">
                <input className={classes.textview}/>
                <table>
                    <tr  className={classes.column}>
                    <td><input className={classes.button}  type="button" value="C"/></td>
                    <td><input className={classes.button} type="button" value="<"/></td>
                    <td><input className={classes.button} type="button" value="/"/></td>
                    <td><input className={classes.button} type="button" value="*"/></td>
                    </tr>
                <tr>
                    <td><input className={classes.button} type="button"  value="7"/></td>
                    <td><input className={classes.button} type="button" value="8"/></td>
                    <td><input className={classes.button} type="button" value="9"/></td>
                    <td><input className={classes.button} type="button" value="-"/></td>
                </tr>
                <tr>
                    <td><input className={classes.button} type="button" value="4"/></td>
                    <td><input className={classes.button} type="button" value="5"/></td>
                    <td><input className={classes.button} type="button" value="6"/></td>
                    <td><input className={classes.button} type="button" value="+"/></td>
                </tr>
                <tr>
                    <td><input className={classes.button} type="button" value="3"/></td>
                    <td><input className={classes.button} type="button" value="2"/></td>
                    <td><input className={classes.button} type="button" value="1"/></td>
                    <td><input className={classes.button} type="button" value="="/></td>
                </tr>
                <tr>
                    <td><input className={classes.button} type="button" value="0"/></td>
                    <td><input className={classes.button} type="button" value="."/></td>
                </tr>
                </table>

            </form>
        </div>
    );
}
export default Music;