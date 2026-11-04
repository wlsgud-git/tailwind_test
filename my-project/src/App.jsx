import { useState } from "react"


function App() {
  // let [do, setDo] = useState([])/
  return (
    <div className="w-screen h-screen bg-slate-100 flex flex-col items-center p-2">
      {/* header */}
      <div className="w-full h-12 flex justify-between items-center border border-blue-600">
        <span className="text-xl font-bold">TaskFlow</span>
        <button className="font-bold bg- w-4 h-4 p-4 border border-red-700 flex items-center justify-center rounded-[50%]">JD</button>
      </div>
      {/* progress */}
      <div className="progress_box w-full border border-red-400 flex flex-col justify-around">
        {/* 오늘날짜 */}
        <div className="today">
          <span className="font-bold text-gray-500">MONDAY, NOVEMBER 04</span>
        </div>
        {/* 인사 */}
        <div className="greeting_box">
          <span className="text-3xl font-bold">Good morning, John! 👋</span>
        </div>
        {/* 내 할일 개수  */}
        <div className="doing_box flex flex-col">
          <span>오늘도 적은 목표부터 시작해 봐요.</span>
          <div className="complete_box"></div>
        </div>
        {/* 내 할일 진행률 */}
        <div className="progressing_box flex flex-col">
          
        </div>
      </div>
      
      {/* do */}
      <div className=""></div>
    </div>
  )
}

export default App