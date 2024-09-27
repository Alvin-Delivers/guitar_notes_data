// Create an interface that defines the functions that will be used for building the quiz 
// the database wrapper will be of the same interface type as the local data wrapper (for future)
// Quiz Clients
// This will return JSON using actual Types. 
// ONE interface for generateQuiz, generateQuestions, generateChoices 


/*

I need a typescript interface that specifies the following methods:
First, generateQuiz. This should return a Quiz object type, a Quiz object type contains an array of questions and each question contains an array of choices. each choice is a Answer object export interface: 
Answer {
    id: number;
    value: string;
}
This definition should also take a Difficulty setting as an input parameter. Difficulty should be either easy or hard. 

Next I need the interface to have a method called generateQuestions. This should return an array of Questions, and each element should be a Questions Object:
export interface Question {
    answers: Array<Answer>
}
This definition should also take a Difficulty setting as an input parameter. 

Next, I need the interface to have a method called generateAnswers. This should return an array of Answer Objects:
export interface Answer {
    id: number;
    value: string;
}
Answers should take an input parameter of note id

*/






function generateQuestions(){

}