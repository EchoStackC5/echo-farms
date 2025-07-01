"use client"
import { useState } from "react"
import { BeatLoader } from "react-spinners"
import useSWR from "swr"
import { apiFetcher } from "@/api/client"
import drakula from "../assets/drakula.jpg"
import * as React from "react"
import ProductFilters from "./custom/ProductFilters"
import oops from "@/assets/Oops!.gif"

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
import { Link } from "react-router"

export const columns = [
  {
  accessorKey: "images",
  header: "",
  cell: ({ row }) => {
    const images = row.getValue("images");
    // Get the first image url if available and not empty
    const imageUrl =
      Array.isArray(images) && images[0]?.url
        ? images[0].url
        : drakula;
    return (
      <img
        src={imageUrl}
        alt=""
        className="h-[40px] w-[40px] rounded-full object-cover "
      />
    );
  },
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
    cell: ({ row }) => {
      const category = row.getValue("category");
      return (
        <div className="capitalize cursor-pointer">
          {Array.isArray(category) ? category[0] : ""}
        </div>
      );
    },
  },

  {
    accessorKey: "price",
    header: "Price(GHC)",
    cell: ({ row }) => (
      <div className="capitalize cursor-pointer">{row.getValue("price")}</div>
    ),
  },
  {
    accessorKey: "plan",
    header: () => <div className="">Ad Type</div>,
    cell: ({ row }) => (
      <div
        style={{
          color: row.getValue("plan") === "Basic" ? 'black' :
            row.getValue("plan") === "Entreprise" ? 'green' : 'purple'
        }}
        className="capitalize cursor-pointer"
      >
        {row.getValue("plan")}
      </div>
    )
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original
      return <div></div>
    },
  },
]

export function DataTableDemo({ setProduct }) {
  const [sorting, setSorting] = React.useState([])
  const [columnFilters, setColumnFilters] = React.useState([])
  const [columnVisibility, setColumnVisibility] = React.useState({})
  const [rowSelection, setRowSelection] = React.useState({})


  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("")
  const [filteredData, setFilteredData] = useState([])

  const { data: apiData, isLoading, error } = useSWR("/adverts/vendor/dashboard", apiFetcher)

  React.useEffect(() => {
    if (!apiData) {
      setFilteredData([])
      return
    }

    let filtered = [...apiData]


    if (searchQuery.trim()) {
      filtered = filtered.filter(item =>
        item.productTitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.price?.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    }


    if (selectedFilter) {

      if (selectedFilter.includes('-')) {

        filtered = filtered.filter(item => {
          const itemLocation = `${item.city}-${item.region}`
          return itemLocation === selectedFilter
        })
      } else {
        // Category or plan filter
        const filterCategories = {
          'FarmMachinery': 'Farm Machinery',
          'CropProtection': 'Crop Protection',
          'PlantingMaterials': 'Seeds & Planting Materials',
          'Animal': 'Animal Husbandry Products',
          'Drones': 'Drones',
          'SolarEnergy': 'Solar Energy',
          'basic': 'Basic',
          'free': 'Free',
          'enterprice': 'Entreprise'
        }

        const filterValue = filterCategories[selectedFilter] || selectedFilter

        filtered = filtered.filter(item =>
          item.category === filterValue ||
          item.plan === filterValue ||
          item.plan?.toLowerCase() === selectedFilter.toLowerCase()
        )
      }
    }

    setFilteredData(filtered)
  }, [apiData, searchQuery, selectedFilter])

  const table = useReactTable({
    data: filteredData,
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

  // Handler functions for child components
  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const handleFilterChange = (filterValue) => {
    setSelectedFilter(filterValue)
  }

  if (isLoading) {
    return (
       <div className="flex justify-center items-center h-screen">
                <BeatLoader size={80} color="#32BB78" />
            </div>
    )
  }

  if (error) {
    return (
      <div className=" justify-center items-center flex flex-col">
        <p className="text-green-buuton text-3xl font-bold font-inter">OOPS, IT'S US, NOT YOU</p>
        <img src = {oops}/>
      </div>
    )
  }

  return (
    <div className="w-full overflow-hidden space-y-6 px-5 bg-white border border-light-border rounded-2xl">
      <div className="flex justify-between">
        <ProductFilters
          products={apiData}
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
        />
        <div className="mt-18 px-5">
          <Link to="/dashboard/ad-form" className="h-12 w-50 bg-green-buuton rounded-full text-center items-center justify-around text-white flex">Upload an Ad</Link>
        </div>

      </div>

      {/* Optional: Show active filters */}
      {(searchQuery || selectedFilter) && (
        <div className="mb-4 flex gap-2 items-center text-sm text-gray-600">
          <span>Active filters:</span>
          {searchQuery && (
            <span className="bg-blue-100 px-2 py-1 rounded">
              Search: "{searchQuery}"
            </span>
          )}
          {selectedFilter && (
            <span className="bg-green-100 px-2 py-1 rounded">
              Filter: {selectedFilter}
            </span>
          )}
          <button
            onClick={() => {
              setSearchQuery("")
              setSelectedFilter("")
            }}
            className="text-red-500 hover:underline ml-2"
          >
            Clear all
          </button>
        </div>
      )}

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
                  }}
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
              {(searchQuery || selectedFilter) ?
                `No results found for current filters.` :
                (<div className="flex flex-col items-center justify-center gap-2">
                  <span className="text-2xl text-darkest-heading">You have not uploaded any ads yet. Upload Ad</span>
                 
                </div>)
              }
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          Showing {table.getFilteredRowModel().rows.length} of {filteredData.length} results
          {(searchQuery || selectedFilter) && ` (filtered from ${apiData?.length || 0} total)`}
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