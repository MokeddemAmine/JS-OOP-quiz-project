export default class Final {
    constructor(correctAnswers,totalAmount){
        this.scoreElement = document.querySelector('.score');
        this.againBtn = document.getElementById('again');

        this.render(correctAnswers,totalAmount);
        this.againBtn.addEventListener('click',this.startAgain);
    }
    render(correctAnswers,totalAmount){
        this.scoreElement.innerHTML = `You answered ${correctAnswers} out of ${totalAmount} correct`;
    }
    startAgain = () =>{
        location.reload();
    }
}