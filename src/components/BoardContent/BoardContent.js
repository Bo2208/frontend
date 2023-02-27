import Column from 'components/Column/Column'
import React, { useState, useEffect } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'

import { isEmpty } from 'lodash'

import './BoardContent.scss'

import {initialData} from 'actions/initialData'
import {mapOrder} from 'utilities/sorts'

function BoardContent() {
  const [board,setBoard] = useState({})
  const [colums,setClumns] = useState([])
  useEffect(() => {
    const boardFromDB = initialData.boards.find(board => board.id === 'board-1')
    if (boardFromDB) {
      setBoard(boardFromDB)

      setClumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'))
    }
  }, [])

  if (isEmpty(board)) {
    return <div className="not-found" style={{ 'padding':'30px', 'color':'white' }}>Board not found!</div>
  }

  const onColumnDrop = (dropResult) => {
    console.log(dropResult)
  }
  return (
    <div className="board-content">
      <Container
        orientation="horizontal"
        onDrop={onColumnDrop}
        getChildPayload={index => colums[index] }
        dragHandleSelector=".column-drag-handle"
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: 'column-drop-preview'
        }}
      >
        {colums.map((column, index) => (
          <Draggable key={index}>
            <Column column={column}/>
          </Draggable>
        ))}
      </Container>
    </div>
  )
}

export default BoardContent