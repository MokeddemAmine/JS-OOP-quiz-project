export default class Question{
    constructor(question){
        this.questionElement = document.querySelector('#question');
        this.answerElements = [
            document.getElementById('a1'),
            document.getElementById('a2'),
            document.getElementById('a3'),
            document.getElementById('a4')
        ];
        this.correctAnswer = question.correct_answer;
        this.question = question.question;
        this.isCorrect = false;

        this.answersDefault = [question.correct_answer,...question.incorrect_answers];
        this.answers = this.getAnswersDefault([]);
    }
    getAnswersDefault(array){
        for(var i=0;i<4;i++){
            var n = Math.ceil(Math.random()*2);
            if(n===1)
                array.push(this.answersDefault[i]);
            else
                array.unshift(this.answersDefault[i]);
        }
        console.log(this.answersDefault);
        console.log(array);
        return array;
    }
    answer(checkElement){
        this.isCorrect = checkElement[0].textContent.trim() === this.correctAnswer.trim() ? true : false;
    }
    render(){
        this.questionElement.innerHTML = this.question;
        this.answerElements.forEach((ele,index) => {
            ele.innerHTML = `<input type='radio' name='radio'> ${this.answers[index]}`;
        });
    }
}