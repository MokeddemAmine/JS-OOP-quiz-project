import Question from './question.js';
import Final from './final.js';

export default class Quiz{
    constructor(quizElement,amount,questions){
        this.quizElement = quizElement;
        this.finalElement = document.querySelector('.final');

        this.currentElement = document.querySelector('.current');
        this.totalElement = document.querySelector('.total');

        this.nextBtn = document.querySelector('#next');

        this.totalAmount = amount;
        this.answeredAmount = 0;

        this.questions = this.setQuestion(questions);
        this.renderQuestion();
        this.nextBtn.addEventListener('click',this.nextQuestion);
    }
    setQuestion (questions) {
        return questions.map(question => new Question(question))
    }
    renderQuestion(){
        this.questions[this.answeredAmount].render();
        this.currentElement.innerHTML = this.answeredAmount +1;
        this.totalElement.innerHTML = this.totalAmount;
    }
    nextQuestion = () => {
        const checkElement = this.questions[this.answeredAmount].answerElements.filter(ele => ele.firstChild.checked)
        if(checkElement.length === 0)
            alert('check Element')
        else{
            this.questions[this.answeredAmount].answer(checkElement);
            this.answeredAmount++;
            this.answeredAmount < this.totalAmount ? this.renderQuestion(): this.endQuizApp();
        }
    }
    endQuizApp(){
        this.quizElement.style.display = 'none';
        this.finalElement.style.display = 'flex';
        new Final(this.countCorrectAnswers(),this.totalAmount);
    }
    countCorrectAnswers(){
        let count = 0;
        this.questions.forEach(ele => {
            if(ele.isCorrect)
                count++
        })
        return count;
    }
}