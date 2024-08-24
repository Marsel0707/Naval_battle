var $items_person = document.getElementsByClassName('items_person');
var $items_person2 = document.getElementsByClassName('items_person2');
var conteiner_computer = document.querySelector('.conteiner_computer')
var text_game = document.querySelector('.text_item')
var conteiner_block = document.getElementById('conteiner_block00')

var block_count = document.querySelector('.block_count')

var text_item = document.querySelector('.text_item')

var game_over_text = document.querySelector('.game_over')

var game_over = document.querySelector('.text_inform')

var button_gameoveer = document.querySelector('.button_gameoveer')

var count_shitadd = document.getElementById('count_shitadd')

var block_countshit = document.querySelector('.block_countshit')


var conteiner_person0 = document.getElementById('conteiner_person0')
var conteiner_computer0 = document.getElementById('conteiner_computer0')

var $items_person_shits = []
for (var b = 0; b < $items_person.length; b++) {
    $items_person_shits.push($items_person[b])
}
console.log($items_person_shits)

var btn = document.querySelector('.btn')





var move_download = document.querySelector('.move_download')//Анимация загрузки
var download = document.querySelector('.download')

var button_go = document.getElementById('go')

var shit_person = []; //Корабли пользователя

var shit_computer = []; //Корабли Компьютера


var person_click_shit = [] //Те блоки в которые пользователь стрелял


var add_shit = true;
var count_click = 0;

//Пользователь выбирает корабли
//Блок кораблей пользователя

for (var a = 0; a < $items_person.length; a++) {
    $items_person[a].addEventListener('click', function () {
        if (add_shit == true) {
            if (count_click < 10) {     
                
                var yes = shit_person.includes(this)/////////////////////////////////////////////////
         
                if (yes == false) {          //Добавление кораблей пользователя
                    shit_person.push(this)
                    console.log(shit_person)
                    this.style.transition = '0.5s';
                    this.style.backgroundColor = 'blue';

                    count_click++;

                    if (count_click == 10) {
                        block_countshit.style.transition = '1.0s'
                        block_countshit.style.border = '1px solid red'

                        button_go.style.transition = '1.0s'
                        button_go.style.border = '2px solid yellow'
                    }

                    count_click = String(count_click);
                    count_shitadd.innerHTML = count_click;

                    

                }
                else {
                    console.log('false')  

                }
            }
        }
        else {
            console.log(add_shit)
        }
        

    })   
}

//Кнопка далее

function getRandomInt(min, max) { //Случайное число
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

button_go.addEventListener('click', function() {
    if (count_click >= 10) { //Потом переделать
        add_shit = false;
        button_go.style.transition = '0.5s';
        button_go.style.opacity = '0';
        

        block_count.style.transition = '0.5s'
        block_count.style.opacity = '0'

        text_game.style.margin = '0 auto'

        text_game.innerHTML = 'Компьютер ставит корабли'

        //Компьютер ставит корабли

        
        console.log($items_person2[random_number])

        for (var c = 0; c < 10; c++) {
            var random_number = getRandomInt(0, $items_person2.length)
            shit_computer.push($items_person2[random_number])
        }
        console.log(shit_computer)


        //Анимация загрузки
        var width_count = 0;
        var width_move;

        move_download.style.display = 'block';
        const move = setInterval(function() {
            width_count+=2;
            if (width_count == 100) {
                clearInterval(move);
            }
            else {
                width_move = String(width_count) + '%'

                download.style.width = width_move
            }

           
        }, 1)


        setTimeout(function() {
            move_download.style.transition = '1.0s'
            move_download.style.opacity = '0';
            conteiner_computer.style.display = 'block'

            setTimeout(function() {
                text_game.innerHTML = 'Ваш ход'

                text_game.style.transition = '1.0s'
                text_game.style.color = 'rgb(140, 140, 255)'

                conteiner_computer0.style.transition = '1.0s'
                conteiner_computer0.style.border = '1px solid yellow'

                conteiner_person0.style.transition = '1.0s'
                conteiner_person0.style.border = '4px solid blue'
            }, 1500)
            text_game.innerHTML = 'В бой'
            btn.style.display = 'none'
            ///////////////////////
            const mediaQuery = window.matchMedia('(max-width: 1100px)');


            setInterval(function() {
                if (mediaQuery.matches) {
                    conteiner_block.style.transition = '0s'
                    conteiner_block.style.marginTop = '-170px'
                }
                else {
                    conteiner_block.style.transition = '0s'
                    conteiner_block.style.marginTop = '70px'
                }
            }, 1)

            
        }, 1500)
    }
    
})



//Ход пользователя

var motion = true;


var shit_inform22;
var shit_inform;
for (var r = 0; r < $items_person2.length; r++) {

    $items_person2[r].addEventListener('click', function() {

    if (motion == true) {
        var yes2 = person_click_shit.includes(this)

        if (yes2 == false) {
            var audio = new Audio('e21cd080cabcc66.mp3');
            audio.play(); //Звук выстрела

            for (var t = 0; t < shit_computer.length; t++) {
                if (this.id == shit_computer[t].id) {
                    shit_inform = true
                    console.log("Корабль сбит");

                    person_click_shit.push(this)
                    


                    this.style.backgroundImage = 'url("pngwing.com-5.png")';
                    this.style.backgroundPosition = 'center';
                    this.style.backgroundSize = 'cover';
                    this.style.transition = '0.5s'
                    this.style.backgroundColor = 'rgb(209, 171, 171)'
        
                    shit_computer.splice(t, 1)
                    console.log(shit_computer)
                    motion = false;

                    if (shit_computer.length == 0) {
                        motion = true;

                        setTimeout(function() {
                            
                            conteiner_block.style.transition = '0.5s'
                            text_game.style.opacity = '0';
                            conteiner_block.style.opacity = '0'
                            game_over_text.innerHTML = 'Поздравляем, вы выйграли!'

                            setTimeout(function() {
                                game_over.style.display = 'grid'
                                game_over.style.transition = '1.5s'
                                game_over.style.opacity = '1'

                                button_gameoveer.style.display = 'flex';
                                button_gameoveer.style.transition = '1.5s';
                                button_gameoveer.style.opacity = '1'
                            }, 500)
                            


                        }, 1000)
                        
                    }


                    break
                }
                else {
                    person_click_shit.push(this)
                    this.style.backgroundImage = 'url("pngwing.com-8.png")';
                    this.style.backgroundPosition = 'center';
                    this.style.backgroundSize = 'cover';
                    motion = false;

                }

            }
            if (motion == false) {
                setTimeout(function() {
                    text_game.innerHTML = 'Ход противника';

                    text_game.style.transition = '1.0s'
                    text_game.style.color = 'red'

                    conteiner_person0.style.transition = '1.0s'
                    conteiner_person0.style.border = '1px solid yellow'

                    conteiner_computer0.style.transition = '1.0s'
                    conteiner_computer0.style.border = '4px solid red'

                    setTimeout(function() {

                        const random = Math.floor(Math.random() * $items_person_shits.length);
                        console.log(random, $items_person_shits[random]);

                        var audio2 = new Audio('e21cd080cabcc66.mp3');
                        audio2.play(); //Звук выстрела
                        console.log($items_person_shits)
            
                        for (var e = 0; e < shit_person.length; e++) {
                            if ($items_person_shits[random].id == shit_person[e].id) {
                                console.log('Попал');
                                console.log('Попадение в корабль пользователя' ,shit_person)
                                shit_inform22 = true;
                                break

                            }
                            else {
                                shit_inform22 = false;
                            }   
                
                        }
                        if (shit_inform22 == false) {

                            console.log('Не попал');
                            $items_person_shits[random].style.backgroundImage = 'url("pngwing.com-8.png")';
                            $items_person_shits[random].style.backgroundSize = 'cover';
                            $items_person_shits[random].style.backgroundPosition = 'center';
                            $items_person_shits[random].style.transition = '0.5s';
                            $items_person_shits[random].style.backgroundColor = 'rgb(209, 171, 171)';


                            console.log($items_person_shits[random])
                            $items_person_shits.splice(random, 1)
                            console.log('удалено',  $items_person_shits)

                            setTimeout(function() {
                                text_game.innerHTML = 'Ваш ход';

                                text_game.style.transition = '1.0s'
                                text_game.style.color = 'rgb(140, 140, 255)'

                                conteiner_computer0.style.transition = '1.0s'
                                conteiner_computer0.style.border = '1px solid yellow'

                                conteiner_person0.style.transition = '1.0s'
                                conteiner_person0.style.border = '4px solid blue'
                                
                            }, 800)
                            motion = true;
                        }
                        else if (shit_inform22 == true) {
                            text_game.innerHTML = 'Ваш ход';

                            text_game.style.transition = '1.0s'
                            text_game.style.color = 'rgb(140, 140, 255)'
                            conteiner_computer0.style.transition = '1.0s'
                            conteiner_computer0.style.border = '1px solid yellow'
                            conteiner_person0.style.transition = '1.0s'
                            conteiner_person0.style.border = '4px solid blue'

                            $items_person_shits[random].style.backgroundImage = 'url("pngwing.com-5.png")';
                            $items_person_shits[random].style.backgroundSize = 'cover';
                            $items_person_shits[random].style.backgroundPosition = 'center';
                            $items_person_shits[random].style.transition = '0.5s';
                            $items_person_shits[random].style.backgroundColor = 'rgb(209, 171, 171)';

                            console.log($items_person_shits[random])
                            $items_person_shits.splice(random, 1)
                            console.log('удалено',  $items_person_shits)

                            shit_person.splice(e, 1)
                            // shit_person = []
                            console.log(shit_person)

                            if (shit_person.length == 0) {
                                motion = false;

                                setTimeout(function() {
                                    
                                    conteiner_block.style.transition = '0.5s'
                                    text_game.style.opacity = '0';
                                    conteiner_block.style.opacity = '0'

                                    setTimeout(function() {
                                        game_over.style.display = 'grid'
                                        game_over.style.transition = '1.5s'
                                        game_over.style.opacity = '1'

                                        button_gameoveer.style.display = 'flex';
                                        button_gameoveer.style.transition = '1.5s';
                                        button_gameoveer.style.opacity = '1'
                                    }, 500)
                                    


                                }, 1000)
                                
                            }

                            console.log(shit_person)
                            
                            console.debug("Красава")
                            motion = true;
                        }
        

                    }, 1000)

                }, 1000)
            }
        }
        
    }//-----
  })
}


