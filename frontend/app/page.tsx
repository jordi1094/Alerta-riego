import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Droplet, Info } from "lucide-react"
import AddPlantForm from "@/components/add-plant-form"

// Mock data for plants
const plants = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    pin: "A1",
    room: "Living Room",
    lastWatered: "2023-04-12",
    nextWatering: "2023-04-19",
    status: "healthy", // healthy, needs-water, critical
  },
  {
    id: 2,
    name: "Snake Plant",
    pin: "B2",
    room: "Bedroom",
    lastWatered: "2023-04-10",
    nextWatering: "2023-04-24",
    status: "healthy",
  },
  {
    id: 3,
    name: "Peace Lily",
    pin: "C3",
    room: "Office",
    lastWatered: "2023-04-05",
    nextWatering: "2023-04-15",
    status: "needs-water",
  },
  {
    id: 4,
    name: "Fiddle Leaf Fig",
    pin: "D4",
    room: "Dining Room",
    lastWatered: "2023-04-01",
    nextWatering: "2023-04-14",
    status: "critical",
  },
]

export default function Home() {
  return (
    <main className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Plant Status</h1>
        <AddPlantForm />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plants.map((plant) => (
          <Card key={plant.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{plant.name}</CardTitle>
                  <CardDescription>
                    Pin: {plant.pin} • {plant.room}
                  </CardDescription>
                </div>
                <StatusBadge status={plant.status} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Last watered:</span>
                  <span>{formatDate(plant.lastWatered)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Next watering:</span>
                  <span className="font-medium">{formatDate(plant.nextWatering)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-2">
              <Button variant="outline" size="sm">
                <Droplet className="h-4 w-4 mr-2" />
                Water Now
              </Button>
              <Link href={`/plants/${plant.id}`}>
                <Button variant="ghost" size="sm">
                  <Info className="h-4 w-4 mr-2" />
                  Details
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  )
}

function StatusBadge({ status }: { status: string }) {
  if (status === "healthy") {
    return <Badge className="bg-green-500 hover:bg-green-600">Healthy</Badge>
  } else if (status === "needs-water") {
    return <Badge className="bg-yellow-500 hover:bg-yellow-600">Needs Water</Badge>
  } else {
    return <Badge className="bg-red-500 hover:bg-red-600">Critical</Badge>
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })
}
