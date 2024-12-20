const categories = {
    "sports": [
        {
            "question": "What is Lionel Messi's jersey number in the Argentina national team?",
            "options": ["7", "10", "9", "11"],
            "answer": "10"
        },
        {
            "question": "In which year did Israel win its first Olympic gold medal?",
            "options": ["1996", "2000", "2004", "1992"],
            "answer": "2004"
        },
        {
            "question": "Which country hosts the Wimbledon tennis tournament?",
            "options": ["United States", "England", "France", "Australia"],
            "answer": "England"
        },
        {
            "question": "Which team did Michael Jordan play for besides the Chicago Bulls?",
            "options": ["New York Knicks", "Washington Wizards", "Los Angeles Lakers", "Miami Heat"],
            "answer": "Washington Wizards"
        },
        {
            "question": "In which year was the first FIFA World Cup held?",
            "options": ["1930", "1934", "1942", "1928"],
            "answer": "1930"
        },
        {
            "question": "Which country has won the most FIFA World Cups?",
            "options": ["Germany", "Brazil", "Italy", "Argentina"],
            "answer": "Brazil"
        },
        {
            "question": "Who is considered the fastest sprinter in the world?",
            "options": ["Usain Bolt", "Carl Lewis", "Jesse Owens", "Michael Johnson"],
            "answer": "Usain Bolt"
        },
        {
            "question": "How many players are on a basketball team on the court?",
            "options": ["4", "5", "6", "7"],
            "answer": "5"
        },
        {
            "question": "In which year did Israel win the AFC Asian Cup?",
            "options": ["1960", "1964", "1970", "1974"],
            "answer": "1964"
        },
        {
            "question": "Who holds the most Formula 1 World Championships as of 2024?",
            "options": ["Lewis Hamilton", "Michael Schumacher", "Sebastian Vettel", "Max Verstappen"],
            "answer": "Michael Schumacher"
        },
        {
            "question": "What position does the goalkeeper play in soccer?",
            "options": ["Defensive Midfielder", "Left Back", "Goalkeeper", "Striker"],
            "answer": "Goalkeeper"
        },
        {
            "question": "Which tennis player is known for winning 20 Grand Slam titles?",
            "options": ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Andy Murray"],
            "answer": "Roger Federer"
        },
        {
            "question": "How many points is a free throw worth in basketball?",
            "options": ["1", "2", "3", "0"],
            "answer": "1"
        },
        {
            "question": "Which country hosted the 2010 FIFA World Cup?",
            "options": ["Brazil", "South Africa", "Spain", "Germany"],
            "answer": "South Africa"
        },
        {
            "question": "How many gold medals did Michael Phelps win in one Olympics?",
            "options": ["6", "8", "10", "12"],
            "answer": "8"
        },
        {
            "question": "Which sport is referred to as 'The King of Sports'?",
            "options": ["Soccer", "Basketball", "Tennis", "Chess"],
            "answer": "Soccer"
        },
        {
            "question": "Which NBA player was nicknamed 'Black Mamba'?",
            "options": ["Kobe Bryant", "Michael Jordan", "LeBron James", "Shaquille O'Neal"],
            "answer": "Kobe Bryant"
        },
        {
            "question": "In which sport is a racket and small ball used on a table?",
            "options": ["Tennis", "Table Tennis", "Badminton", "Squash"],
            "answer": "Table Tennis"
        },
        {
            "question": "What is the maximum regular soccer match duration without extra time?",
            "options": ["80 minutes", "90 minutes", "100 minutes", "110 minutes"],
            "answer": "90 minutes"
        },
        {
            "question": "Which team won the treble (league, cup, and Champions League) in 1999?",
            "options": ["Real Madrid", "Manchester United", "Barcelona", "Juventus"],
            "answer": "Manchester United"
        }
    ],
    "music": [
        {
            "question": "Who performs the song 'Bohemian Rhapsody'?",
            "options": ["The Beatles", "Queen", "Pink Floyd", "Led Zeppelin"],
            "answer": "Queen"
        },
        {
            "question": "In which year was Michael Jackson's 'Thriller' released?",
            "options": ["1980", "1982", "1984", "1986"],
            "answer": "1982"
        },
        {
            "question": "In which city was the first Eurovision Song Contest held?",
            "options": ["London", "Geneva", "Lugano", "Vienna"],
            "answer": "Lugano"
        },
        {
            "question": "Which Israeli band performed the song 'Atur Mitzchech'?",
            "options": ["Mashina", "Kaveret", "Natural Choice", "Not a band, it's a solo song"],
            "answer": "Not a band, it's a solo song"
        },
        {
            "question": "Which instrument is associated with Jimi Hendrix?",
            "options": ["Piano", "Electric Guitar", "Saxophone", "Drums"],
            "answer": "Electric Guitar"
        },
        {
            "question": "Which singer performed 'Hello'?",
            "options": ["Adele", "Taylor Swift", "Beyoncé", "Rihanna"],
            "answer": "Adele"
        },
        {
            "question": "Which instrument is central to jazz music?",
            "options": ["Guitar", "Saxophone", "Flute", "Violin"],
            "answer": "Saxophone"
        },
        {
            "question": "Who sang 'Imagine'?",
            "options": ["Paul McCartney", "John Lennon", "Freddie Mercury", "David Bowie"],
            "answer": "John Lennon"
        },
        {
            "question": "Which Israeli singer wrote 'The Ballad of the Policeman'?",
            "options": ["Arik Einstein", "Matti Caspi", "Shalom Hanoch", "Meir Ariel"],
            "answer": "Arik Einstein"
        },
        {
            "question": "Chris Martin is the lead singer of which band?",
            "options": ["Red Hot Chili Peppers", "Coldplay", "U2", "Nirvana"],
            "answer": "Coldplay"
        },
        {
            "question": "Which Israeli singer won the 'Discovery of the Year' award in 2020?",
            "options": ["Eden Hason", "Noa Kirel", "Margie", "Ishay Ribo"],
            "answer": "Eden Hason"
        },
        {
            "question": "Which band released the album 'Dark Side of the Moon'?",
            "options": ["Pink Floyd", "Led Zeppelin", "The Beatles", "The Rolling Stones"],
            "answer": "Pink Floyd"
        },
        {
            "question": "In which year did Bob Marley die?",
            "options": ["1979", "1981", "1985", "1990"],
            "answer": "1981"
        },
        {
            "question": "Who performed the song 'Shake It Off'?",
            "options": ["Taylor Swift", "Selena Gomez", "Lady Gaga", "Katy Perry"],
            "answer": "Taylor Swift"
        },
        {
            "question": "Which song represented Israel in Eurovision 2018?",
            "options": ["Toy", "Hallelujah", "A-Ba-Ni-Bi", "Chai"],
            "answer": "Toy"
        }
    ],
    "movies": [
        {
            "question": "Which movie won the Academy Award for Best Picture in 1994?",
            "options": ["Forrest Gump", "Pulp Fiction", "The Shawshank Redemption", "The Lion King"],
            "answer": "Forrest Gump"
        },
        {
            "question": "Who directed the movie 'Inception'?",
            "options": ["Christopher Nolan", "Steven Spielberg", "James Cameron", "Quentin Tarantino"],
            "answer": "Christopher Nolan"
        },
        {
            "question": "Which movie features the quote 'I'll be back'?",
            "options": ["The Terminator", "Die Hard", "Rambo", "Rocky"],
            "answer": "The Terminator"
        },
        {
            "question": "What is the name of the hobbit played by Elijah Wood in 'The Lord of the Rings'?",
            "options": ["Frodo", "Sam", "Pippin", "Merry"],
            "answer": "Frodo"
        },
        {
            "question": "In which year was the first 'Harry Potter' movie released?",
            "options": ["1999", "2000", "2001", "2002"],
            "answer": "2001"
        },
        {
            "question": "Who played Jack Dawson in 'Titanic'?",
            "options": ["Leonardo DiCaprio", "Matt Damon", "Brad Pitt", "Tom Cruise"],
            "answer": "Leonardo DiCaprio"
        },
        {
            "question": "Which film is Pixar's first animated movie?",
            "options": ["Monsters, Inc.", "Finding Nemo", "Toy Story", "The Incredibles"],
            "answer": "Toy Story"
        },
        {
            "question": "Who directed 'Schindler's List'?",
            "options": ["Steven Spielberg", "Martin Scorsese", "Quentin Tarantino", "Francis Ford Coppola"],
            "answer": "Steven Spielberg"
        },
        {
            "question": "Which movie is based on a novel by Stephen King?",
            "options": ["The Shining", "Jurassic Park", "The Godfather", "Goodfellas"],
            "answer": "The Shining"
        },
        {
            "question": "Which actor portrayed the Joker in 'The Dark Knight'?",
            "options": ["Joaquin Phoenix", "Heath Ledger", "Jack Nicholson", "Jared Leto"],
            "answer": "Heath Ledger"
        },
        {
            "question": "Which movie franchise features the character Indiana Jones?",
            "options": ["Star Wars", "Jurassic Park", "Indiana Jones", "The Mummy"],
            "answer": "Indiana Jones"
        },
        {
            "question": "Which movie won the most Oscars in history?",
            "options": ["Titanic", "Ben-Hur", "The Lord of the Rings: The Return of the King", "All of the above"],
            "answer": "All of the above"
        },
        {
            "question": "Who starred as the main character in 'The Matrix'?",
            "options": ["Keanu Reeves", "Will Smith", "Tom Cruise", "Brad Pitt"],
            "answer": "Keanu Reeves"
        },
        {
            "question": "Which movie has the line 'May the Force be with you'?",
            "options": ["Star Wars", "Star Trek", "The Avengers", "Guardians of the Galaxy"],
            "answer": "Star Wars"
        },
        {
            "question": "What is the highest-grossing movie of all time (as of 2024)?",
            "options": ["Avatar", "Avengers: Endgame", "Titanic", "The Lion King (2019)"],
            "answer": "Avatar"
        }
    ],
    "history": [
        {
            "question": "Who was the first president of the United States?",
            "options": ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
            "answer": "George Washington"
        },
        {
            "question": "In which year did World War II end?",
            "options": ["1942", "1945", "1948", "1950"],
            "answer": "1945"
        },
        {
            "question": "Who discovered America?",
            "options": ["Christopher Columbus", "Marco Polo", "Ferdinand Magellan", "Amerigo Vespucci"],
            "answer": "Christopher Columbus"
        },
        {
            "question": "Which ancient civilization built the pyramids?",
            "options": ["Romans", "Greeks", "Egyptians", "Mayans"],
            "answer": "Egyptians"
        },
        {
            "question": "Who was known as the 'Iron Lady'?",
            "options": ["Margaret Thatcher", "Angela Merkel", "Queen Elizabeth I", "Indira Gandhi"],
            "answer": "Margaret Thatcher"
        },
        {
            "question": "What year did the Berlin Wall fall?",
            "options": ["1987", "1988", "1989", "1990"],
            "answer": "1989"
        },
        {
            "question": "Who wrote the Declaration of Independence?",
            "options": ["George Washington", "Thomas Jefferson", "Benjamin Franklin", "John Adams"],
            "answer": "Thomas Jefferson"
        },
        {
            "question": "Which empire was ruled by Genghis Khan?",
            "options": ["Ottoman Empire", "Mongol Empire", "Roman Empire", "Persian Empire"],
            "answer": "Mongol Empire"
        },
        {
            "question": "Who was the first man to walk on the moon?",
            "options": ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
            "answer": "Neil Armstrong"
        },
        {
            "question": "What was the main ship of Christopher Columbus called?",
            "options": ["Santa Maria", "Mayflower", "Pinta", "Nina"],
            "answer": "Santa Maria"
        },
        {
            "question": "Which war was fought between the North and South in the United States?",
            "options": ["Revolutionary War", "Civil War", "Vietnam War", "World War I"],
            "answer": "Civil War"
        },
        {
            "question": "In which year did the Titanic sink?",
            "options": ["1910", "1911", "1912", "1913"],
            "answer": "1912"
        },
        {
            "question": "Who painted the Mona Lisa?",
            "options": ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
            "answer": "Leonardo da Vinci"
        },
        {
            "question": "Which country was formerly known as Persia?",
            "options": ["Iran", "Iraq", "Turkey", "Syria"],
            "answer": "Iran"
        },
        {
            "question": "What event began on July 14, 1789, in France?",
            "options": ["French Revolution", "Napoleonic Wars", "Renaissance", "Industrial Revolution"],
            "answer": "French Revolution"
        }
    ],
};

categories.all = [
    ...categories.sports,
    ...categories.music,
    ...categories.movies,
    ...categories.history
];

const triviaGame = document.querySelector('.trivia-game');
const categoriesRadio = document.querySelector('.categories-radio');
const restartGame = document.querySelector('.restart-game');
const progress = document.querySelector('.progress');
const questionElem = document.querySelector('.question');
const answersElem = document.querySelector('.answers');
const optionButtons = [...answersElem.children];
const nextQuestionButton = document.querySelector('.next');
const scoreElem = document.querySelector('.score');
const playAgain = document.querySelector('.play-again');
let questions = null;
const questionsLimit = 10;
let questionsCounter = 0;
let correctAnswers = 0;

categoriesRadio.onclick = function (event) {
    if (!event.target.matches('button')) return;
    const button = event.target;
    triviaGame.dataset.phase = 'quiz';
    const category = button.dataset.category;
    questions = categories[category];
    questions = questions.toSorted(() => Math.random() - 0.5);
    nextQuestionButton.click();
};

answersElem.onclick = function (event) {
    if (!event.target.matches('button')) return;
    const question = questions[questionsCounter - 1];
    const correctButton = optionButtons.find(button => {
        return button.textContent === question.answer;
    });
    const selectedButton = event.target;
    const isCorrect = selectedButton === correctButton;
    if (!isCorrect) {
        selectedButton.classList.add('incorrect');
        correctButton.classList.add('correct');
    } else {
        selectedButton.classList.add('correct');
        correctAnswers += 1;
    };
    for (const button of optionButtons) {
        button.disabled = true;
    };
    nextQuestionButton.disabled = false;
};

nextQuestionButton.onclick = function () {
    nextQuestionButton.disabled = true;
    for (const button of optionButtons) {
        button.disabled = false;
        button.classList.remove('incorrect', 'correct');
    };
    if (questionsCounter === questionsLimit) {
        triviaGame.dataset.phase = "summary";
        scoreElem.textContent = (correctAnswers / questionsLimit) * 100;
        return;
    };
    questionsCounter += 1;
    if (questionsCounter === questionsLimit) {
        nextQuestionButton.textContent = 'Show Final Score';
    };
    progress.textContent = `${questionsCounter} / ${questionsLimit}`;
    const question = questions[questionsCounter - 1];
    questionElem.textContent = question.question;
    const shuffledOptions = question.options.toSorted(() => Math.random() - 0.5);
    for (const i in shuffledOptions) {
        answersElem.children[i].textContent = shuffledOptions[i];
    };
};



restartGame.onclick = playAgain.onclick = function () {
    window.location.reload()
};