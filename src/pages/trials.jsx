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

// Fallback data for development/offline mode
const fallbackData = [
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
    id: "derv1ws0",
    adTitle: "Pesticides",
    category: "Agro-products",
    price: "GHC 8,000",
    adStatus: "Published",
    adType: "Entreprise"
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
    adType: "Free"
  }
]

export const columns = [
  {
    accessorKey: "image",
    header: "",
    cell: ({ row }) => (
      <img 
        src={row.original.image || drakula} 
        alt={row.getValue("adTitle")} 
        className="h-[40px] w-[40px] rounded-full object-cover" 
      />
    ),
    enableSorting: false,
  },
  {
    accessorKey: "adTitle",
    header: "Ad Title",
    cell: ({ row }) => (
      <div className="capitalize cursor-pointer font-medium">
        {row.getValue("adTitle")}
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <div className="capitalize cursor-pointer">
        {row.getValue("category")}
      </div>
    ),
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => (
      <div className="cursor-pointer font-medium">
        {row.getValue("price")}
      </div>
    ),
  },
  {
    accessorKey: "adStatus",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="hover:bg-gray-100"
        >
          Ad Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const status = row.getValue("adStatus")
      return (
        <div 
          className={`cursor-pointer font-medium ${
            status === "UnPublished" ? 'text-red-600' : 'text-green-600'
          }`}
        >
          {status}
        </div>
      )
    },
  },
  {
    accessorKey: "adType",
    header: () => <div className="text-right">Ad Type</div>,
    cell: ({ row }) => {
      const type = row.getValue("adType")
      const getTypeColor = (type) => {
        switch(type) {
          case "Basic": return "text-gray-800"
          case "Entreprise": return "text-green-600"
          case "Free": return "text-purple-600"
          default: return "text-gray-800"
        }
      }
      
      return (
        <div className={`capitalize cursor-pointer font-medium text-right ${getTypeColor(type)}`}>
          {type}
        </div>
      )
    }
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(row.original.id)}>
              Copy ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>Edit ad</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Delete ad</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export default function Trials({ setProduct, setDisplay }) {
  const [sorting, setSorting] = React.useState([])
  const [columnFilters, setColumnFilters] = React.useState([])
  const [columnVisibility, setColumnVisibility] = React.useState({})
  const [rowSelection, setRowSelection] = React.useState({})

  // API integration with SWR
  const { data: apiData, isLoading, error } = useSWR("/adverts", apiFetcher)
  
  // Use API data if available, otherwise fallback to static data
  const tableData = React.useMemo(() => {
    if (apiData && Array.isArray(apiData)) {
      return apiData
    }
    return fallbackData
  }, [apiData])

  const table = useReactTable({
    data: tableData,
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

  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64 bg-white border border-gray-200 rounded-2xl">
        <div className="text-center">
          <BeatLoader size={15} color="#3b82f6" />
          <p className="mt-4 text-gray-600">Loading ads...</p>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="flex justify-center items-center h-64 bg-white border border-red-200 rounded-2xl">
        <div className="text-center">
          <p className="text-red-600 font-medium">Something went wrong</p>
          <p className="text-gray-600 text-sm mt-2">
            {error.message || "Failed to load ads"}
          </p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => window.location.reload()}
          >
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full px-5 bg-white border border-gray-200 rounded-2xl">
      <div className="flex items-center py-4 gap-4">
        <Input
          placeholder="Search ads by title..."
          value={table.getColumn("adTitle")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("adTitle")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        
        <Input
          placeholder="Filter by status..."
          value={table.getColumn("adStatus")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("adStatus")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
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
                  onClick={() => {
                    setProduct(row.original)
                    setDisplay(true)
                  }}
                  className="hover:bg-gray-50 cursor-pointer"
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
                  No results found.
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