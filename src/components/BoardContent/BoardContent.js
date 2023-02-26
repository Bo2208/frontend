import Column from 'components/Column/Column';
import React, { useState, useEffect } from 'react'

import { isEmpty } from 'lodash';

import './BoardContent.scss'

import {initialData} from 'actions/initialData'
import {mapOrder} from 'utilities/sorts'

function BoardContent() {
    const [board,setBoard] = useState({})
    const [colums,setClumns] = useState([])

    useEffect(() => {
        const boardFromDB = initialData.boards.find(board => board.id === 'board-1')
        if(boardFromDB) {
            setBoard(boardFromDB)

            setClumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'))
        }
    },[])

    if(isEmpty(board)) {
        return <div className="not-found" style={{'padding':'30px', 'color':'white'}}>Board not found!</div>
    }
    return(
        <div className="board-content">
            {colums.map((column, index) => <Column key={index} column={column}/>)}
        </div>
    )
}

export default BoardContent;