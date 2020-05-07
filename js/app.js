function main()
{
    const itemVal=document.querySelector("#item");//Fetch Textbox from DOM (OBJ)
    const addButton=document.querySelector("#addButton");
    const clearAllButton=document.querySelector("#clearAllButton");
    const itemDisplay=document.querySelector("#task-list-bottom-area")
   
    addButton.addEventListener("click", function(){
        if(itemVal.value=="")//nothing in the field.
        {
            itemVal.value="";
            itemVal.focus()
        }
        else
        {
            const div=document.createElement("div"); //adding div dynamically & ass. var
                div.setAttribute("class","task-items")
                div.setAttribute("id", "remove-div")

            const h3=document.createElement("h3"); //adding h3 dynamically & ass. var
                h3.setAttribute("href","#")
                h3.innerHTML=itemVal.value;

                itemVal.value=""; //resets value in inputbox
                itemVal.focus(); //returns focus/cursor to inputbox

            const a=document.createElement("a"); //adding anchor tag dynamically & ass. var
                a.setAttribute("href","#") //adding the attributes of the anchor tag
                a.setAttribute("id","remove")//adding id name to attribute
                a.innerHTML="Remove"; //adding innerhtml for the anchor tag

                console.log(a)
            div.appendChild(h3) //nesting within the div (making it parent)
            div.appendChild(a) //nesting within the div (making it parent)
            itemDisplay.appendChild(div) //Adding dynamic div to existing Main div (Parent)
        }
    });

    clearAllButton.addEventListener("click", function(){

        //Option 1
        /*
        const itemsR=itemDisplay.children; //returns an array
            
        for(let i=0; i<itemsR.length; i++)//traversing through the array to remove each child(index)
        {
           itemsR[i].remove();

           console.log(i)
        }
        */
        //Option 2
        itemDisplay.remove();// Nanosecond slower
        location.reload(); //refreshes page

        }); 

    document.addEventListener("click", function(event){

        const elementclicked=event.target;
        const elementIDclicked=document.getElementById("remove")

        console.log(elementclicked)
        console.log(elementIDclicked)
        
        if(elementclicked.tagName=="A" && elementIDclicked.innerHTML=="Remove")
        {
            const parentElement=elementclicked.parentElement;
            parentElement.remove();  
        }
    });
        
}

main();