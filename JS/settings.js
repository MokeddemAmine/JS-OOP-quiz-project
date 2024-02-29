import Quiz from './quiz.js';
export default class Settings{
    constructor(){
        this.quiz = document.querySelector('.quiz');
        this.settings = document.querySelector('.settings');
        this.category = document.querySelector('#category');
        this.dificulty = [
            document.getElementById('easy'),
            document.getElementById('medium'),
            document.getElementById('hard')
        ];
        this.nQuestions = document.getElementById('nQuestions');
        this.startBtn = document.getElementById('startBtn');
        this.quizs = {};

        this.startBtn.addEventListener('click',this.startQuizApp);
    }
    startQuizApp = async () =>{

        try {
            const amount = this.nQuestions.value;
            const categoryID = this.category.value;
            const difficulty = this.getDifficulty();
            
            let url = `https://opentdb.com/api.php?amount=${amount}&category=${categoryID}&difficulty=${difficulty}`;

            let result = await fetch(url).then(response => response.json()).then( (data) => { 
                return data.results;
             });

            new Quiz(this.quiz,amount,result);
            
            if(result){
                console.log(result)
                 this.quiz.style.display = 'flex';
                 this.settings.style.display = 'none';
             }
             else{
                alert('error')
             } 
        }
        catch(err){
            alert(err)
        }
    }
    getDifficulty = () =>{
        const dificulty = this.dificulty.filter(e => e.checked);
        if(dificulty.length === 1 )
            return dificulty[0].id;
        else
            alert('please select difficult');
    }
}