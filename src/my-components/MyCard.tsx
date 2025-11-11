import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function MyCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>
          {/* row */}
          <div className="mb-3 flex flex-row justify-between gap-8">
            <div>
              <span className="text-sm">Maracanã</span>
            </div>
            <div className="flex gap-2">
              <span className="text-sm">23/07 -</span>
              <span className="text-sm">Quarta -</span>
              <span className="text-sm">19h</span>
            </div>
          </div>
        </CardTitle>
        <CardDescription>
        </CardDescription>
        <CardAction>
        </CardAction>
      </CardHeader>
      <CardContent>
        FLU X PAL
      </CardContent>
      <CardFooter className="flex-col gap-2">
      </CardFooter>
    </Card>
  )
}
