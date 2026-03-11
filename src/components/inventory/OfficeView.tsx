'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { ChevronDown } from 'lucide-react'
import { Building2, MapPin, Users } from 'lucide-react'

const officeData = [
  {
    id: 1,
    name: 'North Branch',
    manager: 'Jennifer Williams',
    location: '456 North Ave, Northside',
    agents: 2,
    totalItems: 250,
    lowStock: 2,
  },
  {
    id: 2,
    name: 'North Branch',
    manager: 'Jennifer Williams',
    location: '456 North Ave, Northside',
    agents: 2,
    totalItems: 250,
    lowStock: 2,
  },
  {
    id: 3,
    name: 'North Branch',
    manager: 'Jennifer Williams',
    location: '456 North Ave, Northside',
    agents: 2,
    totalItems: 250,
    lowStock: 2,
  },
]

export default function OfficeViewComponent() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div>
        <h2 className="text-xl font-semibold text-foreground">
          Inventory Distribution by Type
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Overview of all inventory categories
        </p>
      </div>

      {/* Office List */}
      <div className="space-y-3">
        {officeData.map((office) => (
          <Card
            key={office.id}
            className="p-0 overflow-hidden border hover:border-primary/50 transition-colors cursor-pointer"
            onClick={() => setExpanded(expanded === office.id ? null : office.id)}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4 md:p-6">
              {/* Left Section */}
              <div className="flex flex-1 items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3 flex-shrink-0">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-foreground truncate">
                    {office.name}
                  </h3>
                  <div className="mt-2 space-y-1 text-xs md:text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>Manager: {office.manager}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span className="truncate">{office.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section - Stats */}
              <div className="mt-4 md:mt-0 grid grid-cols-3 gap-4 md:flex md:items-center md:justify-end md:gap-8">
                <div className="flex flex-col items-center md:items-end">
                  <span className="text-xs text-muted-foreground">Agents</span>
                  <span className="text-lg md:text-xl font-semibold text-foreground">
                    {office.agents}
                  </span>
                </div>
                <div className="flex flex-col items-center md:items-end">
                  <span className="text-xs text-muted-foreground">Total items</span>
                  <span className="text-lg md:text-xl font-semibold text-foreground">
                    {office.totalItems}
                  </span>
                </div>
                <div className="flex flex-col items-center md:items-end">
                  <span className="text-xs text-muted-foreground">Low stock</span>
                  <span className="text-lg md:text-xl font-semibold text-red-500">
                    {office.lowStock}
                  </span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform md:absolute md:right-6 ${
                    expanded === office.id ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </div>

            {/* Expanded Content */}
            {expanded === office.id && (
              <div className="border-t bg-muted/20 p-4 md:p-6">
                <p className="text-sm text-muted-foreground">
                  Additional office details would be displayed here
                </p>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
