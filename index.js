
var task_list=[];

//creating a function to display Popup for adding Task Item
function add_popup(){    
    var addItem_popup_div=document.createElement("div");
    addItem_popup_div.classList.add("AddItem");
  
    addItem_popup_div.innerHTML=`<div class="popup">
    <h5 id="popup_heading">Add New List</h5>
    <input id="input" type="name" >
    <div class="add_button">
        <button onclick="add_item_popup_button()">ADD</button>
        <button onclick="delete_item_popup_button()">BACK</button>
    </div>    </div>`;
    $("body").append(addItem_popup_div);
    $(".AddItem").css({"display":"flex", "justify-content":"center"});
    $(".main_div").css("filter","blur(0.5em)");

}

//function for event handling at buttons
function add_item_popup_button(){
    
    var inputValue=$("#input").val(); 
    
    if(inputValue==""){
        alert("Please Enter the Task to Complete");
    }
    else{
        $("h1").remove();
        $(".AddItem").remove();
        $(".main_div").css("filter","blur(0em)");

        addTask(inputValue);
    }
    

}
function delete_item_popup_button(){
    $(".AddItem").remove();
    $(".main_div").css("filter","blur(0em)");
}

// function to assign user tasks in form of objects in the array
function addTask(inputValue){    
  var taskList_obj = {
    id: 'task' +  Math.floor(Math.random() * Math.floor(Math.random() * Date.now())), 
    heading: inputValue  
  };
  task_list.push(taskList_obj);
  add_Card(inputValue,task_list); 
}



// function to add cards 
function add_Card(inputValue,task_list){  
    var card=document.createElement("div");
     for(var i=0;i<task_list.length; i++){        
         if(inputValue==task_list[i].heading){
            card.id=task_list[i].id;
         }
     }   
    card.classList.add("card");   
    var card_name=card.id;
    console.log(card_name);

    card.innerHTML=`<h4 id="card_heading">${inputValue}</h4><hr >
                    <p id="complete_task" ></p>
                    
                    <p onclick="delete_card(${card_name})" id="delete_icon">--</p>
                    <p onclick="add_task_popup()" id="add_icon">+</p>`
    $(".card_container").append(card);   
    
}


// function to delete cards 
function delete_card(card_value){  
    for(var i=0;i<task_list.length; i++){
        if(card_value.id===task_list[i].id){           
            task_list.splice(i,1);
            console.log(task_list);
            console.log(card_value.id);
            $(card_value).remove();

        }
    }  
}



// function to popup to add items inside a card 
function add_task_popup(){  
        
    var addItem_popup_div=document.createElement("div");
    addItem_popup_div.classList.add("AddItem");
  
    addItem_popup_div.innerHTML=`<div class="popup">
    <h5 id="popup_heading">Add New List</h5>
    <input id="input" type="name" >
    <div class="add_button">
        <button onclick="add_task_popup_button()">ADD</button>
        <button onclick="delete_item_popup_button()">BACK</button>
    </div>    </div>`;
    $("body").append(addItem_popup_div);
    $(".AddItem").css({"display":"flex", "justify-content":"center"});
    $(".main_div").css("filter","blur(0.5em)");
 }


 // function for event handling at buttons to add items
function add_task_popup_button(){
    
    var inputValue=$("#input").val();     
    if(inputValue==""){
        alert("Please Enter the Task to Complete");
    }
    else{
        $(".AddItem").remove();
        $(".main_div").css("filter","blur(0em)");
        addList(inputValue);
    }
 }


// function delete_task_popup_button(){
//     $(".AddItem").remove();
//     $(".main_div").css("filter","blur(0em)");     
// }


//function to add items in the card
function addList(inputValue){
 
    var card_Item=document.createElement("div");
    card_Item.classList.add("pending_line");    

    card_Item.innerHTML=`<p id="pending"><input id="pending_box" onclick="checkList()" type="checkbox" >${inputValue}</p>`
    $(".card").append(card_Item);   
    checkList();  
    
}
//function to check wheather is completed or not
function checkList(){
    var checkBox = document.getElementById("pending_box");
    var text = document.getElementById("pending");
    if (checkBox.checked == true){
        text.style.textDecoration="line-through";
    } 

}