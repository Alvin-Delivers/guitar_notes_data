import { Note, CorrectAnswer, Answer } from './interfaces'

const Notes: Note[] = [
    {
        id: 1,
        name: 'a3',
        image: 'images/A3 (Hard).jpeg'
    },
    {
        id: 2,
        name: 'a4',
        image: 'images/A4 (Easy).jpeg'
    },
    {
        id: 3,
        name: 'a5',
        image: 'images/A5 (Hard).jpeg'
    },
    {
        id: 4,
        name: 'b3',
        image: 'images/B3 (Hard).jpeg'
    },
    {
        id: 5,
        name: 'b4',
        image: 'images/B4 (Easy).jpeg'
    },
    {
        id: 6,
        name: 'b5',
        image: 'images/B5 (Hard).jpeg'
    },
    {
        id: 7,
        name: 'c4',
        image: 'images/C4 (Hard).jpeg'
    },
    {
        id: 8,
        name: 'c5',
        image: 'images/C5 (Easy).jpeg'
    },
    {
        id: 9,
        name: 'c6',
        image: 'images/C6 (Hard).jpeg'
    },
    {
        id: 10,
        name: 'd4',
        image: 'images/D4 (Hard).jpeg'
    },
    {
        id: 11,
        name: 'd5',
        image: 'images/D5 (Easy).jpeg'
    },
    {
        id: 12,
        name: 'd6',
        image: 'images/D6 (Hard).jpeg'
    }, 
    {
        id: 13,
        name: 'e3',
        image: 'images/E3 (Hard).jpeg'
    },
    {
        id: 14,
        name: 'e4',
        image: 'images/E4 (Easy).jpeg'
    },
    {
        id: 15,
        name: 'e5',
        image: 'images/E5 (Easy).jpeg'
    },
    {
        id: 16,
        name: 'e6',
        image: 'images/B6 (Hard).jpeg'
    },
    {
        id: 17,
        name: 'f3',
        image: 'images/F3 (Hard).jpeg'
    },
    {
        id: 18,
        name: 'f4',
        image: 'images/F4 (Hard).jpeg'
    },
    {
        id: 19,
        name: 'f5',
        image: 'images/F5 (Hard).jpeg'
    },
    {
        id: 20,
        name: 'f6',
        image: 'images/F6 (Hard).jpeg'
    },
    {
        id: 21,
        name: 'g3',
        image: 'images/G3 (Hard).jpeg'
    },
    {
        id: 22,
        name: 'g4',
        image: 'images/G4 (Easy).jpeg'
    },
    {
        id: 23,
        name: 'g5',
        image: 'images/G5 (Hard).jpeg'
    }
]

const Answers: Answer[] = 
[
    {
        id: 0,
        value: 'Open A',
        
    },
    {
        id: 1,
        value: '5th fret E (low)'
    },
    {
        id: 2,
        value: '2nd fret on G'
    },
    {
        id: 3,
        value: '7th fret on D'
    },
    {
        id: 4,
        value: '2nd fret on G'
    },
    {
        id: 5,
        value: '5th fret on E (high)'
    }, 
    {
        id: 6,
        value: '10th fret on B'
    },
    {
        id: 7,
        value: '2nd fret on A'
    },
    {
        id: 8,
        value: '7th fret on E (low)'
    },
    {
        id: 9,
        value: 'Open B'
    },
    {
        id: 10,
        value: '4th fret on G'
    },
    {
        id: 11,
        value: '7th fret on E (high)'
    },
    {
        id: 12,
        value: '12th fret on B'
    },
    {
        id: 13,
        value: '8th fret on E (low)'
    },
    {
        id: 14,
        value: '3rd fret on A'
    },
    {
        id: 15,
        value: '1st fret on B'
    },
    {
        id: 16,
        value: '5th fret on G'
    },
    {
        id: 17,
        value: '8th fret on E (high)' 
    },
    {
        id: 18,
        value: '3rd fret on A' 
    },
    {
        id: 19,
        value: 'Open D' 
    },
    {
        id: 20,
        value: '5th fret on A' 
    },
    {
        id: 21,
        value: '10th fret on E (low)'
    },
    {
        id: 22,
        value: '3rd fret on B'
    },
    {
        id: 23,
        value: '7th fret on D'
    },
    {
        id: 24,
        value: '10th fret on E (high)'
    },
    {
        id: 25,
        value: 'Open E (low)'
    },
    {
        id: 26,
        value: '2nd fret on D'
    },
    {
        id: 27,
        value: '12th fret on E (low)'
    },
    {
        id: 28,
        value: 'Open E (high)'
    },
    {
        id: 29,
        value: '5th fret on B'
    },
    {
        id: 30,
        value: '12th fret on E (high)'
    },
    {
        id: 31,
        value: '1st fret on E (low)'
    },
    {
        id: 32,
        value: '3rd fret on D'
    },
    {
        id: 33,
        value: '8th fret on A'
    },
    {
        id: 34,
        value: '1st fret on E (high)'
    },
    {
        id: 35,
        value: '6th fret on B'
    },
    {
        id: 36,
        value: '10th fret on G'
    },
    {
        id: 37,
        value: '13th fret on E (high)'
    },
    {
        id: 38,
        value: '3rd fret on E (low)'
    },
    {
        id: 39,
        value: 'Open G'
    },
    {
        id: 40,
        value: '5th fret on D'
    },
    {
        id: 41,
        value: '10th fret on A'
    },
    {
        id: 42,
        value: '3rd fret on E (high)'
    },
    {
        id: 43,
        value: '8th fret on B'
    },
    {
        id: 44,
        value: '12th fret on G'
    },
    
]

const CorrectAnswers: CorrectAnswer[] = [
    {
       id: 1,
       noteId: 1,
       correctAnswers: [0, 1]
    },
    {
        id: 2,
        noteId: 2,
        correctAnswers: [2, 3]
     },
     {
        id: 3,
        noteId: 3,
        correctAnswers: [5, 6]
     },
     {
        id: 4,
        noteId: 4,
        correctAnswers: [7, 8]
     },
     {
        id: 5,
        noteId: 5,
        correctAnswers: [9, 10]
     },
     {
        id: 6,
        noteId: 6,
        correctAnswers: [11, 12]
     },
     {
        id: 7,
        noteId: 7,
        correctAnswers: [13, 14]
     },
     {
        id: 8,
        noteId: 8,
        correctAnswers: [15, 16]
     },
     {
        id: 9,
        noteId: 9,
        correctAnswers: [17, 18]
     },
     {
        id: 10,
        noteId: 10,
        correctAnswers: [19, 20, 21]
     },
     {
        id: 11,
        noteId: 11,
        correctAnswers: [22, 23]
     },
     {
        id: 12,
        noteId: 12,
        correctAnswers: [24]
     },
     {
        id: 13,
        noteId: 13,
        correctAnswers: [25]
     },
     {
        id: 14,
        noteId: 14,
        correctAnswers: [26, 27]
     },
     {
        id: 15,
        noteId: 15,
        correctAnswers: [28, 29]
     },
     {
        id: 16,
        noteId: 16,
        correctAnswers: [30]
     },
     {
        id: 17,
        noteId: 17,
        correctAnswers: [31]
     },
     {
        id: 18,
        noteId: 18,
        correctAnswers: [32, 33]
     },
     {
        id: 19,
        noteId: 19,
        correctAnswers: [34, 35, 36]
     },
     {
        id: 20,
        noteId: 20,
        correctAnswers: [37]
     },
     {
        id: 21,
        noteId: 21,
        correctAnswers: [38]
     },
     {
        id: 22,
        noteId: 22,
        correctAnswers: [39, 40, 41]
     },
     {
        id: 23,
        noteId: 23,
        correctAnswers: [42, 43, 44]
     }
]

//generate a list of 10 random questions. 
//Each question has 4 possible choices, with 1 correct answer. 