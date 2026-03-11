import { Card } from '@/components/ui/card'

const cardData = [
  {
    id: 1,
    category: 'Signs',
    types: '4 items types',
    totalUnits: 200,
    inStock: 100,
    checkedOut: 100,
    lowStock: 100,
  },
  {
    id: 2,
    category: 'Signs',
    types: '4 items types',
    totalUnits: 200,
    inStock: 100,
    checkedOut: 100,
    lowStock: 100,
  },
  {
    id: 3,
    category: 'Signs',
    types: '4 items types',
    totalUnits: 200,
    inStock: 100,
    checkedOut: 100,
    lowStock: 100,
  },
]

export default function CardGridViewComponent() {
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

      {/* Cards Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cardData.map((card) => (
          <Card key={card.id} className="p-6 hover:border-primary/50 transition-colors">
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h3 className="font-semibold text-lg text-foreground">{card.category}</h3>
                <p className="text-xs text-muted-foreground mt-1">{card.types}</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {/* Total Units */}
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Total Units</p>
                  <p className="text-2xl font-bold text-foreground">{card.totalUnits}</p>
                </div>

                {/* In stock */}
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">In stock</p>
                  <p className="text-2xl font-bold text-primary">{card.inStock}</p>
                </div>

                {/* Checked out */}
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Checked out</p>
                  <p className="text-2xl font-bold text-primary">{card.checkedOut}</p>
                </div>

                {/* Low stock */}
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Low stock</p>
                  <p className="text-2xl font-bold text-red-500">{card.lowStock}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
