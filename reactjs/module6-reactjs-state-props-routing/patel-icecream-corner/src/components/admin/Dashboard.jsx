import React from 'react'
import { Chart } from "react-google-charts";
export default function Dashboard() {
    
// const data = [
//     ["Element", "Density", { role: "style" }],
//     ["Copper", 8.94, "#b87333"], // RGB value
//     ["Silver", 10.49, "silver"], // English color name
//     ["Gold", 19.3, "gold"],
//     ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
//   ];

const data = [
    ["Task", "Hours per Day"],
    ["Work", 9],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const options = {
    title: "My Daily Activities",
  };

return (

    
    <div className='w-full p-2'>
    {/* <h1 className='text-4xl text-pink-600 ms-5'>Biece Icecream Dashboard</h1> */}
    <div className='flex flex-row w-full'>
     <div className='w-full p-3 bg-pink-600 mt-7 m-5'>
        <h1 className='text-2xl mt-2 text-white'>Total customers <span className='bi bi-person'>10</span></h1>
     </div>
     <div className='w-full p-3 bg-pink-600 mt-7 m-5'>
     <h1 className='text-2xl mt-2 text-white'>Total customers <span className='bi bi-person'>10</span></h1>
     </div>
     <div className='w-full p-3 bg-pink-600 mt-7 m-5'>
     <h1 className='text-2xl mt-3 text-white'>Total customers <span className='bi bi-person'>10</span></h1>
     </div>
    </div>

    <div className='flex flex-row w-full'>
     <div className='w-full p-3 bg-pink-600 mt-7 m-5'>
     <h1 className='text-2xl mt-3 text-white'>Total customers <span className='bi bi-person'>10</span></h1>
     </div>
     <div className='w-full p-3 bg-pink-600 mt-7 m-5'>
     <h1 className='text-2xl text-white'>Total customers <span className='bi bi-person'>10</span></h1>
     </div>
     <div className='w-full p-5 mt-3 bg-pink-600 mt-7 m-5'>
     <h1 className='text-2xl text-white'>Total customers <span className='bi bi-person'>10</span></h1>
     </div>
    </div>
    {/* <Chart chartType="ColumnChart" width="100%" height="100%" data={data} /> */}

    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div>
  )
}
