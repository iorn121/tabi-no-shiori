<script lang="ts">
  import shiori from './katori.json';
  import './katori.css';
</script>

<section style="margin-bottom:18px">
  <h2>{shiori.title}</h2>
  <p>{shiori.lead}</p>
  <div style="display:flex;gap:10px;margin-bottom:10px">
    {#each shiori.meta as chip}
      <span style="background:#eee;padding:7px 12px;border-radius:99px;font-size:13px">{chip}</span>
    {/each}
  </div>
  <h3>旅のハイライト</h3>
  <p>{shiori.highlight}</p>
</section>
<section>
  <h3>タイムテーブル</h3>
  <ol style="padding-left:0">
    {#each shiori.schedule as item}
      <li style="list-style:none;margin-bottom:10px;display:flex;gap:10px;align-items:flex-start">
        <div
          style="width:50px;font-weight:bold;background:#faf0e8;border-radius:8px;padding:4px 0;text-align:center"
        >
          {item.time}
        </div>
        <div>
          <div style="font-weight:bold">{item.title}</div>
          <div style="font-size:13px;color:#444">{item.desc}</div>
        </div>
      </li>
    {/each}
  </ol>
  <div style="display:flex;gap:18px;margin:16px 0 8px 0">
    {#each shiori.cards as card}
      <div
        style="flex:1 1 0;background:#f7f7f7;border-radius:10px;padding:12px 10px;box-shadow:0 4px 12px #0001"
      >
        <div style="font-size:15px;font-weight:700">{card.title}</div>
        <div style="font-size:13px">{card.desc}</div>
      </div>
    {/each}
  </div>
  <h3>スポット詳細</h3>
  <div style="margin-bottom:8px">
    {#each shiori.spots as spot}
      <div style="background:#fff4db;padding:10px 12px;border-radius:8px;margin-bottom:7px">
        <strong>{spot.title}</strong>
        <div style="font-size:13px;margin-top:2px">{spot.desc}</div>
      </div>
    {/each}
  </div>
  <div style="background:#f3f8f4;border-radius:8px;margin-bottom:10px;padding:9px 14px">
    <b>アクセス</b><br />{shiori.access}
  </div>
  <h4 style="margin:8px 0 4px 0">グルメ</h4>
  <ul style="padding-left:0;list-style:none;margin:0">
    {#each shiori.foods as food}
      <li style="display:flex;align-items:center;gap:10px;margin-bottom:3px">
        <span
          style="width:32px;height:32px;border-radius:8px;background:#eee;display:flex;align-items:center;justify-content:center;font-weight:700"
          >{food.icon}</span
        >
        <span><b>{food.title}</b> <span style="color:#666;font-size:13px;">{food.desc}</span></span>
      </li>
    {/each}
  </ul>
  <div style="font-size:13px;background:#fafaff;border-radius:8px;padding:8px 12px;margin:8px 0">
    {shiori.option}
  </div>
  <footer style="font-size:12px;text-align:right;color:#777;margin:8px 0">{shiori.note}</footer>
</section>
