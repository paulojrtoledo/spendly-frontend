# Spendly Frontend — Escopo do MVP

## 1. Objetivo do MVP

O frontend do Spendly é a interface web de uma aplicação de gestão financeira pessoal.

Seu objetivo é permitir que o usuário cadastre-se, autentique-se, gerencie carteiras, registre receitas e despesas, acompanhe seu dashboard financeiro e consulte o histórico de transações de maneira segura, responsiva e integrada ao backend.

O MVP deve oferecer uma experiência funcional, coerente e demonstrável, cobrindo os principais fluxos de controle financeiro pessoal sem incluir, nesta etapa, funcionalidades avançadas como integração bancária, planejamento financeiro complexo, aplicativo mobile ou múltiplas moedas.

## 2. Stack tecnológica

- React 19.
- TypeScript.
- Vite 7.
- React Router DOM 7.
- Axios.
- Tailwind CSS 4.
- Context API.
- CSS Variables para temas claro e escuro.
- localStorage para persistência de sessão e tema.

## 3. Funcionalidades já implementadas

### Autenticação e sessão

- Login com CPF e senha.
- Cadastro de cliente.
- Armazenamento do JWT no localStorage.
- Recuperação da sessão após atualização da página.
- Consulta do usuário autenticado.
- Logout manual.
- Logout automático após resposta 401.
- Interceptor Axios para envio do token.
- Rotas públicas e protegidas.
- Redirecionamento conforme o estado da autenticação.
- Estado de carregamento durante a restauração da sessão.

### Dashboard

- Saudação personalizada.
- Saldo total.
- Total de receitas.
- Total de despesas.
- Quantidade de carteiras ativas.
- Quantidade de transações.
- Lista das transações recentes.
- Formatação monetária em real brasileiro.
- Formatação de datas em português.
- Estados de carregamento, erro e lista vazia.
- Botão de nova tentativa.
- Alternância entre tema claro e escuro.
- Logout.
- Atalhos para carteiras e transações.
- Layout responsivo.

### Carteiras

- Listagem de carteiras.
- Criação de carteira.
- Definição de nome.
- Definição de saldo inicial.
- Seleção de tipo.
- Exibição de status.
- Desativação de carteira.
- Atualização da interface após criação ou desativação.
- Estados de carregamento, erro e lista vazia.

### Transações

- Listagem de transações.
- Criação de receitas.
- Criação de despesas.
- Seleção de carteira.
- Valor obrigatório e maior que zero.
- Descrição opcional.
- Categorias compatíveis com o tipo da transação.
- Validações locais.
- Exibição de descrição, categoria, carteira, data, tipo e valor.
- Diferenciação visual entre receita e despesa.

### Tema e identidade visual

- Tema claro.
- Tema escuro.
- Persistência do tema no localStorage.
- Paleta visual centralizada.
- Cards reutilizáveis.
- Inputs temáticos.
- Botões primários, secundários, de destaque e destrutivos.
- Badges.
- Estados de erro e vazio.
- Layout responsivo.

### Qualidade técnica atual

- Build de produção aprovado.
- TypeScript compilando.
- Lint aprovado.
- Separação entre pages, components, services, types, contexts, hooks, lib e utils.
- Contexto e hook de autenticação separados para compatibilidade com Fast Refresh.

## 4. Funcionalidades obrigatórias para concluir o MVP

### Alinhamento com o backend

- Adicionar TransactionStatus.
- Suportar ACTIVE e REVERSED.
- Atualizar tipos de transação.
- Atualizar transações recentes do dashboard.
- Adicionar chamada ao endpoint de estorno.
- Tratar erros 400, 404 e 409 relacionados ao estorno.

### Status e estorno de transações

- Exibir o status da transação.
- Diferenciar visualmente transações estornadas.
- Adicionar botão de estorno.
- Impedir estorno de transações REVERSED.
- Solicitar confirmação antes do estorno.
- Exibir estado de carregamento.
- Atualizar a lista após o estorno.
- Atualizar o dashboard após o estorno.
- Exibir mensagens adequadas para saldo insuficiente, transação inexistente e estorno duplicado.

### Filtros, paginação e ordenação

- Filtrar por período.
- Filtrar por tipo.
- Filtrar por categoria.
- Filtrar por carteira.
- Adicionar paginação.
- Adicionar ordenação por data.
- Exibir estado vazio para filtros sem resultados.
- Preservar isolamento dos dados do usuário autenticado.

### Layout autenticado e navegação

- Criar layout compartilhado para dashboard, carteiras e transações.
- Adicionar navegação principal.
- Indicar rota ativa.
- Exibir usuário autenticado.
- Disponibilizar tema e logout.
- Criar navegação responsiva para dispositivos móveis.

### Padronização visual

- Finalizar visualmente a página de cadastro.
- Aplicar o mesmo padrão visual do login.
- Adicionar estado de submissão no cadastro.
- Bloquear envio duplicado.
- Padronizar inputs, botões, erros e espaçamento.
- Remover ou desabilitar o link de recuperação de senha enquanto a funcionalidade não existir.
- Padronizar a formatação monetária.

### Estados da interface

- Adicionar retry nas páginas de carteiras e transações.
- Exibir estado adequado quando não houver carteiras.
- Orientar o usuário a criar a primeira carteira.
- Exibir erro quando a busca de carteiras do formulário falhar.
- Adicionar confirmação antes da desativação de carteira.
- Exibir feedback de sucesso.
- Bloquear múltiplos envios.
- Tratar sessão expirada de forma clara.

### Testes automatizados

- Configurar Vitest.
- Configurar React Testing Library.
- Testar autenticação.
- Testar rotas públicas e protegidas.
- Testar criação de transação.
- Testar estorno.
- Testar saldo insuficiente.
- Testar estorno duplicado.
- Testar dashboard.
- Testar estados de erro e vazio.
- Testar criação e desativação de carteira.

### API e deploy

- Definir estratégia única para VITE_API_URL.
- Revisar fallback local.
- Revisar proxy /api da Vercel.
- Atualizar .env.example.
- Garantir funcionamento local e em produção.
- Validar build publicado.

### Validação final

- Fazer smoke test completo.
- Validar desktop e mobile.
- Validar temas claro e escuro.
- Atualizar README.
- Adicionar screenshots.
- Preparar roteiro de demonstração.

## 5. Fora do escopo do MVP

- Recuperação de senha.
- Alteração de senha.
- Login social.
- Autenticação multifator.
- Integração bancária.
- Open Finance.
- Processamento de pagamentos.
- Aplicativo mobile nativo.
- Múltiplas moedas.
- Metas financeiras.
- Orçamentos mensais.
- Relatórios avançados.
- Exportação em CSV ou PDF.
- Notificações.
- Sistema administrativo.
- Edição de transações.
- Transferências entre carteiras.
- Transações recorrentes.
- Agendamento de transações.
- Controle completo de fatura de cartão de crédito.

## 6. Roadmap pós-MVP

Após a conclusão do MVP, poderão ser avaliados:

- Recuperação de senha.
- Edição segura de transações.
- Transferências entre carteiras.
- Transações recorrentes.
- Planejamento mensal.
- Metas financeiras.
- Relatórios avançados.
- Exportação de dados.
- Notificações.
- Integração bancária.
- Open Finance.
- Aplicativo mobile.
- Melhorias avançadas de acessibilidade e performance.

Esses itens não devem ser iniciados antes da conclusão, validação e demonstração do escopo atual.

## 7. Critérios de conclusão do MVP

O frontend será considerado concluído como MVP quando:

- Cadastro e login estiverem funcionando.
- A sessão for restaurada corretamente.
- Rotas públicas e protegidas estiverem estáveis.
- Carteiras puderem ser criadas, listadas e desativadas.
- Receitas e despesas puderem ser registradas.
- Transações ACTIVE e REVERSED forem suportadas.
- Transações puderem ser estornadas pela interface.
- Dashboard e histórico refletirem corretamente os estornos.
- Filtros, paginação e ordenação estiverem disponíveis.
- O usuário puder navegar por todo o sistema através de um layout compartilhado.
- Login e cadastro estiverem visualmente padronizados.
- Estados de loading, erro, vazio e sucesso estiverem tratados.
- Operações destrutivas exigirem confirmação.
- Testes automatizados dos fluxos principais estiverem aprovados.
- Lint e build estiverem aprovados.
- A configuração da API estiver alinhada entre desenvolvimento e produção.
- O deploy estiver acessível e validado.
- O layout funcionar em desktop e mobile.
- Tema claro e escuro funcionarem corretamente.
- O README estiver atualizado.
- Uma pessoa conseguir compreender e testar o produto sem ajuda direta.

## 8. Sequência oficial de conclusão

1. Validar e estabilizar o estado atual.
2. Criar o documento de escopo final.
3. Alinhar os contratos com o backend.
4. Implementar status e estorno de transações.
5. Implementar filtros, paginação e ordenação.
6. Criar layout autenticado e navegação responsiva.
7. Finalizar cadastro e padronizar a interface.
8. Melhorar estados de erro, vazio, loading e confirmação.
9. Adicionar testes automatizados.
10. Alinhar configuração da API, build e deploy.
11. Fazer smoke test completo do produto.
12. Finalizar README e demonstração.

## 9. Estado atual

- Passo 1 concluído.
- Branch de trabalho: feature/frontend-mvp-alignment.
- Build de produção aprovado.
- Lint aprovado.
- Erro de Fast Refresh corrigido.
- Contexto e hook de autenticação separados.
- Passo 2 concluído.
- Próximo passo: alinhar os contratos com o backend.
