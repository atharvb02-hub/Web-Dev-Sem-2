let evenObject={
    title:"",
    date:"",
    category:"",
    description:""
}


function submitHandler(event){
    event.preventDefault()//to stop reloading the page
    evenObject.title=event.target.title.value
    evenObject.date=event.target.date.value
    evenObject.category=event.target.category.value
    evenObject.description=event.target.description.value



    let eachcard=document.createElement("div");
    eachcard.classList.add("eachcard")
 
    eachcard.innerHTML=`
                    <p>${evenObject.title}</p>  
                    <p>${evenObject.date}</p>
                    <p>${evenObject.category}</p>
                    <p>${evenObject.description}</p>
                    <span id="crossbtn" >&#10005;</span>`

    eachcard.querySelector("#crossbtn").addEventListener("click",()=>{
        eachcard.remove()
    })

    list.append(eachcard)
    console.log(eachcard);
    
}

