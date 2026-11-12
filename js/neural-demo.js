/* Demonstração pública e local; não registra escolhas nem consulta uma API. */
(() => {
  'use strict';
  const el = id => document.getElementById(id);
  const phrases = window.BiaCardModel.phrases;
  const icons = ['🍽️', '🎮', '🛋️', '🎨', '📖'];
  let order = [0,1,2,3,4];
  function render(ranked) {
    const list = el('demoCards');
    list.replaceChildren();
    order.forEach((id,index) => {
      const item = document.createElement('li');
      const button = document.createElement('button');
      button.type = 'button';
      const icon = document.createElement('span');
      icon.className = 'demo-card-icon'; icon.textContent = icons[id]; icon.setAttribute('aria-hidden','true');
      const text = document.createElement('span'); text.textContent = phrases[id];
      const rank = document.createElement('span'); rank.className = 'demo-rank';
      rank.textContent = ranked ? String(index+1).padStart(2,'0') : '—';
      rank.setAttribute('aria-hidden','true');
      button.append(icon,text,rank); button.dataset.cardId = String(id);
      button.addEventListener('click', () => {
        el('demoLast').value = String(id);
        el('demoStatus').textContent = 'Você selecionou “' + phrases[id] + '”. Clique em ordenar para usar essa atividade como contexto.';
      });
      item.appendChild(button); list.appendChild(item);
    });
  }
  el('demoForm').addEventListener('submit', event => {
    event.preventDefault();
    try {
      const last = el('demoLast').value;
      order = window.BiaCardInference.order(window.BiaCardModel, Number(el('demoPeriod').value), last === '' ? null : Number(last));
      render(true);
      el('demoStatus').textContent = 'Sugestões calculadas neste navegador. Primeiro cartão: ' + phrases[order[0]] + ' Todas as opções continuam disponíveis.';
    } catch {
      el('demoStatus').textContent = 'Não foi possível calcular. Você pode continuar escolhendo os cartões.';
    }
  });
  el('demoReset').addEventListener('click', () => {
    el('demoForm').reset(); order = [0,1,2,3,4]; render(false);
    el('demoStatus').textContent = 'Demonstração reiniciada. Escolha o contexto e clique em ordenar.';
  });
  document.querySelectorAll('[data-demo-fixed]').forEach(button => button.addEventListener('click', () => {
    el('demoLast').value = '';
    el('demoStatus').textContent = 'Você selecionou “' + button.textContent + '”. O contexto de última atividade foi limpo.';
  }));
  render(false);
})();
