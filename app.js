

body{
    background-color: burlywood;
    margin:20px;
    padding:0;   
    color: rgb(39, 23, 2);
    font-family: 'Alkatra', cursive;
    text-align: center;
   
}

/* ---------------------- Score Grid ---------------------- */

.score
{
    display:grid;
    grid-template-columns: auto auto;
    background-color: rgb(236, 206, 166);;
    font-size: 30px;
    font-weight: bold;
}

/* ---------------------- Selection Buttons ---------------------- */

.imgBtn
{
    width:200px;
    height:200px;
    border:10px solid  rgb(39, 23, 2);
    border-radius: 50%;
    margin-left:40px;
    cursor: pointer;
    background-color: white;
    margin-top:50px;
}

/* ---------------------- Selection Image ---------------------- */

img
{
    width:100px;
    height:100px;
}

/* ---------------------- Button Hover Shadow ---------------------- */

button:hover{
    box-shadow: 2px 2px 2px 2px rgb(37, 36, 36);
}

/* ---------------------- Heading Position ---------------------- */

.heading h1
{
   margin-top:40px
}

/* ---------------------- Restart Button ---------------------- */

#restart
{
    width:200px;
    height:70px;
    font-size: 25px;
    color:white;
    border-radius: 20px;
    margin-top:80px;
    background-color: rgb(39, 23, 2);
    border:1px solid  rgb(39, 23, 2);
    font-family: 'Alkatra', cursive;
    text-align: center;
    cursor: pointer;
}

/* ---------------------- Modal Design ---------------------- */

.modal-container
{
  position:relative;
  display: none;
}

.modal
{
    background-color: white;
    width:350px;
    height:380px;
    border-radius:20px;
    color:rgb(39, 23, 2);
    font-family: 'Alkatra', cursive;
    font-size: 20px;
    display: grid;
    grid-template-rows: auto auto auto;
    padding-top:10px;
    margin-left:580px;
    margin-top:-400px;
    position: absolute;
    font-weight: bold;
    border:10px solid rgb(39, 23, 2);
}
/* ---------------------- Info Display ---------------------- */

#info
{
    color:red;
}

/* ---------------------- Result Display ---------------------- */

#result
{
    color:rgb(121, 90, 10);
    font-weight: bolder;
    font-size: 30px;
}
/* ---------------------- Exit Button ---------------------- */
.newGame
{
    width:70px;
    height:40px;
    background-color:rgb(39, 23, 2);
    color:white;
    font-size: 20px;
    font-family: 'Alkatra', cursive;
    border-radius: 10px;
    border:1px solid rgb(39, 23, 2);
    cursor: pointer;
}

/* ---------------------- Play Again Button ---------------------- */

.playAgain
{
    width:150px;
    height:40px;
    background-color:rgb(39, 23, 2);
    color:white;
    font-size: 20px;
    font-family: 'Alkatra', cursive;
    border-radius: 10px;
    border:1px solid rgb(39, 23, 2);
    cursor: pointer;
}

/* ---------------------- Button Hover Shadow ---------------------- */

.newGame:hover{
    box-shadow: 2px 2px 2px 2px rgb(37, 36, 36);
}

.playAgain:hover{
    box-shadow: 2px 2px 2px 2px rgb(37, 36, 36);
}










