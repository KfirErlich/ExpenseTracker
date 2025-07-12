import { useState } from "react"
import { useReactTable, getCoreRowModel } from '@tanstack/react-table';
import { Box } from "@chakra-ui/react";
import { tableData } from '../utils/tableData'
import './ExpensesTable.css'

const columns = [
    {
        accessorKey: "name",
        header: "שם",
        cell: ({getValue}) => <p>{getValue()}</p>
    },
    {
        accessorKey: "amount",
        header: "כמות",
        cell: ({getValue}) => <p>{getValue().toFixed(2)}</p>
    },
    {
        accessorKey: "catagory",
        header: "קטגוריה",
        cell: ({getValue}) => <p>{getValue()}</p>
    },
    {
        accessorKey: "account",
        header: "חשבון",
        cell: ({getValue}) => <p>{getValue()}</p>
    }
]


const ExpensesTable = () => {
    const [data, setData] = useState(tableData)
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel : getCoreRowModel()
    })


    console.log(table.getHeaderGroups())

    return(
    <Box>
        <Box>
        {table.getHeaderGroups().map((headerGroup) => <Box key={headerGroup.id}>
            {headerGroup.headers.map(
                header => <Box key={header.id}>
                    {header.column.columnDef.header}
                </Box>
            )}
        </Box>) 
        }
        </Box>
    </Box>
)
}

export default ExpensesTable