let canvas = document.getElementById("canvas");
let g = canvas.getContext("2d");
let uiWindow = createRect(700,200,300,300);


const gamestate_start=0;
const gamestate_ingame=1;
const gamestate_gameover=2;

const ingamestate_start=0;
const ingamestate_roll=1;
const ingamestate_end=0;

let gameState = gamestate_start;
let ingameState = ingamestate_start;
let boardPositionSize= 65;      //// verander dit om de grootte van de board te veranderen
let pawnPositions = [];
let boardPositions=[];
let playerAmountButtons = [];




function drawGameStart()
{
    for(let i =0 ; i<playerAmountButtons.length;i++)
    {
        let pos = playerAmountButtons[i];

        g.fillStyle = "#004400"
        g.fillRect(pos.x,pos.y,pos.w,pos.h);
        g.fillStyle = "#FFFFFF"
        g.fillText((i+1)+"",pos.x,pos.y+20)
    }


}







function drawIngame()
{
    for(let i =0 ; i<boardPositions.length;i++)
    {
        let pos = boardPositions[i];

        g.fillStyle = "#004400"
        g.fillRect(pos.x,pos.y,pos.w,pos.h);
        g.fillStyle = "#FFFFFF"
        g.fillText((i+1)+"",pos.x,pos.y+20);
    }
}






function drawGameOver(){

}





function createRect(x,y,w,h)
{
    let rectangle = {
        x:x,
        y:y,
        x2:x+w,
        y2:y+h,
        w:w,
        h:h
    };
    return rectangle;
}


function clearCanvas()
{
    g.fillstyle = "lightslategray"
    g.fillRect(0,0, canvas.width, canvas.height);
}



function draw()
{
    clearCanvas(); 
    if (gameState==gamestate_start)
    {
        drawGameStart();
    }
    else if (gameState==gamestate_ingame)
    {
        drawIngame();
    }
}



function createBoardPositions()
{
    let x= 0;
    let y = canvas.height-boardPositionSize;
    let path = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1] ;

  for(let i =0 ; i<path.length;i++)
  {

      if(path[i] == 1)//gaan naar rechts
      {
          //bedenk hier wat je met de x moet doen
          x+=boardPositionSize+1    /// +1 geeft die kleine ruimte tussen de nummerd blokken
      }
      else if(path[i] == 3)//gaan naar links
      {
          // bedenk hier wat je met de x moet doen
          x-=boardPositionSize+1
      }
      else if(path[i] == 0)//gaan hier naar boven
      {
          //bedenk hier wat je met de y moet doen
          y-=boardPositionSize+1
      }
      boardPositions.push(createRect(x,y,boardPositionSize,boardPositionSize));
  }
} 

function initGame()
{
    createBoardPositions();
    draw();

    for(let i =0 ; i<4;i++)
    {
        let button = createRect(uiWindow.x+5 +i*50,uiWindow.y+50,50,50);
        button.playerAmount=i+1;
        playerAmountButtons.push(button)
        
    }

}

initGame()
draw()
