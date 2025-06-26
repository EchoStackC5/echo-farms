"use client"

import * as React from "react"
import { CheckIcon, ChevronsUpDownIcon, ListFilter, ChevronRightIcon, ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const filterCategories = {
  location: {
    label: "Location",
    items: [
     // Greater Accra Region
    { value: 'Accra-GreaterAccra', label: 'Accra - Greater Accra' },
    { value: 'Tema-GreaterAccra', label: 'Tema - Greater Accra' },
    { value: 'Kasoa-GreaterAccra', label: 'Kasoa - Greater Accra' },
    { value: 'Madina-GreaterAccra', label: 'Madina - Greater Accra' },
    { value: 'Adenta-GreaterAccra', label: 'Adenta - Greater Accra' },
    { value: 'Ashaiman-GreaterAccra', label: 'Ashaiman - Greater Accra' },
    
    // Ashanti Region
    { value: 'Kumasi-Ashanti', label: 'Kumasi - Ashanti' },
    { value: 'Obuasi-Ashanti', label: 'Obuasi - Ashanti' },
    { value: 'Ejisu-Ashanti', label: 'Ejisu - Ashanti' },
    { value: 'Konongo-Ashanti', label: 'Konongo - Ashanti' },
    { value: 'Mampong-Ashanti', label: 'Mampong - Ashanti' },
    { value: 'Bekwai-Ashanti', label: 'Bekwai - Ashanti' },
    
    // Western Region
    { value: 'Takoradi-Western', label: 'Takoradi - Western' },
    { value: 'Tarkwa-Western', label: 'Tarkwa - Western' },
    { value: 'Axim-Western', label: 'Axim - Western' },
    { value: 'Prestea-Western', label: 'Prestea - Western' },
    { value: 'Bogoso-Western', label: 'Bogoso - Western' },
    
    // Central Region
    { value: 'Cape Coast-Central', label: 'Cape Coast - Central' },
    { value: 'Elmina-Central', label: 'Elmina - Central' },
    { value: 'Winneba-Central', label: 'Winneba - Central' },
    { value: 'Kasoa-Central', label: 'Kasoa - Central' },
    { value: 'Swedru-Central', label: 'Swedru - Central' },
    
    // Eastern Region
    { value: 'Koforidua-Eastern', label: 'Koforidua - Eastern' },
    { value: 'Akropong-Eastern', label: 'Akropong - Eastern' },
    { value: 'Begoro-Eastern', label: 'Begoro - Eastern' },
    { value: 'Mpraeso-Eastern', label: 'Mpraeso - Eastern' },
    { value: 'Somanya-Eastern', label: 'Somanya - Eastern' },
    
    // Northern Region
    { value: 'Tamale-Northern', label: 'Tamale - Northern' },
    { value: 'Yendi-Northern', label: 'Yendi - Northern' },
    { value: 'Savelugu-Northern', label: 'Savelugu - Northern' },
    { value: 'Tolon-Northern', label: 'Tolon - Northern' },
    
    // Upper East Region
    { value: 'Bolgatanga-UpperEast', label: 'Bolgatanga - Upper East' },
    { value: 'Navrongo-UpperEast', label: 'Navrongo - Upper East' },
    { value: 'Bawku-UpperEast', label: 'Bawku - Upper East' },
    { value: 'Paga-UpperEast', label: 'Paga - Upper East' },
    
    // Upper West Region
    { value: 'Wa-UpperWest', label: 'Wa - Upper West' },
    { value: 'Lawra-UpperWest', label: 'Lawra - Upper West' },
    { value: 'Jirapa-UpperWest', label: 'Jirapa - Upper West' },
    { value: 'Tumu-UpperWest', label: 'Tumu - Upper West' },
    
    // Volta Region
    { value: 'Ho-Volta', label: 'Ho - Volta' },
    { value: 'Hohoe-Volta', label: 'Hohoe - Volta' },
    { value: 'Keta-Volta', label: 'Keta - Volta' },
    { value: 'Aflao-Volta', label: 'Aflao - Volta' },
    { value: 'Kpando-Volta', label: 'Kpando - Volta' },
    
    // Brong Ahafo Region
    { value: 'Sunyani-BrongAhafo', label: 'Sunyani - Brong Ahafo' },
    { value: 'Techiman-BrongAhafo', label: 'Techiman - Brong Ahafo' },
    { value: 'Berekum-BrongAhafo', label: 'Berekum - Brong Ahafo' },
    { value: 'Dormaa-BrongAhafo', label: 'Dormaa - Brong Ahafo' },
    { value: 'Wenchi-BrongAhafo', label: 'Wenchi - Brong Ahafo' },
    ]
  },

   category: {
    label: "Ad Category",
    items: [
       { value: 'FarmMachinery', label: 'Farm Machinery' },
    { value: 'CropProtection', label: 'Crop Protection' },
    { value: 'PlantingMaterials', label: 'Seeds & Planting Materials' },
    { value: 'Animal', label: 'Animal Husbandry Products' },
    { value: 'Drones', label: 'Drones' },
    { value: 'SolarEnergy', label: 'Solar Energy' },
    ]
  },

   plan: {
    label: "Ad Plan",
    items: [
      { value: "basic", label: "Basic" },
      { value: "free", label: "Free" },
      { value: "enterprise", label: "Enterprise" },
      
    ]
  }

  
 
}

export default function LocationFilter({ onFilterChange }) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [expandedCategories, setExpandedCategories] = React.useState(new Set())

  const toggleCategory = (categoryKey) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(categoryKey)) {
      newExpanded.delete(categoryKey)
    } else {
      newExpanded.add(categoryKey)
    }
    setExpandedCategories(newExpanded)
  }

  const getSelectedLabel = () => {
    if (!value) return "Filter..."
    
    // Find the selected item across all categories
    for (const [categoryKey, category] of Object.entries(filterCategories)) {
      const item = category.items.find(item => item.value === value)
      if (item) {
        return `${category.label}: ${item.label}`
      }
    }
    return "Filter..."
  }

  const handleSelect = (currentValue) => {
    const newValue = currentValue === value ? "" : currentValue
    setValue(newValue)
    setOpen(false)
    
    // Call the parent component's filter change handler
    if (onFilterChange) {
      onFilterChange(newValue)
    }
  }

  // Add clear filter functionality
  const clearFilter = () => {
    setValue("")
    if (onFilterChange) {
      onFilterChange("")
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="font-satoshi flex shrink-0 items-center justify-center rounded-full w-full md:w-[300px] text-lg p-6 border border-light-border font-semibold text-primary md:text-base"
          >
            <span className="truncate">{getSelectedLabel()}</span>
            <ListFilter className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full md:w-[220px] p-0">
          <Command>
            <CommandInput placeholder="Search filters..." />
            <CommandList>
              <CommandEmpty>No filters found</CommandEmpty>
              
              {Object.entries(filterCategories).map(([categoryKey, category]) => (
                <CommandGroup key={categoryKey}>
                  {/* Category Header */}
                  <CommandItem
                    className="font-medium cursor-pointer hover:bg-accent"
                    onSelect={() => toggleCategory(categoryKey)}
                  >
                    {expandedCategories.has(categoryKey) ? (
                      <ChevronDownIcon className="mr-2 h-4 w-4" />
                    ) : (
                      <ChevronRightIcon className="mr-2 h-4 w-4" />
                    )}
                    {category.label}
                  </CommandItem>
                  
                  {/* Category Items */}
                  {expandedCategories.has(categoryKey) && category.items.map((item) => (
                    <CommandItem
                      key={item.value}
                      value={item.value}
                      className="pl-8"
                      onSelect={handleSelect}
                    >
                      <CheckIcon
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === item.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {item.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      
      {/* Clear filter button */}
      {value && (
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilter}
          className="text-xs px-2"
        >
          Clear
        </Button>
      )}
    </div>
  )
}