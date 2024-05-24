import { useState } from 'react'
import './App.css';
import { RiCheckboxBlankFill } from 'react-icons/ri';
import { RiCheckboxFill } from 'react-icons/ri';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { TbPencilPlus } from 'react-icons/tb';

const toDoListDefault = [
  {
    id: "1",
    text: "Testing 1",
    complete: false
  },
  {
    id: "2",
    text: "Testing 2",
    complete: false
  }
]

function App() {
  const [toDoList, setToDoList] = useState(toDoListDefault);

  return (
    <>
      <div className="header--container">
        <div className="header">
          <p className="header--title">
            My Tasks
          </p>
          <div className="header-add-task">
            <p className="header-add-task-text">
              <TbPencilPlus />
            </p>
          </div>
        </div>
      </div>

      <div className='to-do-list'>
        {toDoList.map(listItem => {
          return (
            <div className="to-do-container">
              <p className="to-do-checkbox">
                <RiCheckboxBlankFill />
              </p>
              <p className="to-do-text">
                {listItem.text}
              </p>
              <p className="to-do-delete">
                <RiDeleteBin6Line />
              </p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
