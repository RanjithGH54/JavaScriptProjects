let inp=document.getElementById('inp');
        let btn=document.querySelector('.btn');
        let maindiv=document.querySelector('.down');
        btn.addEventListener('click',function(){
            let div=document.createElement('div');
            div.classList.add("task")
            let li=document.createElement('li');
            li.innerText=`${inp.value}`;
            div.appendChild(li);

            let cb=document.createElement('button');
            cb.classList.add('bclass')
            cb.innerText="Check"
            div.appendChild(cb);

            let delb=document.createElement('button');
            delb.classList.add('dclass')
            delb.innerText="Del"
            div.appendChild(delb);

            if(inp.value===""){
                alert("please enter something")
            }
            else{
                maindiv.append(div)
            }
            inp.value="";
            cb.addEventListener('click',function(e){
                cb.innerText="Checked"
                console.log(e.target)
                cb.previousElementSibling.style.textDecoration="line-through";
            })
            delb.addEventListener('click',function(e){
                let tar=e.target;
                delb.parentElement.remove();
            })
        })