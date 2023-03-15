/*global $*/
 $(document).ready(function(){
    const timeElement = document.getElementById('time');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');
    
    let pasttime = 0;
    let intervalId = null;
    
    function showTime() {
      const ms = Math.floor((pasttime % 1000) / 100);
      const s = Math.floor(pasttime / 1000) % 60;
      const m = Math.floor(pasttime / (1000 * 60)) % 60;
      const h = Math.floor(pasttime / (1000 * 60 * 60));
      timeElement.innerHTML = `${h}:${m}:${s}:${ms}`;
    }
    
    start.addEventListener('click',function() {
      $("#start").css("pointer-events","none");
      $("#start").css("opacity",".6");
      $("#stop").css("pointer-events","auto");
      $("#stop").css("opacity","1");
      $("#reset").css("pointer-events","auto");
      $("#reset").css("opacity","1");
      if (intervalId !== null) { return; }
      let pre = new Date();
      intervalId = setInterval(function () {
        const now = new Date();
        pasttime += now - pre;
        pre =now;
        showTime();
      },100);
    });
    
    stop.addEventListener('click',function() {
      $("#start").css("pointer-events","auto");
      $("#start").css("opacity","1");
      $("#stop").css("pointer-events","none");
      $("#stop").css("opacity",".6");
      clearInterval(intervalId);
      intervalId = null;
    });
    
    reset.addEventListener('click',function() {
      $("#start").css("pointer-events","auto");
      $("#start").css("opacity","1");
      $("#stop").css("pointer-events","none");
      $("#stop").css("opacity",".6");
      $("#reset").css("pointer-events","none");
      $("#reset").css("opacity",".6");
      clearInterval(intervalId);
      pasttime = 0;
      showTime();
      intervalId = null;
    });
 });