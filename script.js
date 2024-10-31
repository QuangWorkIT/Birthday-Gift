document.addEventListener('DOMContentLoaded', function() {
    const flames = document.querySelectorAll('.flame')
    const cake = document.querySelector('.cake')
    const showButton = document.querySelector('.buttonContainer')
    const area = document.querySelectorAll('.circles')
    let count = 0;
    flames.forEach(flame => {
        flame.addEventListener('click', () => {
            flame.style.display = 'none'
            count++;
            
            if(count == 8){
                cake.style.display = 'none'
                showButton.style.display = 'flex'
                area.forEach(area => {
                    area.classList.add('scale-reset')
                })
            }  
        })
    })

    function updateContent(text, div){
        const block = document.querySelector(`${div}`)
        block.textContent = text 
    }


    const bg = document.querySelector('.area')
    const buttons = document.querySelectorAll('button')
    const lis = document.querySelectorAll('.circles li')
    const title = document.querySelector('.text')
    let check, check1, check2;
    check = check1 = check2 = false;
    let phase = 0
    
    buttons[0].addEventListener('click', () => {
        let countHate = 0
        buttons[0].classList.add('button-click')
        buttons[0].addEventListener('animationend', () => {
            buttons[0].classList.remove('button-click')
            let top = Math.floor(Math.random() * 100) + 100
            let left = Math.floor(Math.random() * 100)
            buttons[0].style.top = top +'%'
            buttons[0].style.left = left +'%'
        })
        const string = ['Nah, its not that bad!', 'Wrong choice. Choose another', 'Why u so mean?']
        const string2 = ['ur kidding, right?', 'Reread the questions pls!', 'Whats wrong with u']
        let index = Math.floor(Math.random() * 3);
        switch(phase){
            case 0:
                updateContent(string[index], '.hate')
            break;
            case 1:
                updateContent(string2[index], '.hate')
                break;
        }
        
        check =  true;
        if(check){
            buttons[0].addEventListener('mouseover', () => {
                bg.style.backgroundColor = '#F88379'
            })
            buttons[0].addEventListener('mouseout', () => {
                bg.style.backgroundColor = '#4e54c8'
            })
        }
    })


    buttons[1].addEventListener('click', () => {
        console.log('clicked')
        buttons[1].classList.add('button-click')
        buttons[1].addEventListener('animationend', () => {
            buttons[1].classList.remove('button-click')
        })
        switch(phase) {
            case 0:
                updateContent('Wonderful', '.miss')
                updateContent('u hate me', '.hate')
                updateContent('Really busy', '.normal')
                updateContent('Tell me about your day', '.text')
                break;
        }
        phase++;
        check1 =  true;
        if(check1){
            buttons[1].addEventListener('mouseover', () => {
                if(phase != 2){
                    bg.style.backgroundColor = '#f7cf85'
                    lis.forEach(li => {
                        li.style.background = 'rgba(255, 255, 255, 0.8)'
                    })
                }
            })
            buttons[1].addEventListener('mouseout', () => {
                if(phase != 2){
                    bg.style.backgroundColor = '#4e54c8'
                    lis.forEach(li => {
                        li.style.background = 'rgba(255, 255, 255, 0.2)'
                    })
                }
            })
        }
        if(phase == 2){
            buttons.forEach(button => {
                button.style.display = 'none'
            })
            updateContent('Okay ジ. Hope u enjoy the gift', '.text')
            applyStyles()
            bg.style.backgroundColor = '#f7cf85'
        }
    })


    buttons[2].addEventListener('click', () => {
        console.log('clicked')
        buttons[2].classList.add('button-click')
        buttons[2].addEventListener('animationend', () => {
            buttons[2].classList.remove('button-click')

        })
        switch(phase) {
            case 0:
                updateContent('Really busy', '.normal')
                updateContent('u hate me', '.hate')
                updateContent('Wonderful', '.miss')
                updateContent('Tell me about your day', '.text')
                break;
        }
        phase++;
        check2 =  true;
        if(check2){
            buttons[2].addEventListener('mouseover', () => {
                if(phase != 2){
                    bg.style.backgroundColor = '#5d90f1'
                }
            })
            buttons[2].addEventListener('mouseout', () => {
                if(phase != 2){
                    bg.style.backgroundColor = '#4e54c8'
                }
            })
        }

        if(phase === 2){
            buttons.forEach(button => {
                button.style.display = 'none'
            })
            updateContent('Okay. Hope u enjoy the gift ジ', '.text')
            applyStyles()
            bg.style.backgroundColor = '#5d90f1'
        }
    })


    function applyStyles() {
        if (window.matchMedia('(min-width: 600px)').matches) {
            title.style.top = '0px';
            title.style.left = '100px';
        } else {
            // Optionally, reset styles for screens smaller than 600px
            title.style.top = '0'; // Reset to original or different style
            title.style.left = '';
        }
    }
}) 