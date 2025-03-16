// 'use client';
import {AgGridReact} from "ag-grid-react"
//有各種theme在modules可以去挑選 建議選用任何一種不要自己純刻
// import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-quartz.css"
// import "ag-grid-community/styles/ag-theme-alpine.css"
import './App.css'
import {useState} from "react"
import {Button,message} from 'antd'
import {useMemo} from 'react'

//要加入下面這兩行才會跑的出來最新版本的ag grid
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

const MyCellComponent = p => {
  //要加入p.value在component裡面 才會有顯示你field定義的valueGetter值
  return (
    <>
    <Button onClick={() => message.info("This is add button")}>+</Button>
    {p.value} 
    </>
  )
}

function App() {

  const [rowData, setRowData] = useState([
    { "make": "Tesla", "model": "Model X", "price": 89990, "electric": true },
    { "make": "Ford", "model": "Mustang Mach-E", "price": 46995, "electric": true },
    { "make": "Chevrolet", "model": "Bolt EV", "price": 31795, "electric": true },
    { "make": "Toyota", "model": "Camry", "price": 27400, "electric": false },
    { "make": "Honda", "model": "Accord", "price": 27695, "electric": false },
    { "make": "BMW", "model": "i4", "price": 52995, "electric": true },
    { "make": "Audi", "model": "e-tron GT", "price": 104900, "electric": true },
    { "make": "Hyundai", "model": "Ioniq 5", "price": 41900, "electric": true },
    { "make": "Kia", "model": "EV6", "price": 42900, "electric": true },
    { "make": "Nissan", "model": "Leaf", "price": 28990, "electric": true },
    { "make": "Tesla", "model": "Model S", "price": 94990, "electric": true },
    { "make": "Ford", "model": "F-150 Lightning", "price": 55474, "electric": true },
    { "make": "Chevrolet", "model": "Silverado", "price": 36600, "electric": false },
    { "make": "Toyota", "model": "RAV4", "price": 27850, "electric": false },
    { "make": "Honda", "model": "Civic", "price": 23050, "electric": false },
    { "make": "BMW", "model": "3 Series", "price": 43600, "electric": false },
    { "make": "Audi", "model": "A4", "price": 41300, "electric": false },
    { "make": "Hyundai", "model": "Tucson", "price": 26150, "electric": false },
    { "make": "Kia", "model": "Sportage", "price": 27390, "electric": false },
    { "make": "Nissan", "model": "Rogue", "price": 28420, "electric": false },
    { "make": "Tesla", "model": "Model 3", "price": 42990, "electric": true },
    { "make": "Ford", "model": "Escape", "price": 29155, "electric": false },
    { "make": "Chevrolet", "model": "Equinox", "price": 26500, "electric": false },
    { "make": "Toyota", "model": "Highlander", "price": 39700, "electric": false },
    { "make": "Honda", "model": "Pilot", "price": 38000, "electric": false },
    { "make": "BMW", "model": "X5", "price": 65900, "electric": false },
    { "make": "Audi", "model": "Q5", "price": 45500, "electric": false },
    { "make": "Hyundai", "model": "Santa Fe", "price": 28350, "electric": false },
    { "make": "Kia", "model": "Sorento", "price": 31290, "electric": false },
    { "make": "Nissan", "model": "Pathfinder", "price": 34980, "electric": false },
    { "make": "Tesla", "model": "Cybertruck", "price": 69900, "electric": true },
    { "make": "Ford", "model": "Bronco", "price": 34390, "electric": false },
    { "make": "Chevrolet", "model": "Tahoe", "price": 55495, "electric": false },
    { "make": "Toyota", "model": "Tacoma", "price": 27475, "electric": false },
    { "make": "Honda", "model": "Ridgeline", "price": 38500, "electric": false },
    { "make": "BMW", "model": "iX", "price": 87750, "electric": true },
    { "make": "Audi", "model": "Q8 e-tron", "price": 74100, "electric": true },
    { "make": "Hyundai", "model": "Kona Electric", "price": 33650, "electric": true },
    { "make": "Kia", "model": "Niro EV", "price": 39550, "electric": true },
    { "make": "Nissan", "model": "Ariya", "price": 44795, "electric": true },
    { "make": "Tesla", "model": "Roadster", "price": 200000, "electric": true },
    { "make": "Ford", "model": "Explorer", "price": 36775, "electric": false },
    { "make": "Chevrolet", "model": "Blazer", "price": 35100, "electric": false },
    { "make": "Toyota", "model": "4Runner", "price": 39875, "electric": false },
    { "make": "Honda", "model": "HR-V", "price": 23800, "electric": false },
    { "make": "BMW", "model": "M3", "price": 75600, "electric": false },
    { "make": "Audi", "model": "RS e-tron GT", "price": 143900, "electric": true },
    { "make": "Hyundai", "model": "Sonata", "price": 25750, "electric": false },
    { "make": "Kia", "model": "Telluride", "price": 35990, "electric": false }
]);
console.log(rowData);

// Column Definitions: Defines the columns to be displayed.
// valueGetter可以讓你串接你想要的顯示列值
// headerName可以顯示你該欄位想要的定義值

// cellEditor: 'agSelectCellEditor', cellEditorParams: {values: ['Model Y', 'F-Series', 'Corolla']}
// 上面這個只有當你點擊某列的值時他才會跳出來顯示可以下拉的選單（而values我們可以用api去dump)

// 在新版中如果你的data有透過valueGetter去改過的話 下面的p.value就會抓不到原本的數值
// 因此如果有顯示valueGetter就要採用p.data.price 去觸發price>30000時highlight背景顏色
// valueGetter: p=> "$"+ p.data.price.toLocaleString(),
//       cellClassRules: {
//         'green-cell': p => p.data.price > 30000
//       },
const [colDefs, setColDefs] = useState([
    { field: "make" , 
      headerName:"Car Name",
      valueGetter: p=> p.data.make + ' '+ p.data.price,  
      cellRenderer: MyCellComponent,
      checkboxSelection: true
    },
    { field: "model",
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {values: ['Model Y', 'F-Series', 'Corolla']}
    },
    { field: "price",
      valueGetter: p=> "$"+ p.data.price.toLocaleString(),
      cellClassRules: {
        'green-cell': p => p.data.price > 30000
      },
    },
    { field: "electric" }
]);

const rowClassRules = useMemo( ()=> ({
  'red-row': p => p.data.make == "Toyota"
}))

//有設定這個後所有columns就會有default flex = 1的寬度去調整colum的寬度
//"ag-grid-community": "^33.1.1","ag-grid-react": "^33.1.1"在此version的filter icon會直接顯示出來
//所以不同版本有不同的介面呈現方式要注意，且alpine版本較精簡所以filter條件顯示有問題 但quartz就不會
//使用editable: true 如果你有用valueGetter去串接資料 他會更改錯誤
const defaultColDef = {
  flex: 1,
  filter: true,
  editable: true,
  floatingFilter:  true
};
  return (
    //要明確設定你的grid大小 才會顯示出來
    // paginationPageSize = {10} 最新版本也有bug他介面不會如期顯示10 但的確是十筆
    <div style={{ width: "800px", height: "500px" }}>
      <div className="ag-theme-quartz" style={{ height: "100%", width: "100%" }}>
        <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
            defaultColDef={defaultColDef}
            rowSelection={'multiple'}
            pagination = {true}
            paginationPageSize = {10}
            paginationPageSizeSelection = {[10,20]}
            rowClassRules={rowClassRules}
        />
      </div>
    </div>
  )
}

export default App
