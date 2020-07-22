let users = {
    Ran_wang: {
        id: 'ranwang',
        name: 'Ran Wang',
        avatarURL: 'https://picsum.photos/id/238/200',
        questions: ['heg7xm5afp9s50dh0q2xk', 'heg7xm5afp9s50dh0q2xk', 'ut4jm78n5m9ctqysdukqs']
    },
    Alex_Dutreil: {
        id: 'alexdutreil',
        name: 'Alex Dutreil',
        avatarURL: 'https://picsum.photos/id/239/200',
        questions: ['4ga6kisvqh94gm4sn1bsef', 'nsekzd059pk3hvqm1qu5el']
    },
    Shen_yi: {
        id: 'shenyi',
        name: 'Shen Yi',
        avatarURL: 'https://picsum.photos/id/240/200',
        questions: ['tiy0f0wbp0lffh7eib7onq', 'pyo665rh1yjnyydovqp6fj', 'csuijhk0ov8gphfcrherl']
    }
}

let questions = {
    'bqbr9udjh7li0t45bbl67c': {
        id: 'bqbr9udjh7li0t45bbl67c',
        AnswerA: {
            text: 'Buy a condo',
            userSelected: ['ranwang', 'alexdutreil']
        },
        AnswerB: {
            text: 'Buy a house',
            userSelected: ['shenyi']
        },
        createdAt: 1593975393509,
        Author: 'ranwang'
    },
    'heg7xm5afp9s50dh0q2xk': {
        id: 'heg7xm5afp9s50dh0q2xk',
        AnswerA: {
            text: 'Be a FrontEnd Developer',
            userSelected: ['ranwang']
        },
        AnswerB: {
            text: 'Be a Backend Developer',
            userSelected: ['alexdutreil', 'shenyi']
        },
        createdAt: 1593975420228,
        Author: 1
    },
    'ut4jm78n5m9ctqysdukqs': {
        id: 'ut4jm78n5m9ctqysdukqs',
        AnswerA: {
            text: 'Keep a cat',
            userSelected: ['ranwang', 'alexdutreil']
        },
        AnswerB: {
            text: 'Keep a dog',
            userSelected: ['shenyi']
        },
        createdAt: 1593976376963,
        Author: 'ranwang'
    },
    '4ga6kisvqh94gm4sn1bsef': {
        id: '4ga6kisvqh94gm4sn1bsef',
        AnswerA: {
            text: 'Eat meat',
            userSelected: []
        },
        AnswerB: {
            text: 'Eat as a vegetarian',
            userSelected: []
        },
        createdAt: 1593976490796,
        Author: 'alexdutreil'
    },
    'nsekzd059pk3hvqm1qu5el': {
        id: 'nsekzd059pk3hvqm1qu5el',
        AnswerA: {
            text: 'Play game in laptop',
            userSelected: []
        },
        AnswerB: {
            text: 'Play game in desktop',
            userSelected: []
        },
        createdAt: 1593976549039,
        Author: 'alexdutreil'
    },
    'tiy0f0wbp0lffh7eib7onq': {
        id: 'tiy0f0wbp0lffh7eib7onq',
        AnswerA: {
            text: 'Play FTP games',
            userSelected: ['alexdutreil', 'shenyi']
        },
        AnswerB: {
            text: 'Play RPG games',
            userSelected: ['ranwang']
        },
        createdAt: 1593976490796,
        Author: 'shenyi'
    },
    'pyo665rh1yjnyydovqp6fj': {
        id: 'pyo665rh1yjnyydovqp6fj',
        AnswerA: {
            text: 'Play classic WOW',
            userSelected: ['alexdutreil']
        },
        AnswerB: {
            text: 'Play retail WOW',
            userSelected: []
        },
        createdAt: 1593976722975,
        Author: 'shenyi'
    },
    'csuijhk0ov8gphfcrherl': {
        id: 'csuijhk0ov8gphfcrherl',
        AnswerA: {
            text: 'Work remotely',
            userSelected: []
        },
        AnswerB: {
            text: 'Work at office',
            userSelected: ['ranwang', 'shenyi']
        },
        createdAt: 1593976786548,
        Author: 'shenyi'
    }
}

function formatQuestion(textA, textB, authedUser){
    return {
        id: generateUID(),
        AnswerA: {
            text: textA,
            userSelected: []
        },
        AnswerB: {
            text: textB,
            userSelected: []
        },
        createdAt: Date.now(),
        Author: authedUser.id
    }
}

function saveAnswer(questionId, option, authedUser){

}

export function _getUsers(){
    return new Promise((res, rej) => {
        setTimeout(() => res({...users}), 500);
    })
}

export function _getQuestions(){
    return new Promise((res, rej) => {
        setTimeout(() => res({...questions}), 500);
    })
}

function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function saveQuestion(answerA, answerB, authedUser){
    const id = generateUID()

    setTimeout(() => {
        questions = {
            ...questions,
            id:{
                formatQuestion(answerA, answerB, authedUser)
            }
        }
    }, 500);
}