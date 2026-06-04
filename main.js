  let cartQty = 0;

  window.addEventListener('scroll',()=>{
    document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>60);
    document.getElementById('scrollTop').classList.toggle('show',window.scrollY>300);
  });

  const obs = new IntersectionObserver((entries)=>{
    entries.forEach((e,i)=>{
      if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),i*80);obs.unobserve(e.target);}
    });
  },{threshold:0.1});
  document.querySelectorAll('.fade-up').forEach(el=>obs.observe(el));

  document.querySelectorAll('.filter-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f=btn.dataset.filter;
      document.querySelectorAll('.product-card').forEach(c=>{
        c.style.display=(f==='all'||c.dataset.cat===f)?'':'none';
      });
    });
  });

  function addCart(){
    cartQty++;
    document.getElementById('cartCount').textContent=cartQty;
    const t=document.getElementById('toast');
    t.classList.add('show');
    setTimeout(()=>t.classList.remove('show'),2500);
  }

  function toggleWish(el){el.textContent=el.textContent==='🤍'?'❤️':'🤍';}

  document.getElementById('hamburger').addEventListener('click',()=>document.getElementById('mobileNav').classList.add('open'));
  document.getElementById('mobileClose').addEventListener('click',closeMobile);
  document.getElementById('mobileNav').addEventListener('click',e=>{if(e.target===document.getElementById('mobileNav'))closeMobile();});
  function closeMobile(){document.getElementById('mobileNav').classList.remove('open');}