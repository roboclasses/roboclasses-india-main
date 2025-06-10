import { DollarSign, Users, BookOpen, Video, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PriceCardDemo() {
  return (
    <Card className="w-full bg-white shadow-none border-0">
      <CardContent className="p-6">
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mb-6">
          {/* Price */}
          {/* <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-yellow-600" />
            <div>
              <p className="text-sm text-gray-500 font-medium">Price</p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400 line-through">AED 1,800</span>
                <span className="text-lg font-semibold text-gray-900">AED 1,500</span>
              </div>
            </div>
          </div> */}

          {/* Age */}
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-orange-500" />
            <div>
              <p className="text-sm text-gray-500 font-medium">Age</p>
              <p className="text-lg font-semibold text-gray-900">12 - 18 years</p>
            </div>
          </div>

          {/* Installment */}
          {/* <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-green-600" />
            <div>
              <p className="text-sm text-gray-500 font-medium">Installment</p>
              <p className="text-lg font-semibold text-gray-900">AED 375 /Month *4</p>
            </div>
          </div> */}

          {/* Batch size */}
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-orange-500" />
            <div>
              <p className="text-sm text-gray-500 font-medium">Batch size</p>
              <p className="text-lg font-semibold text-gray-900">1 Kid</p>
            </div>
          </div>

          {/* Classes */}
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-orange-500" />
            <div>
              <p className="text-sm text-gray-500 font-medium">Classes</p>
              <p className="text-lg font-semibold text-gray-900">30</p>
            </div>
          </div>

          {/* Instruction */}
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4 text-orange-500" />
            <div>
              <p className="text-sm text-gray-500 font-medium">Instruction</p>
              <p className="text-lg font-semibold text-gray-900">Live online class</p>
            </div>
          </div>
        </div>

        <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white focus:bg-accent-foreground focus:text-cyan-500 font-medium py-3 rounded-lg">
          Take this Course
        </Button>
      </CardContent>
    </Card>
  )
}
