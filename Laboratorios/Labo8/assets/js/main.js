var rows=[];

var parseLateSwitch=(value)=>{
    if(value){
        return "tarde :(";
    }
    else{
        return "a tiempo :)"
    }
}

function addRow(carnet,schedule,late,tBody){
    var newRow=document.createElement("tr");
    var date= new Date();
    rows.push({
        id:counterId,
        carnet: carnet,
        schedule:schedule,
        late:late
    })

    console.log(rows);

    newRow.innerHTML=`
    <td><b>${carnet}</b></td>
    <td>${schedule}</td>
    <td>${date.toLocalDateString}</td>
    <td>${late}</td>
    

    `
var counterId=0;
    var cellContainer = document.createElement("td");
    var deleteButton = document.createElement("button");
    var confirm= document.createElement("input");
    var cellContainer1=document.createElement("td");

    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-danger");
    deleteButton.innerText="eliminar";
    deleteButton.value=counterId;
    deleteButton.addEventListener("click",function(event){
        var idElement=event.srcElement.value;
        var trToDelete=document.querySelector(`button[value="${idElement}"]`).parentElement.parentElement;
        if(confirm.value===carnet.text){
            tBody.removeChild(trToDelete)
            rows.forEach((item,index)=>{
            if(item.id==idElement){
                rows.splice(index,1);
            }
        })
        }else{
            alert("no es posible borrar ya que el carnet no es valido")
        }
        
        
        

    })
  
    
    cellContainer.appendChild(deleteButton);
    cellContainer1.appendChild(confirm);
    newRow.appendChild(cellContainer);
    newRow.appendChild(cellContainer1);
    tBody.appendChild(newRow);
    counterId++;
    
    
}


window.onload = function() {
    var submit_btn = document.querySelector("#submit_btn");
    var carnet_field= document.querySelector("#carnet_field");
    var schedule_field=document.querySelector("#schedule_field");
    var late_switch=document.querySelector("#late_switch");
    var carnetRegex= new RegExp('[0-9]{8}');
    var tBody=document.querySelector("#table_body");
    submit_btn.addEventListener("click",()=>{
        var carnet= carnet_field.value;
        var schedule=schedule_field.options[schedule_field.selectedIndex].text;
        var late=parseLateSwitch(late_switch.checked);
        if(carnetRegex.test(carnet)){
            addRow(carnet,schedule,late,tBody)
        }
        else{
            alert("formato no valido");
        }
        
      
    });
    
    carnet_field.addEventListener("keyup",()=>{
        //console.log(event.keyCode)
        var carnet=carnet_field.value;
        if(carnetRegex.test(carnet)){
            submit_btn.disabled=false;
        }
        else{
            submit_btn.disabled=true;
        }
        carnetRegex.test()
    })

  };