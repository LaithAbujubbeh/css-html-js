scoreEl = document.getElementById("score")
scoreElGuest = document.getElementById("score-g")

score = 0
scoreG = 0


function addOne(){
  score += 1
  
  scoreEl.textContent = score
  
}

function addOneG(){
    
    scoreG += 1
  scoreElGuest.textContent = scoreG
  
 
}

function addTwo(){
  score += 2
  scoreEl.textContent = score
    
}

function addTwoG(){
  scoreG += 2
  scoreElGuest.textContent = scoreG
    
}


function addThree(){
  score += 3
  scoreEl.textContent = score
    
}

function addThreeG(){
  scoreG += 3
  scoreElGuest.textContent = scoreG
    
}