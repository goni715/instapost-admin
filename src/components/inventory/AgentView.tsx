import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Filter, Settings } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const agentData = [
  {
    id: 1,
    name: 'Nm Sujon',
    itemTypes: '5 item types - 123 total units',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=nm-sujon',
    stats: {
      totalItems: 5,
      checkedOut: 5,
      totalQty: 5,
    },
    inventory: [
      {
        name: 'Sign post',
        location: 'Sign · Warehouse-1',
        qty: 45,
        status: 'In Stock',
      },
      {
        name: 'Main panel',
        location: 'Panel · Warehouse-1',
        qty: 45,
        status: 'Out',
      },
    ],
  },
  {
    id: 2,
    name: 'Nm Sujon',
    itemTypes: '5 item types - 123 total units',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=nm-sujon',
    stats: {
      totalItems: 5,
      checkedOut: 5,
      totalQty: 5,
    },
    inventory: [
      {
        name: 'Sign post',
        location: 'Sign · Warehouse-1',
        qty: 45,
        status: 'In Stock',
      },
      {
        name: 'Main panel',
        location: 'Panel · Warehouse-1',
        qty: 45,
        status: 'Out',
      },
    ],
  },
  {
    id: 3,
    name: 'Nm Sujon',
    itemTypes: '5 item types - 123 total units',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=nm-sujon',
    stats: {
      totalItems: 5,
      checkedOut: 5,
      totalQty: 5,
    },
    inventory: [
      {
        name: 'Sign post',
        location: 'Sign · Warehouse-1',
        qty: 45,
        status: 'In Stock',
      },
      {
        name: 'Main panel',
        location: 'Panel · Warehouse-1',
        qty: 45,
        status: 'Out',
      },
    ],
  },
]

export default function AgentViewComponent() {
  return (
    <div className="space-y-6">
      {/* Search & Filters */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 gap-2">
          <div className="relative flex-1 max-w-md">
            <Input placeholder="Search..." className="pl-10" />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              🔍
            </span>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" size="sm" className="gap-2">
            <span className="text-xs">All types</span>
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <span className="text-xs">All Agents</span>
            <Settings className="h-4 w-4" />
          </Button>
          <span className="text-xs text-muted-foreground self-center">
            Showing 12 items
          </span>
        </div>
      </div>

      {/* Agent Cards Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {agentData.map((agent) => (
          <Card key={agent.id} className="p-6 hover:border-primary/50 transition-colors">
            <div className="space-y-6">
              {/* Agent Header */}
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={agent.avatar} alt={agent.name} />
                  <AvatarFallback>{agent.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground truncate">{agent.name}</h3>
                  <p className="text-xs text-muted-foreground truncate">{agent.itemTypes}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-4 border-y">
                <div className="flex flex-col items-center">
                  <p className="text-xs text-muted-foreground mb-1">Total Items</p>
                  <p className="text-lg font-bold text-foreground">{agent.stats.totalItems}</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-xs text-muted-foreground mb-1">Checked out</p>
                  <p className="text-lg font-bold text-foreground">{agent.stats.checkedOut}</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-xs text-muted-foreground mb-1">Total QTY</p>
                  <p className="text-lg font-bold text-foreground">{agent.stats.totalQty}</p>
                </div>
              </div>

              {/* Inventory Items */}
              <div className="space-y-3">
                {agent.inventory.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-foreground truncate">{item.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{item.location}</p>
                    </div>
                    <div className="flex items-center gap-2 ml-2">
                      <span className="text-sm font-semibold text-foreground">{item.qty}</span>
                      <Badge
                        variant={
                          item.status === 'In Stock' ? 'default' : 'secondary'
                        }
                        className={
                          item.status === 'In Stock'
                            ? 'bg-green-100 text-green-700 hover:bg-green-100'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-100'
                        }
                      >
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
