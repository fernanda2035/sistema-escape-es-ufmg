const express = require('express');
const path = require('path');
const fs = require('fs');
const qrcode = require('qrcode');
const os = require('os');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Banco de dados em memória (para ranking)
let rankings = [];
let currentDayRankings = [];
let lastResetDate = new Date().toDateString();

// Resetar ranking diário à meia-noite
function checkDayReset() {
  const today = new Date().toDateString();
  if (today !== lastResetDate) {
    currentDayRankings = [];
    lastResetDate = today;
  }
}

// Função para obter IP local
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // Pular endereços internos e não IPv4
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

// Gerar QR Code ao iniciar servidor
async function generateQRCode() {
  const localIP = getLocalIP();
  const url = `http://${localIP}:${PORT}`;
  
  try {
    // Gerar QR Code como imagem
    const qrImage = await qrcode.toDataURL(url, {
      width: 300,
      margin: 2,
      color: {
        dark: '#0066FF',
        light: '#FFFFFF'
      }
    });
    
    // Salvar QR Code como arquivo HTML para impressão
    const qrHTML = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>QR Code - Sistema ESCAPE</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Arial', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }
    .qr-container {
      background: white;
      border-radius: 20px;
      padding: 40px;
      text-align: center;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      max-width: 500px;
    }
    h1 {
      color: #0066FF;
      margin-bottom: 10px;
      font-size: 28px;
    }
    .subtitle {
      color: #666;
      margin-bottom: 30px;
      font-size: 16px;
    }
    .qr-code {
      background: white;
      padding: 20px;
      border-radius: 15px;
      display: inline-block;
      margin: 20px 0;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    .qr-code img {
      display: block;
      width: 300px;
      height: 300px;
    }
    .url {
      background: #f0f4ff;
      padding: 15px 20px;
      border-radius: 10px;
      margin-top: 20px;
      font-family: 'Courier New', monospace;
      color: #0066FF;
      font-size: 18px;
      font-weight: bold;
      word-break: break-all;
    }
    .instructions {
      margin-top: 30px;
      color: #666;
      line-height: 1.6;
    }
    .instructions strong {
      color: #0066FF;
    }
    .footer {
      margin-top: 30px;
      color: #999;
      font-size: 14px;
    }
    @media print {
      body {
        background: white;
      }
      .qr-container {
        box-shadow: none;
      }
    }
  </style>
</head>
<body>
  <div class="qr-container">
    <h1>🎮 SISTEMA ESCAPE</h1>
    <p class="subtitle">Engenharia de Sistemas - UFMG</p>
    
    <div class="qr-code">
      <img src="${qrImage}" alt="QR Code">
    </div>
    
    <div class="url">${url}</div>
    
    <div class="instructions">
      <p><strong>📱 Como Participar:</strong></p>
      <p>1. Aponte a câmera do celular para o QR Code</p>
      <p>2. Clique no link que aparecer</p>
      <p>3. Complete os desafios em 5 minutos</p>
      <p>4. Ganhe seu certificado personalizado!</p>
    </div>
    
    <div class="footer">
      Mostra de Profissões UFMG 2025
    </div>
  </div>
</body>
</html>
    `;
    
    fs.writeFileSync(path.join(__dirname, 'qrcode.html'), qrHTML);
    
    console.log('\n╔════════════════════════════════════════════════╗');
    console.log('║     🎮 SISTEMA ESCAPE - SERVIDOR ATIVO 🎮     ║');
    console.log('╠════════════════════════════════════════════════╣');
    console.log(`║  🌐 URL Local: ${url.padEnd(28)} ║`);
    console.log(`║  🔌 Porta: ${PORT}                                 ║`);
    console.log('║  📱 QR Code: Abra qrcode.html no navegador    ║');
    console.log('╚════════════════════════════════════════════════╝\n');
    
  } catch (err) {
    console.error('Erro ao gerar QR Code:', err);
  }
}

// Rotas da API

// Página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Obter ranking
app.get('/api/ranking', (req, res) => {
  checkDayReset();
  
  res.json({
    daily: currentDayRankings.slice(0, 5),
    allTime: rankings.slice(0, 10),
    totalPlayers: rankings.length,
    todayPlayers: currentDayRankings.length
  });
});

// Salvar pontuação
app.post('/api/score', (req, res) => {
  checkDayReset();
  
  const { playerName, score, time, profile } = req.body;
  
  if (!playerName || !score || !time || !profile) {
    return res.status(400).json({ error: 'Dados incompletos' });
  }
  
  const entry = {
    playerName: playerName.trim(),
    score: parseInt(score),
    time: parseInt(time),
    profile,
    timestamp: new Date().toISOString(),
    date: new Date().toLocaleDateString('pt-BR')
  };
  
  // Adicionar ao ranking geral
  rankings.push(entry);
  rankings.sort((a, b) => b.score - a.score);
  
  // Adicionar ao ranking do dia
  currentDayRankings.push(entry);
  currentDayRankings.sort((a, b) => b.score - a.score);
  
  // Limitar tamanho (opcional)
  if (rankings.length > 100) {
    rankings = rankings.slice(0, 100);
  }
  
  // Posições no ranking
  const dailyPosition = currentDayRankings.findIndex(r => 
    r.playerName === entry.playerName && r.timestamp === entry.timestamp
  ) + 1;
  
  const allTimePosition = rankings.findIndex(r => 
    r.playerName === entry.playerName && r.timestamp === entry.timestamp
  ) + 1;
  
  res.json({
    success: true,
    dailyPosition,
    allTimePosition,
    entry
  });
});

// Obter estatísticas
app.get('/api/stats', (req, res) => {
  checkDayReset();
  
  const avgScore = rankings.length > 0 
    ? Math.round(rankings.reduce((sum, r) => sum + r.score, 0) / rankings.length)
    : 0;
    
  const avgTime = rankings.length > 0
    ? Math.round(rankings.reduce((sum, r) => sum + r.time, 0) / rankings.length)
    : 0;
  
  // Contar perfis
  const profileCounts = {};
  rankings.forEach(r => {
    profileCounts[r.profile] = (profileCounts[r.profile] || 0) + 1;
  });
  
  res.json({
    totalPlayers: rankings.length,
    todayPlayers: currentDayRankings.length,
    avgScore,
    avgTime,
    profileCounts,
    highestScore: rankings.length > 0 ? rankings[0].score : 0
  });
});

// Painel administrativo (para monitores)
app.get('/admin', (req, res) => {
  const adminHTML = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Painel Admin - Sistema ESCAPE</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #1a1a2e;
      color: white;
      padding: 20px;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    h1 {
      color: #00d9ff;
      margin-bottom: 30px;
      text-align: center;
    }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }
    .stat-card {
      background: #16213e;
      padding: 20px;
      border-radius: 10px;
      border-left: 4px solid #00d9ff;
    }
    .stat-value {
      font-size: 32px;
      font-weight: bold;
      color: #00d9ff;
      margin: 10px 0;
    }
    .stat-label {
      color: #999;
      font-size: 14px;
    }
    table {
      width: 100%;
      background: #16213e;
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 20px;
    }
    th {
      background: #0f3460;
      padding: 15px;
      text-align: left;
      color: #00d9ff;
    }
    td {
      padding: 12px 15px;
      border-bottom: 1px solid #1a1a2e;
    }
    tr:hover {
      background: #1a1a2e;
    }
    .btn {
      background: #00d9ff;
      color: #1a1a2e;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
      margin: 10px 5px;
    }
    .btn:hover {
      background: #00b8d4;
    }
    .refresh-info {
      text-align: center;
      color: #999;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📊 Painel Administrativo - Sistema ESCAPE</h1>
    
    <div class="stats-grid" id="statsGrid">
      <div class="stat-card">
        <div class="stat-label">Total de Jogadores</div>
        <div class="stat-value" id="totalPlayers">-</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Jogadores Hoje</div>
        <div class="stat-value" id="todayPlayers">-</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Pontuação Média</div>
        <div class="stat-value" id="avgScore">-</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Tempo Médio</div>
        <div class="stat-value" id="avgTime">-</div>
      </div>
    </div>
    
    <h2 style="color: #00d9ff; margin: 30px 0 15px;">🏆 Top 10 Geral</h2>
    <table id="rankingTable">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Pontos</th>
          <th>Tempo</th>
          <th>Perfil</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody id="rankingBody"></tbody>
    </table>
    
    <div style="text-align: center;">
      <button class="btn" onclick="location.reload()">🔄 Atualizar Dados</button>
      <button class="btn" onclick="window.open('/qrcode.html', '_blank')">📱 Ver QR Code</button>
    </div>
    
    <p class="refresh-info">Atualize a página para ver novos dados • Sistema em tempo real</p>
  </div>
  
  <script>
    async function loadData() {
      try {
        // Carregar estatísticas
        const statsRes = await fetch('/api/stats');
        const stats = await statsRes.json();
        
        document.getElementById('totalPlayers').textContent = stats.totalPlayers;
        document.getElementById('todayPlayers').textContent = stats.todayPlayers;
        document.getElementById('avgScore').textContent = stats.avgScore;
        document.getElementById('avgTime').textContent = formatTime(stats.avgTime);
        
        // Carregar ranking
        const rankingRes = await fetch('/api/ranking');
        const ranking = await rankingRes.json();
        
        const tbody = document.getElementById('rankingBody');
        tbody.innerHTML = '';
        
        ranking.allTime.forEach((entry, index) => {
          const row = tbody.insertRow();
          row.innerHTML = \`
            <td><strong>\${index + 1}</strong></td>
            <td>\${entry.playerName}</td>
            <td><strong>\${entry.score}</strong></td>
            <td>\${formatTime(entry.time)}</td>
            <td>\${entry.profile}</td>
            <td>\${entry.date}</td>
          \`;
        });
        
      } catch (err) {
        console.error('Erro ao carregar dados:', err);
      }
    }
    
    function formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return \`\${mins}:\${secs.toString().padStart(2, '0')}\`;
    }
    
    loadData();
    
    // Auto-refresh a cada 30 segundos
    setInterval(loadData, 30000);
  </script>
</body>
</html>
  `;
  
  res.send(adminHTML);
});

// Rota para exibir QR Code
app.get('/qrcode.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'qrcode.html'));
});

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
  generateQRCode();
});

// Tratamento de erros
process.on('uncaughtException', (err) => {
  console.error('Erro não capturado:', err);
});

process.on('unhandledRejection', (err) => {
  console.error('Promise rejeitada:', err);
});
