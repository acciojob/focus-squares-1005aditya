//your JS code here. If required.
const boxes=document.querySelectorAll(".square");
        boxes.forEach((square)=>{
            square.addEventListener("mouseover",(event)=>{
                console.log(event.target.id);
                ChangeColor(event.target.id);
            })
            box.addEventListener("mouseout",(event)=>{
                boxes.forEach((square)=>{
                    square.style.backgroundColor="grey";
                })
            })
                
        })

        function ChangeColor(hoveredBoxId){
            boxes.forEach((square)=>{
                if(square.id!=hoveredBoxId){
                    square.style.backgroundColor="#6F4E37";
                }
            })
        }