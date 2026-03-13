import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { X, House, MapPin, ChevronRight } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface MobileRouteListProps {
  onClose: () => void
}

const routeStops = [
  {
    id: 'warehouse1',
    name: 'Ware House -2',
    type: 'warehouse',
    details: 'Departure Point',
    color: 'bg-blue-50 border-blue-200',
    textColor: 'text-blue-700',
    icon: 'house',
  },
  {
    id: 'stop1',
    name: 'Manlysville',
    type: 'stop',
    details: 'Stop 1 - Distance: 15.4 km',
    color: 'bg-red-50 border-red-200',
    textColor: 'text-red-700',
    icon: 'pin',
  },
  {
    id: 'stop2',
    name: 'Marbury',
    type: 'stop',
    details: 'Stop 2 - Distance: 8.2 km',
    color: 'bg-red-50 border-red-200',
    textColor: 'text-red-700',
    icon: 'pin',
  },
  {
    id: 'stop3',
    name: 'Wetumpka',
    type: 'stop',
    details: 'Stop 3 - Distance: 22.1 km',
    color: 'bg-red-50 border-red-200',
    textColor: 'text-red-700',
    icon: 'pin',
  },
  {
    id: 'stop4',
    name: 'Tallassee',
    type: 'stop',
    details: 'Stop 4 - Distance: 18.5 km',
    color: 'bg-red-50 border-red-200',
    textColor: 'text-red-700',
    icon: 'pin',
  },
  {
    id: 'stop5',
    name: 'Shorter',
    type: 'stop',
    details: 'Stop 5 - Distance: 25.3 km',
    color: 'bg-red-50 border-red-200',
    textColor: 'text-red-700',
    icon: 'pin',
  },
  {
    id: 'warehouse2',
    name: 'Ware House -1',
    type: 'warehouse',
    details: 'Return Point',
    color: 'bg-blue-50 border-blue-200',
    textColor: 'text-blue-700',
    icon: 'house',
  },
]

const MobileRouteList = ({ onClose }: MobileRouteListProps) => {
  return (
    <div className="w-full h-full bg-black/40 flex">
      <Card className="w-full max-w-sm h-full rounded-none border-0 border-r border-border flex flex-col bg-card">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Route Details</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-foreground"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Route Summary */}
        <div className="px-4 py-3 border-b border-border bg-muted/30">
          <div className="text-sm">
            <p className="text-muted-foreground">Total Distance</p>
            <p className="text-lg font-semibold text-foreground">89.5 km</p>
          </div>
          <div className="text-sm mt-2">
            <p className="text-muted-foreground">Estimated Time</p>
            <p className="text-lg font-semibold text-foreground">2h 15m</p>
          </div>
        </div>

        {/* Stops List */}
        <ScrollArea className="flex-1">
          <div className="p-4 space-y-2">
            {routeStops.map((stop) => (
              <div
                key={stop.id}
                className={`p-3 rounded-lg border-2 ${stop.color} cursor-pointer hover:shadow-sm transition-all`}
              >
                <div className="flex items-start gap-3">
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${stop.color} border border-current`}>
                    {stop.icon === 'house' ? (
                      <House className={`w-4 h-4 ${stop.textColor}`} />
                    ) : (
                      <MapPin className={`w-4 h-4 ${stop.textColor}`} />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground">{stop.name}</p>
                    <p className={`text-xs ${stop.textColor}`}>{stop.details}</p>
                  </div>
                  <ChevronRight className="shrink-0 w-4 h-4 text-muted-foreground mt-1" />
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Action Button */}
        <div className="p-4 border-t border-border">
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Start Route
          </Button>
        </div>
      </Card>
    </div>
  )
}

export default MobileRouteList;