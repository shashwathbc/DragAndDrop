const list_items = document.querySelectorAll(".list-item");
const lists = document.querySelectorAll(".list");

let draggedItem = null;

for(let i=0; i< list_items.length;i++){
    const item = list_items[i];

    //while we are dragging:
    item.addEventListener("dragstart" , function(){
        console.log('dragStart')
        draggedItem = item;
        setTimeout(function (){
            item.style.display = "none";
        },0)
        
    })

    //while we drop it
    item.addEventListener("dragend" , function(){
        console.log("dragEnd");
        setTimeout(function(){
            draggedItem.style.display = "block";
             draggedItem=null;
        },0)
    })


    for(let j=0;j<lists.length;j++){
        const list = lists[j];


        //while we drop it it should store it:
        list.addEventListener("dragover" , function(e){
            e.preventDefault();
        });
        list.addEventListener("dragenter" , function(e){
            e.preventDefault();
            this.style.backgroundColor = 'rgba(0,0,0,0.2)'
        })
        list.addEventListener("dragleave" , function(e){
            this.style.backgroundColor = 'rgba(0,0,0,0.1)'
        })
        list.addEventListener("drop" , function(e){
            console.log("drop");
            this.append(draggedItem);
            this.style.backgroundColor = 'rgba(0,0,0,0.1)'
        })
    }
}