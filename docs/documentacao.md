# Documentação da Plataforma de Cursos

## Estrutura de Arquivos

A plataforma está organizada da seguinte forma:

```
learning-platform/
├── app/
│   ├── globals.css     # Estilos globais
│   ├── layout.tsx      # Layout principal
│   └── dashboard/      # Página do dashboard
├── public/             # Arquivos estáticos
│   └── background.jpg  # Imagem de fundo
└── docs/              # Documentação
```

## Estilos e Design

### Cores Principais
- Fundo: Escuro (#000000)
- Primário: Vermelho Netflix (#FF0000)
- Secundário: Vermelho mais escuro (#CC0000)
- Texto: Branco (#FFFFFF)

### Componentes Principais

1. **Cards**
   - Efeito de hover com escala
   - Sombra suave
   - Borda arredondada
   - Transições suaves

2. **Botões**
   - Gradientes em hover
   - Bordas arredondadas
   - Transições de cor

3. **Seção Hero**
   - Overlay com gradiente
   - Texto com efeito de gradiente
   - Botão de ação principal

## Resolução de Problemas de Dependências

Para resolver o erro de dependências, execute o comando:

```bash
npm install --legacy-peer-deps
```

Isso permitirá que o npm ignore temporariamente as incompatibilidades entre as versões das bibliotecas.

## Melhorias Visuais Implementadas

1. **Design Netflix-like**
   - Interface escura com acentos vermelhos
   - Cards com efeitos de hover
   - Gradientes sutis
   - Tipografia moderna

2. **Layout Responsivo**
   - Grid adaptativo
   - Espaçamento consistente
   - Componentes responsivos

3. **Animações e Transições**
   - Hover effects suaves
   - Transições de cores
   - Animações de carregamento

## Próximos Passos

1. Adicionar a imagem de fundo para a seção hero
2. Implementar os ícones necessários
3. Testar responsividade em diferentes dispositivos
4. Otimizar o desempenho das animações
