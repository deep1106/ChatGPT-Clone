// Example POST method implementation:
async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",headers: {
        "Content-Type": "application/json",
        }, body: JSON.stringify(data), 
    });
    return response.json(); 
  }
  
sendbutton.addEventListener("click",async ()=>{
    questioninput = document.getElementById("questioninput").value;
    document.getElementById("questioninput").value="";
    document.querySelector(".right2").style.display ="block"
    document.querySelector(".right1").style.display ="none"


    question1.innerHTML = questioninput;
    question2.innerHTML = questioninput;
    postData("/api",{"question": questioninput })

    //get the answer and populate it
    let result = await postData("/api",{"question":questioninput})
    solution.innerHTML = result.answer
})
    sendbutton1.addEventListener("click",async ()=>{
      questioninput1 = document.getElementById("questioninput1").value;
      document.getElementById("questioninput1").value="";
  


      question1.innerHTML = questioninput1;
      question2.innerHTML = questioninput1;
      postData("/api",{"question": questioninput1 })

      //get the answer and populate it
      let result = await postData("/api",{"question":questioninput1})
      solution.innerHTML = result.answer
    })