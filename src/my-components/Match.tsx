import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


interface Score {
  fullTime: {
    home: number;
    away: number;
  };
}

interface MatchProps {
  // Define as propriedades do componente Match aqui, se necessário
  id: number;
  homeTeam: object;
  awayTeam: object;
  score: Score;
  utcDate: string;
}

export function Match({
  score,
  utcDate,
  homeTeam,
  awayTeam,
}: MatchProps) {
  return (
    <Card className="w-full max-w-sm h-30">
      <CardHeader>
        <CardTitle >
          {/* row */}
          <div className="mb-3 flex flex-row justify-between">
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
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center align-top gap-4 text-xl font-bold">
          <div>
            <img src={homeTeam.crest} alt={`${homeTeam.name} crest`} className="inline-block w-6 h-6 ml-2" style={{ width:'40px', height: 'auto' }} />
          </div>
          {score.fullTime.home} X {score.fullTime.away}
          <div>
            <img src={awayTeam.crest} alt={`${awayTeam.name} crest`} className="inline-block w-6 h-6 ml-2" style={{ width:'40px', height: 'auto' }} />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
      </CardFooter>
    </Card>
  )
}