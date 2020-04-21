import React from 'react'
import classes from './pagination.module.css'


const Pagination = ({totalUsersCount, pageSize, currentPage, onPageChanged}) =>{
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

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
                    case 0:  return <button key={p} onClick={(e) => {
                        onPageChanged(p+1) }} className={classes.Page}>First </button>
                    case pagesCount + 1: return <button  key={p}  onClick={(e) => {
                        onPageChanged(p - 1)}} className={classes.Page}>Last</button>
                    default: return <button key={p}   onClick={(e) => {
                        onPageChanged(p)}} className={currentPage === p && classes.selectedPage}> {p} </button>
                }
            }
            )}  
        </div>
    )
}



export default Pagination;