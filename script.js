//your JS code here. If required.
const boxes=document.querySelectorAll(".square");
        boxes.forEach((square)=>{
            box.addEventListener("mouseover",(event)=>{
                console.log(event.target.id);
                ChangeColor(event.target.id);
            })
            box.addEventListener("mouseout",(event)=>{
                boxes.forEach((square)=>{
                    box.style.backgroundColor="grey";
                })
            })
                
        })

        function ChangeColor(hoveredBoxId){
            boxes.forEach((square)=>{
                if(box.id!=hoveredBoxId){
                    box.style.backgroundColor="brown";
                }
            })
        }