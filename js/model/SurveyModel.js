export default class SurveyModel {
    constructor() {
        this.surveys = [];
        this.answersAmount = 0;
    }

    createSurvey(question, answers) {
        const survey = {
            question: question,
            answers: answers.split('\n')
        }
        this.surveys.push(survey);
        this.answersAmount += survey.answers.length;
        return survey;
    }
}