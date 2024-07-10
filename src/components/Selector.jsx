import React from 'react'
import IconSelector from "../assets/svg/selector.svg"
const Selector = () => {
  return (
    <div>

      <div class="h-screen w-screen flex justify-center items-center dark:bg-gray-800">
        <button onClick={(() => document.body.classList.toggle('dark'))()}
          class="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
          <img src={IconSelector} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Selector


