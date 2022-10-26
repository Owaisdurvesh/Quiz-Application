var quizData = [
    {
        question: "Html Stands For _________",
        options: [
            "Hyper Text Makeup Language",
            "html",
            "Case Cading Style Sheet",
            "Hypertext markup language",
        ],
        correctAns: "Hypertext markup language",
    },
    {
        question: "Css Stands For _________",
        options: [
            "Casecading Style Sheet",
            "Java",
            "Ram",
            "Hypertext markup language",
        ],
        correctAns: "Casecading Style Sheet",
    },
    {
        question: "Js Stands For _________",
        options: ["Java Style", "Java Script", "Script", "Script Src"],
        correctAns: "Java Script",
    },
    {
        question: "Dom Stands For _________",
        options: ["Document Object Model", "html", "Css", "Java"],
        correctAns: "Document Object Model",
    },
    {
        question: "Ram Stands For _________",
        options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
        correctAns: "Random Acccess Memory",
    },
    {
        question: "Rom Stands For _________",
        options: [
            "Hyper Text Markup Language",
            "html",
            "HTml",
            "Read Only Memory",
        ],
        correctAns: "Read Only Memory",
    },
]

let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[name='option']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    let data = quizData[index];
    questionBox.innerHTML = `${index + 1}) ${data.question}`;
    //console.log(data);
    allInputs[0].nextElementSibling.innerHTML = data.options[0];
    allInputs[0].value = data.options[0];
    allInputs[1].nextElementSibling.innerHTML = data.options[1];
    allInputs[1].value = data.options[1];
    allInputs[2].nextElementSibling.innerHTML = data.options[2];
    allInputs[2].value = data.options[2];
    allInputs[3].nextElementSibling.innerHTML = data.options[3];
    allInputs[3].value = data.options[3];
}

document.querySelector("#submit").addEventListener(
    "click",
    function () {
        const data = quizData[index];
        const ans=getAnswer();
        if (ans === data.correctAns) {
            ++correct;
        } else {
            ++incorrect;
        }
        index++;
        loadQuestion();
    }
);

const getAnswer = () => {
    let ans;
    const options = document.querySelectorAll('input[name="option"]');
    for (const f of options) {
        if (f.checked) {
            ans = f.value;
        }
    }
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
  <div class="col">
      <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
  </div>
`
}
loadQuestion(index);
