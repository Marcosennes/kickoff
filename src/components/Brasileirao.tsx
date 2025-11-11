import { useEffect, useState } from "react";
import { Match } from "@/my-components/Match";
interface Team {
  name: string;
}

interface Score {
  fullTime: {
    home: number;
    away: number;
  };
}

interface Match {
  id: number;
  utcDate: string;
  status: string;
  homeTeam: Team;
  awayTeam: Team;
  score: Score;
}

export default function Brasileirao() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/brasileirao");
        const data = await res.json();
        const finished = data.matches?.filter((m: Match) => m.status === "FINISHED") || [];
        setMatches(finished.slice(-5).reverse());
      } catch (err) {
        console.error("Erro ao buscar partidas:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) return <p>Carregando partidas...</p>;

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-3">Últimos Jogos do Brasileirão</h2>
      <ul className="space-y-3">
        {matches.map((match) => (
          <Match
            id={1}
            homeTeam={match.homeTeam}
            awayTeam={match.awayTeam}
            score={match.score}
            utcDate={match.utcDate}
          />
          // <li key={match.id} className="border rounded-lg p-3">
          //   <div className="font-semibold">
          //     <img src={match.homeTeam.crest} alt={`${match.homeTeam.name} crest`} className="inline-block w-6 h-6 ml-2" />
          //     <div className="inline-block mx-2 pt-2">
          //       <span>{match.score.fullTime.home}</span>
          //       <span>X</span>
          //       <span>{match.score.fullTime.away}</span>
          //     </div>
          //     <img src={match.awayTeam.crest} alt={`${match.awayTeam.name} crest`} className="inline-block w-6 h-6 ml-2" />
          //   </div>
          //   <div className="text-sm text-gray-600">
          //     {new Date(match.utcDate).toLocaleDateString("pt-BR")}
          //   </div>
          // </li>
        ))}
      </ul>
    </div>
  );
}
