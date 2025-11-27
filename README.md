# 🎮 Sistema ESCAPE - Engenharia de Sistemas UFMG

**Escape Room Digital Interativo para Mostra de Profissões**

Desenvolvido por: Luana Ferreira, Fernanda Souza Siqueira e Milena Flávia

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Requisitos do Sistema](#requisitos-do-sistema)
- [Instalação Passo a Passo](#instalação-passo-a-passo)
- [Como Usar na Mostra](#como-usar-na-mostra)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Solução de Problemas](#solução-de-problemas)
- [Customização](#customização)

---

## 🎯 Sobre o Projeto

O Sistema ESCAPE é uma experiência interativa gamificada que apresenta o curso de Engenharia de Sistemas da UFMG para estudantes do ensino médio através de 5 desafios que simulam situações reais da profissão.

**Recursos principais:**
- ✅ 5 desafios progressivos (Análise, Priorização, Modelagem, Segurança, Otimização)
- ✅ Sistema de pontuação e ranking ao vivo
- ✅ Certificado personalizado com perfil de engenheiro
- ✅ Acesso via QR Code em rede local
- ✅ Painel administrativo para monitores
- ✅ Design responsivo (funciona em celular, tablet e computador)

---

## 💻 Requisitos do Sistema

### Hardware Mínimo
- **Servidor**: 1 computador/notebook com WiFi
- **Para Participantes**: Smartphones com câmera ou tablets

### Software Necessário
- **Node.js** versão 14 ou superior ([Download aqui](https://nodejs.org/))
- **Navegador moderno** (Chrome, Firefox, Safari, Edge)
- **Roteador WiFi** ou cabo de rede

### Conhecimentos Necessários
- ✅ Básico de linha de comando (copiar/colar comandos)
- ✅ Acesso à internet (apenas para instalação inicial)
- ❌ NÃO precisa saber programar!

---

## 🚀 Instalação Passo a Passo

### PASSO 1: Instalar Node.js

#### No Windows:
1. Acesse https://nodejs.org/
2. Baixe a versão LTS (recomendada)
3. Execute o instalador e clique em "Next" até finalizar
4. Abra o **Prompt de Comando** (Win + R, digite `cmd`)
5. Digite `node -v` e pressione Enter
6. Se aparecer algo como `v18.17.0`, está instalado! ✅

#### No macOS:
1. Acesse https://nodejs.org/
2. Baixe a versão LTS
3. Execute o instalador
4. Abra o **Terminal** (Cmd + Espaço, digite "Terminal")
5. Digite `node -v` e pressione Enter

#### No Linux (Ubuntu/Debian):
```bash
sudo apt update
sudo apt install nodejs npm
node -v
```

---

### PASSO 2: Baixar o Projeto

**Opção A: Download Direto** (Mais Fácil)
1. Baixe os arquivos do projeto em um .zip
2. Extraia para uma pasta (exemplo: `C:\sistema-escape` ou `~/sistema-escape`)

**Opção B: Git** (Se souber usar)
```bash
git clone [URL-DO-REPOSITORIO]
cd sistema-escape
```

---

### PASSO 3: Organizar os Arquivos

Crie a seguinte estrutura de pastas:

```
sistema-escape/
│
├── server.js              (arquivo do servidor)
├── package.json           (configurações)
├── README.md             (este arquivo)
│
└── public/               (criar esta pasta!)
    └── index.html        (jogo principal)
```

**IMPORTANTE**: Coloque o arquivo `index.html` (o jogo) dentro de uma pasta chamada `public`.

---

### PASSO 4: Instalar Dependências

1. Abra o **Terminal/Prompt de Comando**
2. Navegue até a pasta do projeto:

```bash
# Windows
cd C:\sistema-escape

# macOS/Linux
cd ~/sistema-escape
```

3. Instale as dependências:

```bash
npm install
```

Aguarde... Vai baixar alguns arquivos (Express e QRCode). ⏳

Quando terminar, você verá uma pasta nova chamada `node_modules`. ✅

---

### PASSO 5: Conectar à Rede Local

#### Opção A: WiFi (Recomendado)
1. Conecte o computador servidor à rede WiFi local
2. Anote o nome da rede WiFi (SSID)
3. **Importante**: Todos os dispositivos devem estar na MESMA rede WiFi

#### Opção B: Criar Hotspot
1. No computador servidor, crie um ponto de acesso:
   - **Windows 10/11**: Configurações > Rede > Hotspot Móvel
   - **macOS**: Preferências > Compartilhamento > Compartilhamento de Internet
2. Defina um nome e senha
3. Conecte os celulares/tablets a esse hotspot

---

### PASSO 6: Iniciar o Servidor

No terminal, dentro da pasta do projeto, execute:

```bash
npm start
```

Você verá algo assim:

```
╔════════════════════════════════════════════════╗
║     🎮 SISTEMA ESCAPE - SERVIDOR ATIVO 🎮     ║
╠════════════════════════════════════════════════╣
║  🌐 URL Local: http://192.168.0.105:3000      ║
║  🔌 Porta: 3000                                ║
║  📱 QR Code: Abra qrcode.html no navegador    ║
╚════════════════════════════════════════════════╝
```

**✅ Servidor está rodando!**

---

### PASSO 7: Gerar e Imprimir QR Code

1. No servidor, abra o navegador
2. Acesse: `http://localhost:3000/qrcode.html`
3. Você verá um QR Code bonito na tela! 📱
4. Imprima ou mostre na tela

**Dica**: Você pode imprimir vários QR Codes ou colocar em um cartaz!

---

## 🎪 Como Usar na Mostra

### Setup da Sala (30 minutos antes)

1. **Equipamentos necessários:**
   - ✅ 1 computador (servidor)
   - ✅ 1 TV grande ou projetor (para ranking ao vivo)
   - ✅ Roteador WiFi ou hotspot ativo
   - ✅ QR Code impresso ou em cartaz
   - ✅ Luzes LED (opcional, para ambientação)

2. **Configuração:**
   ```bash
   # No computador servidor
   cd sistema-escape
   npm start
   ```

3. **Na TV/Projetor:**
   - Abra o navegador
   - Acesse: `http://localhost:3000`
   - Deixe na tela inicial (mostra ranking ao vivo)

4. **Para Monitores:**
   - Abra: `http://localhost:3000/admin`
   - Painel mostra estatísticas em tempo real

### Fluxo de Atendimento

**Quando um estudante chegar:**

1. Monitor: "E aí, preparado(a) para salvar um sistema em colapso? Você tem 5 minutos!"

2. Estudante aponta celular para QR Code

3. Jogo abre automaticamente no celular

4. Estudante completa os desafios

5. Ao finalizar, aparece:
   - Pontuação
   - Posição no ranking
   - Certificado personalizado
   - Informações do curso

6. Monitor: "Parabéns! Quer tirar foto do certificado? Segue a gente no Instagram @es.ufmg!"

### Dicas para Monitores

✅ **Faça:**
- Deixe os estudantes jogarem sozinhos (não dê respostas!)
- Incentive competição saudável: "Olha o ranking, você consegue entrar no Top 5!"
- Tire fotos dos estudantes com certificado
- Explique o curso DEPOIS do jogo (quando eles já estão interessados)

❌ **Evite:**
- Ficar explicando muito antes do jogo (perde o impacto)
- Dar respostas dos desafios
- Apressar os estudantes

---

## 📁 Estrutura do Projeto

```
sistema-escape/
│
├── server.js                 # Servidor Node.js + API
├── package.json              # Dependências do projeto
├── qrcode.html              # QR Code (gerado automaticamente)
├── node_modules/            # Bibliotecas (não modificar)
│
└── public/
    └── index.html           # Jogo principal (frontend)
```

### Arquivos Importantes

- **server.js**: Servidor, ranking, geração de QR Code
- **public/index.html**: Jogo completo (HTML + CSS + JavaScript)
- **qrcode.html**: Página com QR Code para acesso

---

## 🔧 Solução de Problemas

### Problema: "node: command not found"
**Solução**: Node.js não está instalado ou não está no PATH.
- Reinstale o Node.js
- Reinicie o terminal/prompt

### Problema: "Porta 3000 já está em uso"
**Solução**: Outra aplicação está usando a porta 3000.
- Feche outros programas
- Ou edite `server.js` e mude `const PORT = 3000` para `const PORT = 3001`

### Problema: Celular não consegue acessar
**Solução checklist**:
1. ✅ Celular e servidor estão na MESMA rede WiFi?
2. ✅ Firewall do Windows está bloqueando? (Desative temporariamente)
3. ✅ Digite o IP correto mostrado no terminal
4. ✅ Tente acessar pelo navegador primeiro: `http://[IP]:3000`

### Problema: QR Code não funciona
**Solução**:
- Certifique-se que o servidor está rodando (`npm start`)
- Abra `qrcode.html` no navegador
- Ou acesse manualmente: copie o link `http://[IP]:3000` e envie para o celular

### Problema: Ranking não atualiza
**Solução**:
- Atualize a página (F5 ou Cmd + R)
- O ranking atualiza automaticamente a cada 10 segundos

### Problema: Erro ao instalar dependências
**Solução**:
```bash
# Limpe o cache e reinstale
npm cache clean --force
rm -rf node_modules
npm install
```

---

## 🎨 Customização

### Mudar Cores

Edite `public/index.html`, procure por:

```css
:root {
  --primary: #0066FF;    /* Azul principal */
  --secondary: #00D9FF;  /* Ciano */
  --accent: #8B00FF;     /* Roxo */
}
```

### Mudar Tempo dos Desafios

Em `public/index.html`, procure:

```javascript
let challengeTime = 60; // Tempo em segundos por desafio
```

### Adicionar Mais Perguntas

Edite os desafios no `index.html` (procure por `<!-- DESAFIO 1 -->`, etc.)

### Mudar Porta do Servidor

Em `server.js`:

```javascript
const PORT = 3000; // Mude para 8080, 3001, etc.
```

---

## 📊 Painel Administrativo

Acesse `http://localhost:3000/admin` para ver:

- 📈 Total de participantes
- 🏆 Top 10 geral e do dia
- ⏱️ Tempo médio de conclusão
- 📊 Pontuação média
- 🎯 Distribuição de perfis de engenheiro

**Atualização automática a cada 30 segundos!**

---

## 🚀 Comandos Rápidos

```bash
# Instalar dependências
npm install

# Iniciar servidor
npm start

# Parar servidor
Ctrl + C (ou Cmd + C no Mac)

# Ver ajuda
npm help
```


### Problemas Técnicos Comuns

1. **Servidor travou**: Pressione Ctrl+C e digite `npm start` novamente
2. **Muitos acessos simultâneos**: Normal! O sistema aguenta até 50 pessoas ao mesmo tempo
3. **Celular lento**: Peça para fechar outros apps

---

## 🎓 Créditos

**Desenvolvido por:**
- Luana Ferreira (2025116670)
- Fernanda Souza Siqueira (2025113484)
- Milena Flávia (2025075086)

**Curso:** Engenharia de Sistemas - UFMG  
**Evento:** Mostra de Profissões UFMG 2025  
**Licença:** MIT (uso livre para fins educacionais)

---

## 🌟 Boas Práticas

### Antes da Mostra
- ✅ Teste com amigos/família
- ✅ Imprima vários QR Codes
- ✅ Tenha backup de energia (notebook + power bank)
- ✅ Configure luzes e música ambiente

### Durante a Mostra
- ✅ Mantenha o painel admin aberto
- ✅ Celebre recordes no ranking
- ✅ Tire fotos dos participantes
- ✅ Incentive compartilhamento nas redes sociais

### Depois da Mostra
- ✅ Salve os dados do ranking (copie da tela admin)
- ✅ Colete feedback dos participantes
- ✅ Compartilhe estatísticas nas redes do curso

---

## 🎯 Checklist Pré-Evento

```
[ ] Node.js instalado
[ ] Dependências instaladas (npm install)
[ ] Servidor testado (npm start)
[ ] QR Code impresso
[ ] Rede WiFi funcionando
[ ] TV/Projetor configurado
[ ] Monitores treinados
[ ] Backup de energia disponível
[ ] Cartazes e decoração prontos
[ ] Instagram @es.ufmg divulgado
[ ] Certificados testados
[ ] Ranking zerado do dia anterior
```

---

**🎮 Boa Mostra de Profissões! Vamos mostrar que Engenharia de Sistemas é o futuro! 🚀**
