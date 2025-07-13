import { useState } from 'react'
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'; 
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './ExpensesTable.css'

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

const ExpensesTable = () => {
    const [rowData, setRowData] = useState([
        { "שם ההוצאה": "שכר דירה", "סכום": 7700, "קטגוריה": "שכר דירה", "חשבון": "משותף" },
        { "שם ההוצאה": "אמפם", "סכום": 40, "קטגוריה": "סופר", "חשבון": "משותף" },
        { "שם ההוצאה": "דלק", "סכום": 200, "קטגוריה": "רכב", "חשבון": "שהם" },
    ]);

    const [colDefs, setColDefs] = useState([
        { field: "שם ההוצאה" },
        { field: "סכום" },
        { field: "קטגוריה" },
        { field: "חשבון" }
    ]);

    const defaultColDef = {
    flex: 3,
  };

    return (
      <div className="expenses-table-container">
        <div className="ag-theme-alpine custom-ag-grid">
          <AgGridReact
            rowData={rowData}
            columnDefs={colDefs}
            defaultColDef={defaultColDef}
          />
        </div>
      </div>
    )
}

export default ExpensesTable