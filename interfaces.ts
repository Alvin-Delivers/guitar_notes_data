export interface Note {
    id: number;
    name: string;
    image: string;
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

//