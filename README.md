# 💚 Rafael Ricardo Mayer

### Inteligência Artificial · Tecnologia Assistiva · Acessibilidade · Pesquisa

**Tecnologia com propósito humano.**

[🌐 Visitar portfólio](https://rafaelrmayer.github.io/) · [💻 GitHub](https://github.com/rafaelrmayer) · [🔗 LinkedIn](https://www.linkedin.com/in/rafael-ricardo-mayer-478647a4/)

---

## Sobre este portfólio

Este repositório reúne meu portfólio pessoal: projetos de software, experimentos com inteligência artificial, iniciativas de tecnologia assistiva e publicações.

Sou **Rafael Ricardo Mayer**, desenvolvedor de software, pesquisador independente e autor. Meu trabalho explora maneiras de aproximar tecnologia, acessibilidade, educação e necessidades reais das pessoas.

> Não quero apenas deixar um legado de tecnologia para minhas filhas. Quero ajudar a construir o mundo em que elas vão viver, e contribuir para que esse mundo também seja melhor para outras pessoas.

## Projetos em destaque

| Projeto | Descrição | Repositório |
|---|---|---|
| 🌸 **Jornada de Bia** | Aplicativo de comunicação assistiva com cartões visuais, síntese de voz, personalização e pesquisa experimental em aprendizado de máquina. | [Código — Sakura V9.1](https://github.com/rafaelrmayer/jornada-de-Bia_Sakura_V_9.1) · [Aplicativo](https://rafaelrmayer.github.io/jornada-de-Bia_Sakura_V_9.1/) |
| 🌿 **Sensory Load API** | API experimental de estimativa de fatores de carga sensorial em ambientes, com dados demonstrativos. | [Código](https://github.com/rafaelrmayer/sensory-load-api) |
| 🌻 **Rede Girassol API** | Projeto de organização e consulta de informações sobre serviços de saúde. | [Código](https://github.com/rafaelrmayer/Rede_Girassol_API_V_1) |
| 🖋️ **INK Bia Cerisier** | Plataforma em desenvolvimento para gestão de estúdios de tatuagem. | [Código](https://github.com/rafaelrmayer/ink-bia-cerisier) |
| 💙 **Prospecta** | Protótipo de prospecção e qualificação de oportunidades comerciais. | [Código](https://github.com/rafaelrmayer/Prospecta_V1) |
| 🔭 **Explorador do Universo** | Projeto educacional de exploração de conceitos de astronomia e ciência. | [Código](https://github.com/rafaelrmayer/explorador-do-universo-v1) |

Os projetos encontram-se em diferentes estágios de desenvolvimento. Componentes experimentais não implicam validação clínica ou científica.

## Pesquisa e publicações

📖 **Redes Neurais Artificiais e Comunicação Personalizada** — proposta de arquitetura adaptativa para inclusão de pessoas autistas com necessidades complexas de comunicação.

[Conhecer o livro na Amazon](https://www.amazon.com.br/dp/B0HMPHYPT6)

### Áreas de interesse

- Inteligência artificial e aprendizado de máquina
- Comunicação Aumentativa e Alternativa (CAA)
- Tecnologia assistiva e acessibilidade digital
- Neurodiversidade e educação inclusiva
- Desenvolvimento web, APIs e arquitetura de software

## Contato

- [Portfólio](https://rafaelrmayer.github.io/)
- [GitHub](https://github.com/rafaelrmayer)
- [LinkedIn](https://www.linkedin.com/in/rafael-ricardo-mayer-478647a4/)
- [Instagram](https://www.instagram.com/rafael_rmayer/)

---

**Desenvolvido por Rafael Ricardo Mayer**

*Sempre rumo à utopia e ao horizonte. ♾️*

## Demonstração interativa da Neural API

A seção #neural-api apresenta o projeto e executa no navegador o modelo sintético
9→16→ReLU→5 usado na demonstração de cartões da Jornada de Bia. Não consulta um
backend, grava escolhas ou treina com visitantes. O formulário permite variar
período e última atividade; escolher um cartão prepara o contexto do próximo
cálculo. Duas opções fixas limpam esse contexto e Reiniciar restaura a tela.

Pesos em js/card-model-data.js, motor em js/card-model.js e interface em
js/neural-demo.js. Os pesos foram exportados do checkpoint gerado pelo script
reproduzível de neural-api (semente 42). O exportador está no repositório
jornada-de-Bia_Sakura_V_9.1, scripts/export-card-model.py.

Verificação: node --test tests/*.test.cjs compara as pontuações com referências
PyTorch nos 18 contextos (tolerância 1e-5) e exige a mesma ordenação.
A demonstração não implica hospedagem pública da API nem preferências reais.
