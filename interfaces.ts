export interface Note {
    id: number;
    name: string;
    image: string;
    difficulty: DifficultySetting;
}

export interface Answer {
    id: number;
    value: string;
}

export interface CorrectAnswer {
    id: number;
    noteId: number;
    correctAnswers: Array<number>;
}

export interface QuestionAnswer {
    id: number;
    answer: CorrectAnswer;
}

export interface Question {
    answers: Array<Answer>;
}

export enum Difficulty {
    EASY = 'easy',
    HARD = 'hard'
  }
  
export type DifficultySetting = Difficulty.EASY | Difficulty.HARD;


// one question type for correct answer, and one questions type for an array of answers