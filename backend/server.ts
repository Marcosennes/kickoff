import * as express from "express";
import * as cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();

console.log("Token carregado:", process.env.FOOTBALL_TOKEN);

const app = express();
app.use(cors());

const TOKEN = process.env.FOOTBALL_TOKEN;
const PORT = process.env.PORT || 3001;

if (!TOKEN) {
  console.error("❌ Token não encontrado. Verifique seu .env");
  process.exit(1);
}

app.get("/api/brasileirao", async (_req, res) => {
  console.log("🔹 Requisição recebida /api/brasileirao");
  console.log("Token usado:", TOKEN);

  try {
    const response = await fetch(
      "https://api.football-data.org/v4/competitions/BSA/matches?status=FINISHED",
      {
        headers: { "X-Auth-Token": TOKEN },
      }
    );

    console.log("Status da resposta da API:", response.status);
    console.log("Headers da resposta da API:", response.headers.get("content-type"));

    const data = await response.json();
    console.log("Dados recebidos da Football-Data.org:", data);

    res.json(data);
  } catch (err) {
    console.error("Erro ao buscar partidas:", err);
    res.status(500).json({ error: "Erro ao buscar partidas" });
  }
});

app.listen(PORT, () => console.log(`✅ Servidor rodando em http://localhost:${PORT}`));