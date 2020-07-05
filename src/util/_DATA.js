const users = {
    Ran_wang: {
        id: 1,
        name: 'Ran Wang',
        avatarURL: 'https://picsum.photos/id/238/200',
        questions: [1, 2, 3]
    },
    Alex_Dutreil: {
        id: 2,
        name: 'Alex Dutreil',
        avatarURL: 'https://picsum.photos/id/239/200',
        questions: [4, 5]
    },
    Shen_yi: {
        id: 3,
        name: 'Shen Yi',
        avatarURL: 'https://picsum.photos/id/240/200',
        questions: [6, 7, 8]
    }
}

const questions = {
    1: {
        id: 1,
        AnswerA: {
            text: 'Buy a condo',
            userSelected: [1, 2]
        },
        AnswerB: {
            text: 'Buy a house',
            userSelected: [3]
        },
        createdAt: 1593975393509,
        Author: 1
    },
    2: {
        id: 2,
        AnswerA: {
            text: 'Be a FrontEnd Developer',
            userSelected: [1]
        },
        AnswerB: {
            text: 'Be a Backend Developer',
            userSelected: [2, 3]
        },
        createdAt: 1593975420228,
        Author: 1
    },
    3: {
        id: 3,
        AnswerA: {
            text: 'Keep a cat',
            userSelected: [1, 2]
        },
        AnswerB: {
            text: 'Keep a dog',
            userSelected: [3]
        },
        createdAt: 1593976376963,
        Author: 1
    },
    4: {
        id: 4,
        AnswerA: {
            text: 'Eat meat',
            userSelected: []
        },
        AnswerB: {
            text: 'Eat as a vegetarian',
            userSelected: []
        },
        createdAt: 1593976490796,
        Author: 2
    },
    5: {
        id: 5,
        AnswerA: {
            text: 'Play game in laptop',
            userSelected: []
        },
        AnswerB: {
            text: 'Play game in desktop',
            userSelected: []
        },
        createdAt: 1593976549039,
        Author: 2
    },
    6: {
        id: 6,
        AnswerA: {
            text: 'Play FTP games',
            userSelected: [2, 3]
        },
        AnswerB: {
            text: 'Play RPG games',
            userSelected: [1]
        },
        createdAt: 1593976490796,
        Author: 3
    },
    7: {
        id: 7,
        AnswerA: {
            text: 'Play classic WOW',
            userSelected: [2]
        },
        AnswerB: {
            text: 'Play retail WOW',
            userSelected: []
        },
        createdAt: 1593976722975,
        Author: 3
    },
    8: {
        id: 8,
        AnswerA: {
            text: 'Work remotely',
            userSelected: []
        },
        AnswerB: {
            text: 'Work at office',
            userSelected: [3, 1]
        },
        createdAt: 1593976786548,
        Author: 3
    }
}
