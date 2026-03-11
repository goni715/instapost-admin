import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Filter, Settings, Eye, Pencil } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const tableData = [
  {
    id: '#7511',
    type: 'Sign post',
    name: 'L-Shape',
    qty: 45,
    agent: 'Nm Sujon',
    status: 'In Stock',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=nm-sujon',
  },
  {
    id: '#7511',
    type: 'Main Panel',
    name: 'L-Shape',
    qty: 8,
    agent: 'Nm Sujon',
    status: 'In Stock',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=nm-sujon',
  },
  {
    id: '#7511',
    type: 'Rider',
    name: 'L-Shape',
    qty: 10,
    agent: 'Nm Sujon',
    status: 'In Stock',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=nm-sujon',
  },
]

export default function TableViewComponent() {
  return (
    <div className="space-y-6">
      {/* Search & Filters */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 gap-2">
          <div className="relative flex-1">
            <Input
              placeholder="Search..."
              className="pl-10"
            />
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

      {/* Table */}
      <div className="w-full overflow-x-auto rounded-lg border bg-card">
        <Table>
          <TableHeader className="bg-muted/30">
            <TableRow className="hover:bg-muted/30">
              <TableHead className="font-semibold">Item Id</TableHead>
              <TableHead className="font-semibold">Type</TableHead>
              <TableHead className="font-semibold">Item Name</TableHead>
              <TableHead className="font-semibold text-right">Qty in stock</TableHead>
              <TableHead className="font-semibold">Assigned Agent</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((item, index) => (
              <TableRow key={index} className="hover:bg-muted/20 border-b">
                <TableCell className="font-mono text-sm">{item.id}</TableCell>
                <TableCell className="text-sm">{item.type}</TableCell>
                <TableCell className="text-sm">{item.name}</TableCell>
                <TableCell className="text-right text-sm font-medium">{item.qty}</TableCell>
                <TableCell className="text-sm">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={item.avatar} alt={item.agent} />
                      <AvatarFallback>{item.agent[0]}</AvatarFallback>
                    </Avatar>
                    <span>{item.agent}</span>
                  </div>
                </TableCell>
                <TableCell className="text-sm">
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                    >
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                    >
                      <Pencil className="h-4 w-4 text-muted-foreground" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                    >
                      <Settings className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
