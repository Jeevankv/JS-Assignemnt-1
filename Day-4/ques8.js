let ask = (question,yes,no) => {if(confirm(question)){yes()} else{no();}}

ask("Do you agree", yes = ()=>{alert("You agreed");}, no = ()=>{alert("you canceled the execution");})
    