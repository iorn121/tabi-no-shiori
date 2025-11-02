<script lang="ts">
  import shiori from './katori.json';
  import './katori.css';
</script>

<section>
  <h2>{shiori.title}</h2>
  <p>{shiori.lead}</p>
  <ul class="luggage_tag">
    {#each shiori.meta as chip}
      <li><span>{chip}</span></li>
    {/each}
  </ul>
  <h3>旅のハイライト</h3>
  <p>{shiori.highlight}</p>
</section>
<section>
  <h3>タイムテーブル</h3>
  <ol class="schedule-list">
    {#each shiori.schedule as item}
      <li class="schedule-item">
        <div class="schedule-time">
          {item.time}
        </div>
        <div>
          <div class="schedule-title">{item.title}</div>
          <div class="schedule-desc">{item.desc}</div>
        </div>
      </li>
    {/each}
  </ol>
  <div class="cards-row">
    {#each shiori.cards as card}
      <div class="card card--flex card--md">
        <div class="card-title">{card.title}</div>
        <div class="card-desc">{card.desc}</div>
      </div>
    {/each}
  </div>
  <h3>観光スポット</h3>
  <div class="block-list">
    {#each shiori.sights as sight}
      <div class="block-item">
        <strong class="block-title">{sight.title}</strong>
        <div class="block-desc block-desc--mt">{sight.desc}</div>
      </div>
    {/each}
  </div>

  <h3>グルメ</h3>
  <ul class="food-list">
    {#each shiori.foods as food}
      <li class="food-item"><b>{food.title}</b> <br /> <span class="food-desc">{food.desc}</span></li>
    {/each}
  </ul>
    <div class="access-box">
    <b>アクセス</b><br />{shiori.access}
  </div>
  <div class="option-box">
    {shiori.option}
  </div>

  <footer class="note">{shiori.note}</footer>
</section>
