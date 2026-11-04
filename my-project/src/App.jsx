import { useState } from "react"
import { ProgressBox } from "./component/progressBox"


function App() {
  let [tasks, setTasks] = useState([
    {
      task : "Design landing Page",
      category : "Design",
      completed : true
    },
    {
      task : "Build React components",
      category : "Development",
      completed : false
    },
    {
      task : "Write project documentation",
      category : "Writing",
      completed : false
    },{
      task : "Review UI desugns",
      category : "Design",
      completed : true
    }
  ])
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
          <span className="font-thin text-sm text-gray-600">오늘도 적은 목표부터 시작해 봐요.</span>
          <div className="complete_box flex">
            <ProgressBox count={tasks.length} type={"total"} />
            <ProgressBox count={tasks.filter(val=> val.completed).length} type={"completed"} />
          </div>
        </div>
        {/* 내 할일 진행률 */}
        <div className="progressing_box flex flex-col">
          {/* 진행률 텍스트 */}
          <div className="progress_text flex justify-between">
            <span className="font-bold">Today's Progress</span>
            <span className="font-bold">{Math.ceil( (tasks.filter(val=> val.completed).length  / tasks.length) * 100 )}%</span>
          </div>
          {/* 진행률 바 */}
          <div className="progress_bar rounded-lg w-full h-[10px] overflow-hidden border border-purple-500">
            <div className="bg-purple-500 h-full rounded-lg" style={{width: `${Math.ceil(( tasks.filter(val=> val.completed).length / tasks.length) * 100)}%`}}></div>
          </div>
        </div>
      </div>
      
      {/* do */}
      <div className=""></div>
    </div>
  )
}

export default App