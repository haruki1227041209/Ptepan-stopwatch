/*global $*/
 $(document).ready(function(){
    const timeElement = document.getElementById('time');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');
    
    let pasttime = 0;
    let intervalId = null;
    
    function showTime() {
      const msa = pasttime % 1000;
      const ms = Math.floor(msa / 100);
      const s1a = pasttime % 10000;
      const s1 = Math.floor(s1a / 1000);
      const s2a = pasttime % 100000;
      const s2 = Math.floor(s2a / 10000);
      const s3a = pasttime % 1000000;
      const s3 = Math.floor(s3a / 100000);
      timeElement.innerHTML = `${s3}:${s2}:${s1}:${ms}`;
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