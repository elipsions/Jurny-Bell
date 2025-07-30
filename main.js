
// duplicate marquee span for continuous scroll
document.querySelectorAll('.marquee span').forEach((el)=>{
  el.innerHTML = el.innerHTML + ' · ' + el.innerHTML + ' · ' + el.innerHTML;
});
// sticky bar action
document.querySelectorAll('[data-preorder]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.getElementById('preorder').scrollIntoView({behavior:'smooth'});
  });
});
