# Suno Energias Limpas Projetos Maduros S.A

Site institucional minimalista para disponibilização de documentos da oferta de distribuição pública da Suno Energias Limpas Projetos Maduros S.A.

## Sobre o Projeto

Este é um site single page desenvolvido em Next.js para disponibilizar documentos da oferta de distribuição pública de debêntures, com 3 documentos em formato PDF para download.

## Tecnologias Utilizadas

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **React 19**

## Identidade Visual

O projeto segue rigorosamente os Guardrails da marca Suno:

### Cores

- **Suno Red**: `#D42126` - Ações primárias e ênfases
- **Suno Gray**: `#4B4B4B` - Textos fortes
- **Neutros**: `#212121`, `#666666`, `#999999`, `#BBBBBB`, `#DDDDDD`

### Tipografia

- **Montserrat** (700/500/400) - Títulos e elementos de UI
- **Inter** (700/600/400) - Textos e sistemas

## Instalação

```bash
# Instalar dependências
npm install
```

## Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev
```

O site estará disponível em [http://localhost:3000](http://localhost:3000)

## Adicionar Documentos PDF

1. Navegue até o diretório `public/documents/`
2. Adicione os 3 documentos PDF com os seguintes nomes:
   - `aviso-ao-mercado.pdf` - Aviso ao Mercado da Oferta de Distribuição Pública
   - `escritura-debentures.pdf` - Instrumento Particular de Escritura da 1ª (Primeira) Emissão de Debêntures
   - `ato-societario.pdf` - Ato Societário

Os títulos dos documentos podem ser editados no arquivo `components/DocumentList.tsx`.

## Build de Produção

```bash
# Criar build de produção
npm run build

# Iniciar servidor de produção
npm start
```

## Deploy no Vercel

### Configuração Inicial

1. Instale a CLI do Vercel (se ainda não tiver):
```bash
npm i -g vercel
```

2. Faça login no Vercel:
```bash
vercel login
```

3. Conecte o projeto ao Vercel:
```bash
vercel
```

### Deploy Automático via Git

**Repositório:** https://github.com/ariesuno/site-projetos-maduros

O repositório já está configurado e conectado ao GitHub. Para fazer deploy:

1. No painel do Vercel (https://vercel.com):
   - Clique em "Add New Project"
   - Importe o repositório: `ariesuno/site-projetos-maduros`
   - O Vercel detectará automaticamente as configurações do Next.js
   - Clique em "Deploy"

2. Deploy automático estará configurado:
   - Commits na branch `main` → Deploy em produção
   - Pull requests → Deploy de preview

3. Para futuros updates:
```bash
git add .
git commit -m "sua mensagem"
git push origin main
```

### Configuração MCP Vercel

Para usar o MCP (Model Context Protocol) do Vercel, configure as credenciais de API no seu ambiente de desenvolvimento conforme a documentação do Cursor.

## Estrutura do Projeto

```
site-projetos-maduros/
├── app/
│   ├── layout.tsx          # Layout raiz com fontes e metadata
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globais e variáveis CSS
├── components/
│   ├── Header.tsx          # Cabeçalho com nome da empresa
│   ├── Footer.tsx          # Rodapé com CNPJ
│   └── DocumentList.tsx    # Lista de documentos para download
├── lib/
│   └── fonts.ts            # Configuração de fontes Google
├── public/
│   └── documents/          # Diretório para PDFs
├── .prettierrc             # Configuração Prettier
├── vercel.json             # Configuração Vercel
└── package.json            # Dependências do projeto
```

## Lint e Formatação

```bash
# Executar ESLint
npm run lint

# Formatar código com Prettier (se instalado)
npx prettier --write .
```

## Conformidade com Guardrails

Este projeto segue estritamente os Guardrails estabelecidos:

- ✅ Apenas cores da paleta Suno (red, gray) e neutros
- ✅ Apenas tipografias Montserrat e Inter
- ✅ Sem gradientes ou sombras pesadas
- ✅ Design minimalista e acessível
- ✅ TypeScript estrito
- ✅ Sem documentos adicionais além deste README

## Informações da Empresa

**Razão Social**: Suno Energias Limpas Projetos Maduros S.A  
**CNPJ**: 53.192.626/0001-03

## Licença

Projeto de uso interno da Suno Energias Limpas Projetos Maduros.
