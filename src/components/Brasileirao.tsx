import { useEffect, useState } from "react";

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
          <li key={match.id} className="border rounded-lg p-3">
            <div className="font-semibold">
              {match.homeTeam.name} {match.score.fullTime.home} - {match.score.fullTime.away} {match.awayTeam.name}
            </div>
            <div className="text-sm text-gray-600">
              {new Date(match.utcDate).toLocaleDateString("pt-BR")}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
