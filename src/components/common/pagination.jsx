import React from 'react'
import classes from './pagination.module.css'


const Pagination = ({totalItemsCount, pageSize, currentPage, onPageChanged}) =>{
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    pages.push(0);
    for (let i=currentPage - 2; i<currentPage + 3; i++) {
        if (i > 0 &&i <= pagesCount) {pages.push(i) }
    }
    pages.push(pagesCount+1)
    return(<div className={classes.pages}>
        {pages.map(p => {
                switch (p) {
                    case -1: return <></>
                    case 0:
                        if (currentPage !== 1) { return (<span><button key={p} onClick={(e) => {
                        onPageChanged(p+1) }} className={classes.Page}>First </button>
                        <button key={p} onClick={(e) => {
                            onPageChanged(currentPage-1) }} className={classes.Page}>Prev </button></span>)}
                            else return <></>
                    case pagesCount + 1: 
                    if (currentPage !== pagesCount) {return (<span><button  key={p}  onClick={(e) => {
                        onPageChanged(currentPage + 1)}} className={classes.Page}>Next</button>
                        <button  key={p}  onClick={(e) => {
                        onPageChanged(p - 1)}} className={classes.Page}>Last</button></span>)}
                        else return <></>
                    default: return <button key={p}   onClick={(e) => {
                        onPageChanged(p)}} className={currentPage === p && classes.selectedPage}> {p} </button>
                }
            }
            )}  
        </div>
    )
}



export default Pagination;