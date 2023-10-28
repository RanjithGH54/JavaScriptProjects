let contain=document.getElementsByClassName('content');
        for(i=0;i<contain.length;i++){
            contain[i].addEventListener('click',function(){
                this.classList.toggle("active")
            })
        }