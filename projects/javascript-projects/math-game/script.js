

const generateQuestion = function () {
    function generateNumber(max = 100) {
        let num = Math.floor(Math.random() * max) + 1;
        return num;
    };
    const generateQuestionByOperator = {
        '+': function () {
            const a = generateNumber(100);
            const b = generateNumber(100);
            const c = a + b;
            return { a, b, c };
        },
        '-': function () {
            const { a, b, c } = this['+']();
            return { a: c, b: b, c: a };
        },
        '×': function () {
            const a = generateNumber(10);
            const b = generateNumber(10);
            const c = a * b;
            return { a, b, c };
        },
        '÷': function () {
            const { a, b, c } = this['×']();
            return { a: c, b: b, c: a };
        },
    };
    return function () {
        const operator = Object.keys(generateQuestionByOperator)[Math.floor(Math.random() * 4)];
        const question = generateQuestionByOperator[operator]();
        question.string = `${question.a} ${operator} ${question.b} = `;
        return question;
    };
}();
const mathGame = document.querySelector('.math-game');
const equation = document.querySelector('.equation');
const answerInput = document.querySelector('.answer');
const checkBtn = document.querySelector('.check');
const nextBtn = document.querySelector('.next');
const resultSentence = document.querySelector('.result-sentence');

let question = null;

checkBtn.onclick = function () {
    const answer = +answerInput.value;
    if (answer === question.c) {
        resultSentence.textContent = 'Well Done!'
        return;
    };
    resultSentence.textContent = 'Wrong Answer! Try Again...'
};

nextBtn.onclick = function () {
    question = generateQuestion();
    equation.textContent = question.string;
    resultSentence.textContent = '';
    answerInput.value = '';
};

mathGame.onsubmit = function (event) {
    event.preventDefault();
    const isSecondSubmit = resultSentence.textContent === 'Well Done!';
    checkBtn.click();
    if (!isSecondSubmit) return;

    nextBtn.click();
};

nextBtn.click();