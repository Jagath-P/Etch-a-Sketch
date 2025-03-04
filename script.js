const container=document.querySelector(".container");
const btn=document.querySelector(".btn");
let a=16;
btn.addEventListener('click',()=>
sizeChange());


function makeGrid(value){

for(let i=0;i<value;i++){
    for(let j=0;j<value;j++){
        const the=document.createElement('div');
        the.className='cell';
        container.appendChild(the);
        let c=100/value ;
        the.style.width=c+"%";     
         
        let currentOpacity=1;

        the.addEventListener('mouseenter',()=>{
            let a='0123456789ABCDEF';
            let color='#';
            for(let i=0;i<6;i++){
                color+=a[Math.floor(Math.random()*16)];
            }
            the.style.backgroundColor=color;
            currentOpacity=currentOpacity-0.05;
            
            the.style.opacity=Math.max(0,currentOpacity);
           
        })
        the.addEventListener('mouseleave',()=>{

            let a='0123456789ABCDEF';
            let color='#';
            for(let i=0;i<6;i++){
                color+=a[Math.floor(Math.random()*16)];
            }
            the.style.backgroundColor=color;
            currentOpacity-=0.05;
            
            the.style.opacity=Math.max(0,currentOpacity);
    
        
        })
    }
}
}
makeGrid(a);
function sizeChange(){
    a=prompt("enter the number of squares on the side of grid");
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
makeGrid(a);
}



