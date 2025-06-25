"use client"
import { useState } from "react"
import { BeatLoader } from "react-spinners"
import useSWR from "swr"
import { apiFetcher } from "@/api/client"
import drakula from "../assets/drakula.jpg"
import * as React from "react"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// const data = [
//   {
//     id: "m5gr84i9",
//     adTitle: "Tractor",
//     category: "Farm Machinery",
//     price: "GHC 60,000",
//     adStatus: "Published",
//     adType: "Basic"
//   },
//   {
//     id: "3u1reuv4",
//     adTitle: "Seeds",
//     category: "Agro",
//     price: "GHC 4,000",
//     adStatus: "UnPublished",
//     adType: "Free"
//   },
//   {
//     id: "3u1reuv4",
//     adTitle: "Seeds",
//     category: "Agro",
//     price: "GHC 4,000",
//     adStatus: "UnPublished",
//     adType: "Free"
//   },
//   {
//     id: "derv1ws0",
//     adTitle: "Pesticides",
//     category: "Agro-products",
//     price: "GHC 8,000",
//     adStatus: "Published",
//     adType: "Entreprise"
//   },
//   {
//     id: "5kma53ae",
//     adTitle: "Fertilizer",
//     category: "Agro-products",
//     price: "GHC 5,000",
//     adStatus: "Published",
//     adType: "Basic"
//   },
//   {
//     id: "bhqecj4p",
//     adTitle: "Cartapillar",
//     category: "Farm Machinery",
//     price: "GHC 70,000",
//     adStatus: "Published",
//     adType: "Free"
//   },
//   {
//     id: "m5gr84i9",
//     adTitle: "Tractor",
//     category: "Farm Machinery",
//     price: "GHC 45,000",
//     adStatus: "Published",
//     adType: "Entreprise"
//   },
//   {
//     id: "m5gr84i9",
//     adTitle: "Fertilizer",
//     category: "Agro",
//     price: "GHC 5,000",
//     adStatus: "UnPublished",
//     adType: "Free"
//   },
//   {
//     id: "m5gr84i9",
//     adTitle: "Pesticides",
//     category: "Agro",
//     price: "GHC 3,000",
//     adStatus: "UnPublished",
//     adType: "Free"
//   },
//   {
//     id: "m5gr84i9",
//     adTitle: "Seeds",
//     category: "Agro",
//     price: "GHC 3,000",
//     adStatus: "Published",
//     adType: "Entreprise"
//   },
//   {
//     id: "m5gr84i9",
//     adTitle: "Tractor",
//     category: "Farm Machinery",
//     price: "GHC 30,000",
//     adStatus: "UnPublished",
//     adType: "Basic"
//   },
//   {
//     id: "m5gr84i9",
//     adTitle: "Seeds",
//     category: "Agro",
//     price: "GHC 3,000",
//     adStatus: "Published",
//     adType: "Entreprise",
//   },
// ]

export const columns = [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <Checkbox
//         checked={
//           table.getIsAllPageRowsSelected() ||
//           (table.getIsSomePageRowsSelected() && "indeterminate")
//         }
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         aria-label="Select all"
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },

  {
    accessorKey:"images",
    cell: ({ row }) => (
      <img src={drakula} alt="" className="h-[40px] w-[40px] rounded-full" /> 
    ),
  },

  {
    accessorKey: "productTitle",
    header: "Ad Title",
    cell: ({ row }) => (
      <div className="capitalize cursor-pointer">{row.getValue("productTitle")}</div>
    ),
  },
  
   {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <div className="capitalize cursor-pointer">{row.getValue("category")}</div>
    ),
  },
   {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => (
      <div className="capitalize cursor-pointer">{row.getValue("price")}</div>
    ),
  },
  // {
  //   accessorKey: "adStatus",
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         variant="ghost"
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //       >
  //         Ad Status
  //       </Button>
  //     )
  //   },
  //   cell: ({ row }) => <div style={{color: row.getValue("adStatus") === "UnPublished" ? 'maroon' : 'green'}} className="cursor-pointer">{row.getValue("adStatus")}</div>,
  // },
  {
    accessorKey: "plan",
    header: () => <div className="text-right">Ad Type</div>,
    cell: ({ row }) => (
      <div style={{color: row.getValue("plan")=== "Basic" ? 'black' : row.getValue("plan")=== "Entreprise" ? 'green' : 'purple'}} className="capitalize cursor-pointer">{row.getValue("plan")}</div>
    )
   

      // Format the amount as a dollar amount
      // const formatted = new Intl.NumberFormat("en-US", {
      //   style: "currency",
      //   currency: "USD",
      // }).format(adype)

      // return <div className="text-right font-medium">{formatted}</div>
    
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <div>

        </div>
        
      )
    },
  },
]

export function DataTableDemo({setProduct, setDisplay}) {

  const [sorting, setSorting] = React.useState([])
  const [columnFilters, setColumnFilters] = React.useState([])
  const [columnVisibility, setColumnVisibility] = React.useState({})
  const [rowSelection, setRowSelection] = React.useState({})
   const {data: apiData, isLoading, error} = useSWR("/adverts", apiFetcher)
  // const [product, setProduct] = React.useState(data[0])

  const table = useReactTable({
    data: apiData || [],
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  const handleRowClick = (row) => {
    setProduct(product)
    setDisplay(true)}
 
  if (isLoading) {
    return(
      <div>
        <BeatLoader size={100}/>
      </div>
  )};

  if (error) {
    return(
      <div>
        <p>something went wrong</p>
      </div>
  )}
  


  

  return (
    <div className="w-full px-5 bg-white border border-light-border rounded-2xl">
      {/* <div className="flex items-center py-4">
        <Input
          placeholder="Search Ads.."
          value={table.getColumn("adstatus")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("adstatus")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div> */}
      <div className="rounded-md border"> 
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  onClick={() => {setProduct(row.original), setDisplay(true)}}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>

    
  )
}