const initi=document.querySelector('.clock').innerText;
    let number=document.querySelector('.clock');
    
    let s=0;m=0;h=0;ls=0;lm=0;lh=0;
    function myf(){
        if(s<10){
            ls="0"+s.toString();
        }
        else{ls=s;}
        if(m<10){
            lm='0'+m.toString()
        }
        else{lm=m;}
        if(h<10){lh='0'+h.toString()}
        else{lh=h;}
        if(s/60==1){
            s=0
            m=m+1
            if(m/60==1){
                m=0
                h=h+1
            }
        }
        s=s+1
        number.innerText=lh+":"+lm+":"+ls;
    }
    let ts="stopped"
    
    let ppb=document.querySelector('.pp');
    ppb.addEventListener('click',function(){
        if (ts==='stopped'){
            ti=window.setInterval(myf,100);
            ts='start'
            ppb.innerText="Playing"
        }
        else{
            window.clearInterval(ti);
            ppb.innerText="Paused"
            ts='stopped';
        }
    })
    let alb=document.querySelector('.al');
    alb.addEventListener('click',function(){
        window.clearInterval(ti)
        ppb.innerText="Play"
        s=0
        m=0
        h=0
        number.innerText="00:00:00";
        
    })