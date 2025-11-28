# 🎮 Sistema ESCAPE - Engenharia de Sistemas UFMG

**Escape Room Digital Gamificado para Mostra de Profissões 2025**

[![Deploy on Render](https://img.shields.io/badge/Deploy-Render-46E3B7?style=for-the-badge&logo=render)](https://sistema-escape-es-ufmg.onrender.com)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

---

## 📖 Sobre o Projeto

O **Sistema ESCAPE** é uma experiência interativa desenvolvida para apresentar o curso de Engenharia de Sistemas da UFMG a estudantes do ensino médio durante a Mostra de Profissões. Através de gamificação e desafios práticos, os participantes vivenciam conceitos fundamentais da área de forma divertida e memorável.

### 🎯 Objetivos

- Despertar interesse genuíno pela Engenharia de Sistemas
- Demonstrar conceitos do curso através de experiência prática
- Proporcionar autodescoberta com certificados personalizados
- Informar sobre o curso, mercado e oportunidades profissionais

---

## ✨ Funcionalidades

### 🎲 5 Desafios Interativos

1. **🔍 Identificação do Problema** - Análise sistêmica de componentes
2. **⚖️ Priorização de Sistemas** - Tomada de decisão sob pressão
3. **📊 Modelagem de Fluxo** - Pensamento sistêmico aplicado
4. **🔒 Segurança e Integridade** - Detecção de padrões de ataque
5. **⚡ Otimização do Sistema** - Maximização de performance

### 🏆 Sistema de Gamificação

- **Pontuação dinâmica** (até 800 pontos + bônus de tempo)
- **Ranking ao vivo** (do dia e geral)
- **5 perfis de engenheiro** baseados em performance:
  - 🧠 Engenheiro(a) Analítico(a)
  - ⚡ Engenheiro(a) Estrategista
  - 🔧 Engenheiro(a) Solucionador(a)
  - 🏗️ Engenheiro(a) Arquiteto(a) de Sistemas
  - 🚀 Engenheiro(a) de Sistemas Inteligentes

### 📱 Recursos Adicionais

- **Certificado personalizado** compartilhável
- **Memes educativos** sobre ES
- **Informações completas** do curso (duração, mercado, salários)
- **Painel administrativo** para monitores
- **Acesso via QR Code** - sem necessidade de instalação

---

## 🚀 Acesso Rápido

### URLs do Sistema

| Página | URL | Descrição |
|--------|-----|-----------|
| 🎮 **Jogo** | [sistema-escape-es-ufmg.onrender.com](https://sistema-escape-es-ufmg.onrender.com) | Experiência principal |
| 📱 **QR Code** | [/qrcode.html](https://sistema-escape-es-ufmg.onrender.com/qrcode.html) | Para impressão |
| 📊 **Painel Admin** | [/admin](https://sistema-escape-es-ufmg.onrender.com/admin) | Estatísticas e ranking |

### Como Participar

1. **Aponte a câmera** do celular para o QR Code
2. **Clique no link** que aparecer
3. **Digite seu nome** e inicie a missão
4. **Complete os 5 desafios** em até 5 minutos
5. **Receba seu certificado** personalizado!

---

## 💻 Instalação Local

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18+ instalado
- Git (opcional)

### Passo a Passo

```bash
# 1. Clonar repositório
git clone https://github.com/SEU-USUARIO/sistema-escape-es-ufmg.git
cd sistema-escape-es-ufmg

# 2. Instalar dependências
npm install

# 3. Iniciar servidor
npm start
```

### Acesso Local

- **Jogo:** http://localhost:3000
- **QR Code:** http://localhost:3000/qrcode.html
- **Admin:** http://localhost:3000/admin

---

## 🌐 Deploy no Render.com

### Deploy Rápido

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com)

### Passo a Passo Manual

1. **Criar conta no Render:** https://render.com
2. **New Web Service** → Conectar GitHub
3. **Configurações:**
   ```
   Name: sistema-escape-es-ufmg
   Environment: Node
   Build Command: npm install
   Start Command: npm start
   ```
4. **Variável de Ambiente:**
   ```
   NODE_ENV=production
   ```
5. **Deploy!** 🚀

### Manter Servidor Ativo (Free Tier)

O plano gratuito do Render "dorme" após 15min de inatividade. Para manter ativo:

**Opção 1: UptimeRobot**
1. Criar conta em https://uptimerobot.com
2. Add Monitor → HTTP(s)
3. URL: `https://sistema-escape-es-ufmg.onrender.com`
4. Interval: Every 5 minutes

**Opção 2: Upgrade para Starter** ($7/mês)
- Servidor nunca dorme
- Resposta instantânea
- Recomendado para dia do evento

---

## 📂 Estrutura do Projeto

```
sistema-escape-es-ufmg/
│
├── server.js              # Servidor Express + API + QR Code
├── package.json           # Dependências e scripts
├── .gitignore            # Arquivos ignorados pelo Git
├── README.md             # Este arquivo
│
└── public/
    └── index.html        # Frontend completo (HTML+CSS+JS)
```

### Tecnologias Utilizadas

#### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web minimalista
- **QRCode** - Geração de QR codes

#### Frontend
- **HTML5** - Estrutura
- **CSS3** - Design responsivo e animações
- **Vanilla JavaScript** - Lógica e interatividade

#### Deploy
- **Render.com** - Hospedagem gratuita
- **GitHub** - Versionamento

---

## 🎨 Personalização

### Mudar URL do QR Code

Edite `server.js`, linha ~45:

```javascript
async function generateQRCode() {
  const url = 'https://SEU-DOMINIO-AQUI.com';
  // ...
}
```

### Ajustar Dificuldade

Edite `public/index.html`:

```javascript
// Tempo por desafio (em segundos)
let timeRemaining = 300; // 5 minutos

// Pontuação dos desafios
const challengeScores = {
  1: 100,  // Identificação
  2: 150,  // Priorização
  3: 150,  // Modelagem
  4: 200,  // Segurança
  5: 200   // Otimização
};
```

### Personalizar Cores

Edite `public/index.html`, variáveis CSS:

```css
:root {
  --primary: #0066FF;      /* Azul principal */
  --secondary: #00D9FF;    /* Ciano */
  --accent: #8B00FF;       /* Roxo */
  --success: #00FF88;      /* Verde */
  --warning: #FF6B00;      /* Laranja */
}
```

---

## 📊 API Endpoints

### GET `/api/ranking`

Retorna ranking do dia e geral.

**Resposta:**
```json
{
  "daily": [...],
  "allTime": [...],
  "totalPlayers": 150,
  "todayPlayers": 45
}
```

### POST `/api/score`

Salva pontuação do jogador.

**Body:**
```json
{
  "playerName": "João Silva",
  "score": 687,
  "time": 263,
  "profile": "Engenheiro(a) Estrategista"
}
```

**Resposta:**
```json
{
  "success": true,
  "dailyPosition": 8,
  "allTimePosition": 47
}
```

### GET `/api/stats`

Retorna estatísticas gerais.

**Resposta:**
```json
{
  "totalPlayers": 150,
  "todayPlayers": 45,
  "avgScore": 587,
  "avgTime": 245,
  "profileCounts": {...},
  "highestScore": 782
}
```

---

## 🔧 Solução de Problemas

### QR Code com URL Errada

**Problema:** QR Code aponta para localhost ou IP local

**Solução:** Editar `server.js` e forçar URL fixa:

```javascript
async function generateQRCode() {
  const url = 'https://sistema-escape-es-ufmg.onrender.com';
  // ...
}
```

### Servidor Não Inicia

**Problema:** Porta já em uso

**Solução:**
```bash
# Matar processo na porta 3000 (Linux/Mac)
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID [NUMERO] /F
```

### Deploy Falhou no Render

**Causa comum:** `package.json` incorreto

**Solução:** Verificar se tem:
```json
{
  "scripts": {
    "start": "node server.js"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
```

---

## 📈 Métricas Esperadas

### Participação
- **80-150 participantes/dia** durante a Mostra
- **Taxa de conclusão > 90%**
- **Tempo médio: 5-7 minutos**

### Engajamento
- **30-40% compartilham** certificado nas redes
- **15-25% buscam mais informações** sobre o curso
- **Satisfação > 4.5/5**

---

## 👥 Equipe de Desenvolvimento

| Nome | Matrícula | Contato |
|------|-----------|---------|
| **Luana Ferreira** | 2025116670 | [GitHub](#) |
| **Fernanda Souza Siqueira** | 2025113484 | [GitHub](#) |
| **Milena Flávia** | 2025075086 | [GitHub](#) |

### Orientação
- **Curso:** Engenharia de Sistemas - UFMG
- **Evento:** Mostra de Profissões UFMG 2025
- **Disciplina:** [Nome da Disciplina]

---

## 📱 Redes Sociais

Siga a Engenharia de Sistemas UFMG:

- **Instagram:** [@es.ufmg](https://instagram.com/es.ufmg)
- **Site:** [sistemas.ufmg.br](https://sistemas.ufmg.br)
- **Email:** contato.es@ufmg.br

---

## 📄 Licença

Este projeto está sob a licença **MIT** - veja o arquivo [LICENSE](LICENSE) para detalhes.

**Uso livre para fins educacionais e não comerciais.**

---

## 🙏 Agradecimentos

- **UFMG** - Pela infraestrutura e apoio
- **Coordenação de ES** - Pela orientação
- **Participantes da Mostra** - Pelo feedback
- **Comunidade Open Source** - Pelas ferramentas utilizadas

---

## 🚀 Próximos Passos

### Melhorias Futuras

- [ ] Sistema de badges e conquistas
- [ ] Modo multiplayer (competição em tempo real)
- [ ] Integração com banco de dados persistente
- [ ] Dashboard avançado com gráficos
- [ ] Versão mobile nativa (React Native)
- [ ] Suporte a múltiplos idiomas
- [ ] Sistema de hints progressivos

### Versões Planejadas

- **v1.0** (Atual) - MVP para Mostra de Profissões
- **v1.1** - Sistema de persistência de dados
- **v2.0** - Multiplayer e novos desafios
- **v3.0** - Aplicativo mobile

---

## 📞 Suporte e Contato

### Durante a Mostra de Profissões

**Suporte Técnico:**
- Monitores na sala
- Painel admin: `/admin`

### Pós-Evento

**Reportar Bugs:**
- Abrir issue no GitHub
- Email: contato.es@ufmg.br

**Sugestões:**
- Pull requests são bem-vindos!
- Discussões na aba Issues

---

## 🌟 Contribuindo

Contribuições são muito bem-vindas! Para contribuir:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. **Commit** suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. **Push** para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um **Pull Request**

### Diretrizes

- Manter código limpo e documentado
- Seguir padrões de ES6+
- Testar antes de submeter
- Atualizar documentação quando necessário

---

## 📚 Documentação Adicional

- [DEPLOY_RENDER.md](docs/DEPLOY_RENDER.md) - Guia completo de deploy
- [CORRIGIR_QR_CODE.md](docs/CORRIGIR_QR_CODE.md) - Como corrigir URL do QR
- [TUTORIAL_GITHUB.md](docs/TUTORIAL_GITHUB.md) - Como usar GitHub
- [CHECKLIST_EVENTO.html](docs/CHECKLIST_EVENTO.html) - Checklist para impressão

---

## 💡 FAQ

### Por que Engenharia de Sistemas?

Engenharia de Sistemas é a área que integra tecnologia, gestão e pessoas para resolver problemas complexos do mundo real. É o "cérebro" por trás de sistemas que usamos todos os dias!

### Quanto tempo leva para completar?

Em média, 5-7 minutos. Mas não se preocupe - é divertido e rápido!

### Preciso saber programar?

Não! O jogo é acessível para qualquer pessoa. Os desafios testam raciocínio lógico e pensamento sistêmico, não conhecimento técnico.

### Posso jogar mais de uma vez?

Sim! Tente melhorar sua pontuação e alcançar o topo do ranking.

### O certificado é oficial?

É um certificado de participação educacional. Não substitui certificação profissional, mas é ótimo para compartilhar nas redes sociais!

---

## 🎉 Estatísticas do Projeto

![GitHub stars](https://img.shields.io/github/stars/SEU-USUARIO/sistema-escape-es-ufmg?style=social)
![GitHub forks](https://img.shields.io/github/forks/SEU-USUARIO/sistema-escape-es-ufmg?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/SEU-USUARIO/sistema-escape-es-ufmg?style=social)

---

<div align="center">

**⭐ Se este projeto ajudou você, considere dar uma estrela no GitHub! ⭐**

**Desenvolvido com 💙 por estudantes de Engenharia de Sistemas da UFMG**

[🎮 Jogar Agora](https://sistema-escape-es-ufmg.onrender.com) • [📱 Ver QR Code](https://sistema-escape-es-ufmg.onrender.com/qrcode.html) • [📊 Painel Admin](https://sistema-escape-es-ufmg.onrender.com/admin)

**Mostra de Profissões UFMG 2025**

</div>
