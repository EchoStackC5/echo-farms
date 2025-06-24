"use client"
import { useState } from "react"
import fertilizer from "../assets/fertilizer.png"
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

const data = [
  {
    id: "m5gr84i9",
    adTitle: "Tractor",
    category: "Farm Machinery",
    price: "GHC 60,000",
    adStatus: "Published",
    adType: "Basic"
  },
  {
    id: "3u1reuv4",
    adTitle: "Seeds",
    category: "Agro",
    price: "GHC 4,000",
    adStatus: "UnPublished",
    adType: "Free"
  },
  {
    id: "3u1reuv4",
    adTitle: "Seeds",
    category: "Agro",
    price: "GHC 4,000",
    adStatus: "UnPublished",
    adType: "Free"
  },
  {
    id: "derv1ws0",
    adTitle: "Pesticides",
    category: "Agro-products",
    price: "GHC 8,000",
    adStatus: "Published",
    adType: "Enterprise"
  },
  {
    id: "5kma53ae",
    adTitle: "Fertilizer",
    category: "Agro-products",
    price: "GHC 5,000",
    adStatus: "Published",
    adType: "Basic"
  },
  {
    id: "bhqecj4p",
    adTitle: "Cartapillar",
    category: "Farm Machinery",
    price: "GHC 70,000",
    adStatus: "Published",
    adType: "Diamond"
  },
  {
    id: "m5gr84i9",
    adTitle: "Tractor",
    category: "Farm Machinery",
    price: "GHC 45,000",
    adStatus: "Published",
    adType: "Enterprise"
  },
  {
    id: "m5gr84i9",
    adTitle: "Fertilizer",
    category: "Agro",
    price: "GHC 5,000",
    adStatus: "UnPublished",
    adType: "Free"
  },
  {
    id: "m5gr84i9",
    adTitle: "Pesticides",
    category: "Agro",
    price: "GHC 3,000",
    adStatus: "UnPublished",
    adType: "Free"
  },
  {
    id: "m5gr84i9",
    adTitle: "Seeds",
    category: "Agro",
    price: "GHC 3,000",
    adStatus: "Published",
    adType: "Diamond"
  },
  {
    id: "m5gr84i9",
    adTitle: "Tractor",
    category: "Farm Machinery",
    price: "GHC 30,000",
    adStatus: "UnPublished",
    adType: "Diamond"
  },
  {
    id: "m5gr84i9",
    adTitle: "Seeds",
    category: "Agro",
    price: "GHC 3,000",
    adStatus: "Published",
    adType: "Entreprise",
  },
]

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
    accessorKey:"I",
    cell: ({ row }) => (
      <img src={fertilizer} alt="" className="h-[40px] w-[40px] rounded-full" /> 
    ),
  },

  {
    accessorKey: "adTitle",
    header: "Ad Title",
    cell: ({ row }) => (
      <div className="capitalize cursor-pointer">{row.getValue("adTitle")}</div>
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
  {
    accessorKey: "adStatus",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Ad Status
        </Button>
      )
    },
    cell: ({ row }) => <div className="text-yellow-button cursor-pointer">{row.getValue("adStatus")}</div>,
  },
  {
    accessorKey: "adType",
    header: () => <div className="text-right">Ad Type</div>,
    cell: ({ row }) => (
      <div className="capitalize text-primary-color cursor-pointer">{row.getValue("adType")}</div>
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

export function DataTableDemo({setProduct}) {
  const [sorting, setSorting] = React.useState([])
  const [columnFilters, setColumnFilters] = React.useState([])
  const [columnVisibility, setColumnVisibility] = React.useState({})
  const [rowSelection, setRowSelection] = React.useState({})
  // const [product, setProduct] = React.useState(data[0])

  const table = useReactTable({
    data,
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

  return (
    <div className="w-full px-5">
      <div className="flex items-center py-4">
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
      </div>
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
                  onClick={() => {setProduct(row.original)}}
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