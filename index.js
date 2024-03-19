let questions = document.querySelectorAll('.question')

questions.forEach(function (question){
    question.addEventListener('click', function(){
        const answer = question.nextElementSibling
        if(answer.classList.contains('hidden')===true){
            answer.classList.remove('hidden')
            question.classList.add('active')
        } else if (answer.classList.contains('hidden')===false){
            answer.classList.add('hidden')
            question.classList.remove('active')
        }
    })
})