//your JS code here. If required.
const boxes=document.querySelectorAll(".box");
        boxes.forEach((box)=>{
            box.addEventListener("mouseover",(event)=>{
                console.log(event.target.id);
                ChangeColor(event.target.id);
            })
            box.addEventListener("mouseout",(event)=>{
                boxes.forEach((box)=>{
                    box.style.backgroundColor="grey";
                })
            })
                
        })

        function ChangeColor(hoveredBoxId){
            boxes.forEach((box)=>{
                if(box.id!=hoveredBoxId){
                    box.style.backgroundColor="brown";
                }
            })
        }