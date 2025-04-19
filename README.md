# Instituto Luz e Vida

Este é o repositório do site do Instituto Luz e Vida, uma organização filantrópica localizada em Belford Roxo/RJ.

---


## Tecnologias Utilizadas

-   **React**: Biblioteca JavaScript para construção de interfaces de usuário.
-   **HTML**: Estrutura do conteúdo do site.
-   **TailwindCSS**: Framework CSS para estilização do site.
-   **Swiper**: Biblioteca JavaScript para criar carrosséis.
---


## Como Executar o Projeto

1.  **Instale as dependências**:
    ```bash
    npm install
    ```

2.  **Monte o projeto**:
    ```bash
    node build
    ```

3. **Inicie o servidor em desenvolvimento**:
    ```bash
    npm run dev
    ```

4.  **Acesse o site**:
    Abra seu navegador e acesse `http://localhost:5173/Luz-e-Vida`.
---


## Como Fazer Deploy com GitHub Pages

Este projeto pode ser facilmente publicado usando o GitHub Pages com a ajuda do pacote `gh-pages`.

1.  **Instale o `gh-pages` como dependência de desenvolvimento**:
    ```bash
    npm install gh-pages --save-dev
    ```

2.  **Configure o `package.json`**:
    Adicione as seguintes propriedades ao seu `package.json`:

    *   `homepage`: Define a URL onde o site será hospedado. Substitua `seu-usuario` e `Luz-e-Vida` pelos seus dados corretos.
        ```json
        "homepage": "https://seu-usuario.github.io/Luz-e-Vida",
        ```
    *   `scripts`: Adicione os scripts `predeploy` e `deploy`.
        ```json
        "scripts": {
          // ... outros scripts existentes ...
          "predeploy": "npm run build",
          "deploy": "gh-pages -d dist"
        },
        ```
        *Nota: O script `predeploy` garante que o projeto seja compilado (`npm run build`) antes de cada deploy. O script `deploy` usa o `gh-pages` para enviar o conteúdo da pasta `dist` (ou a pasta de build do seu projeto, ajuste se for diferente) para a branch `gh-pages` do seu repositório.*

3.  **Configure o caminho base no Vite (se aplicável)**:
    Se você estiver usando Vite (o que é provável com `localhost:5173`), você precisa configurar o caminho base no seu arquivo `vite.config.js` (ou `vite.config.ts`) para que os assets sejam carregados corretamente no GitHub Pages:

    ```javascript
    // vite.config.js
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react()],
      base: '/Luz-e-Vida/', // Adicione esta linha!
    })
    ```
    *Certifique-se de que o valor de `base` corresponda ao nome do seu repositório (a parte após `github.io/`).*

4.  **Faça o deploy**:
    Execute o seguinte comando no seu terminal:
    ```bash
    npm run deploy
    ```
    *Isso executará primeiro o `predeploy` (build) e depois o `deploy`, enviando os arquivos para o GitHub Pages.*

5.  **Configure o GitHub Pages no Repositório**:
    *   Vá para as configurações (Settings) do seu repositório no GitHub.
    *   Navegue até a seção "Pages" na barra lateral esquerda.
    *   Em "Source", selecione a branch `gh-pages` e a pasta `/ (root)`.
    *   Salve as configurações.

    Pode levar alguns minutos para o site ficar disponível na URL definida no `homepage`.
---


## Contribuições

Contribuições são bem-vindas! Se você deseja contribuir com o projeto, siga os seguintes passos:

1.  Faça um fork do repositório.
2.  Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`).
3.  Faça commit das suas mudanças (`git commit -am 'Adiciona nova feature'`).
4.  Faça push para a branch (`git push origin feature/NovaFeature`).
5.  Crie um novo Pull Request.
---


## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
