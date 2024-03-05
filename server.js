const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = process.env.PORT || 3000;

// Conexão com o banco de dados
const db = new sqlite3.Database("correrioAPI.db");

// Criar tabela de encomendas
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS encomendas (
    id TEXT PRIMARY KEY,
    nome_proprietario TEXT,
    contacto INTEGER,
    endereco TEXT,
    documentos TEXT,
    status TEXT
  )`);
});


// Middleware para processar requisições JSON
app.use(express.json());

// Rota para listar todas as encomendas
app.get("/get/api/v1/encomendas", (req, res) => {
  db.all("SELECT * FROM encomendas", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Rota para criar uma nova encomenda
// Rota para criar uma nova encomenda
app.post("/auth/api/v1/encomendas/", (req, res) => {
  const { id, nome_proprietario, contacto, endereco, documentos, status } =
    req.body;

  // Verificar se a encomenda com o mesmo ID já existe
  db.get("SELECT id FROM encomendas WHERE id = ?", id, (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (row) {
      res.status(400).json({ error: "Uma encomenda com este ID já existe." });
      return;
    }

    // Inserir a nova encomenda no banco de dados
    const stmt = db.prepare(
      "INSERT INTO encomendas (id, nome_proprietario, contacto, endereco, documentos, status) VALUES (?, ?, ?, ?, ?, ?)"
    );
    stmt.run(
      id,
      nome_proprietario,
      contacto,
      endereco,
      documentos,
      status,
      (err) => {
        if (err) {
          res.status(500).json({ error: err.message });
          return;
        }
        res.status(201).json({ message: "Encomenda criada com sucesso." });
      }
    );
  });
});

app.put("/update/api/v1/encomendas/:id", (req, res) => {
  const id = req.params.id;
  const { status } = req.body;

  if (!status) {
    res.status(400).json({ error: "O status é obrigatório." });
    return;
  }

  const stmt = db.prepare(
    "UPDATE encomendas SET status = ? WHERE id = ?"
  );
  stmt.run(status, id, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: "Status da encomenda atualizado com sucesso." });
  });
});
// Rota para retornar todas as encomendas com o status "entregue"
app.get("/search/api/v1/encomendas/entregues", (req, res) => {
  const status = "entregue";

  db.all("SELECT * FROM encomendas WHERE status = ?", status, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});
app.get("/search/api/v1/encomendas/vindo", (req, res) => {
  const status = "vindo";

  db.all("SELECT * FROM encomendas WHERE status = ?", status, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.get("/search/api/v1/encomendas/:nome_proprietario", (req, res) => {
    const nome_proprietario = req.params.nome_proprietario

  db.all("SELECT * FROM encomendas WHERE nome_proprietario = ?", nome_proprietario, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});



// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
