<<<<<<< HEAD
# 🚀 Skillar - Plataforma de Aprendizado SASCE (Sistema de Aprendizagem Social, Colaborativa e Empreendedora)

Uma plataforma moderna de cursos online com design atrativo e funcionalidades completas.

## ✨ Últimas Atualizações

### 🖼️ Imagens de Fundo Personalizadas

Foram adicionadas imagens de fundo personalizadas para criar uma experiência visual mais rica:

#### 📚 Página de Cursos
- **Imagem**: `finalistas.jpeg` 
- **Localização**: `/public/finalistas.jpeg`
- **Efeito**: Fundo sutil com overlay para manter legibilidade
- **Opacidade**: 10-15% (responsiva)

#### 🤝 Página de Parceiros  
- **Imagem**: `familha.jpeg`
- **Localização**: `/public/familha.jpeg`
- **Efeito**: Fundo temático representando união e parceria
- **Opacidade**: 15-20% (responsiva)

### 🎨 Melhorias Visuais Implementadas

1. **Efeitos de Parallax**: As imagens de fundo têm efeito parallax em desktop
2. **Overlays Inteligentes**: Gradientes adaptativos para garantir legibilidade
3. **Responsividade**: Opacidade reduzida em dispositivos móveis
4. **Glassmorphism**: Cards com efeito de vidro sobre as imagens
5. **Animações Suaves**: Transições elegantes entre páginas

### 📁 Estrutura de Arquivos

```
public/
├── finalistas.jpeg     # Imagem de fundo da página de cursos
├── familha.jpeg        # Imagem de fundo da página de parceiros
└── ...

app/
├── courses/page.tsx    # Página de cursos com fundo personalizado
├── partners/page.tsx   # Página de parceiros com fundo personalizado
├── globals.css         # Estilos para imagens de fundo
└── ...
```

### 🔧 Como Adicionar as Imagens

1. Coloque as imagens na pasta `public/`:
   - `finalistas.jpeg` - Para a página de cursos
   - `familha.jpeg` - Para a página de parceiros

2. As imagens devem ter:
   - **Resolução mínima**: 1920x1080px
   - **Formato**: JPEG ou PNG
   - **Tamanho otimizado**: < 500KB para melhor performance

### 🎯 Características Técnicas

#### Otimizações de Performance
- **Background-attachment**: `fixed` para efeito parallax
- **Lazy loading**: Imagens carregadas de forma otimizada
- **Compressão**: Overlays reduzem impacto visual sem perder qualidade

#### Responsividade
- **Desktop**: Opacidade 10-20%, efeito parallax ativo
- **Tablet**: Opacidade 8-15%, parallax reduzido  
- **Mobile**: Opacidade 5-8%, sem parallax para melhor performance

#### Acessibilidade
- **Contraste**: Overlays garantem contraste mínimo WCAG AA
- **Fallbacks**: Cores sólidas caso as imagens não carreguem
- **Text-shadow**: Sombras nos textos para melhor legibilidade

### 🚀 Funcionalidades da Plataforma

#### 🏠 Landing Page
- Hero section com animações
- Estatísticas em tempo real
- Depoimentos rotativos
- Seção de tecnologias

#### 🔐 Sistema de Autenticação
- Login/Registro com validação
- Integração OAuth (Google/GitHub)
- Indicador de força de senha
- Recuperação de senha

#### 💬 Chat Interativo
- Mensagens em tempo real
- Reações e emojis
- Anexos de arquivo
- Interface responsiva

#### 📱 Navegação Responsiva
- Menu mobile com Sheet
- Estatísticas do usuário
- Sistema de notificações
- Perfil completo

### 🛠️ Tecnologias Utilizadas

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS + CSS personalizado
- **Componentes**: shadcn/ui + Radix UI
- **Ícones**: Lucide React
- **Animações**: CSS Animations + Framer Motion
- **TypeScript**: Tipagem completa

### 📱 Responsividade

A plataforma é totalmente responsiva com:
- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: sm, md, lg, xl
- **Touch Friendly**: Botões e elementos otimizados para touch
- **Performance**: Carregamento otimizado em todas as telas

### 🎨 Sistema de Design

#### Paleta de Cores
- **Primary**: #8B5CF6 (Roxo vibrante)
- **Secondary**: #EC4899 (Rosa moderno)  
- **Accent**: #06B6D4 (Azul ciano)
- **Background**: Gradientes dinâmicos

#### Tipografia
- **Font**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700
- **Scales**: Responsivas com clamp()

### 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar produção
npm start
```

### 📝 Próximos Passos

1. **Backend Integration**: Conectar com API real
2. **Database**: Implementar persistência de dados
3. **Payment**: Sistema de pagamentos
4. **Analytics**: Tracking de usuários
5. **PWA**: Progressive Web App
6. **Tests**: Testes automatizados

### 🤝 Contribuição

Para contribuir com o projeto:

1. Fork o repositório
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

### 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

**Desenvolvido com ❤️ para transformar a educação online** 
# Skillar
plataforma de cursos SASCE (Sistema de Aprendizagem Social, Colaborativa e Empreendedora)
