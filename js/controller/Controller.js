export default class Controller {
    constructor(surveyView, surveyModel) {
        this.surveyView = surveyView;
        this.surveyModel = surveyModel;
        this.surveyView.setControllerOnSubmitSurvey(this.onSubmitSurvey)
        this.renderExistingSurveys(surveyModel.surveys);
        document.getElementById('createSurveyForm').addEventListener('submit', (e) => this.handleCreateSurvey(e));
    }

    handleCreateSurvey(e) {
        e.preventDefault();
        const question = document.getElementById('question').value;
        const answers = document.getElementById('answers').value;
        const survey = this.surveyModel.createSurvey(question, answers);
        const surveyId = this.surveyModel.surveys.length;
        const firstAnswerId = this.surveyModel.answersAmount - answers.split("\n").length;
        this.surveyView.renderSurvey(survey, surveyId, firstAnswerId);
    }

    onSubmitSurvey(e, surveyId, firstAnswerIndex, lastAnswerIndex) {
        e.preventDefault();
        let isAnswersSelected = false;   // false if answer is not selected
        for(let i = firstAnswerIndex; i <= lastAnswerIndex; i++) {
            if(document.getElementById(`answer${i}`).checked) {
                isAnswersSelected = true;
            }
        }
        if (isAnswersSelected) {
            alert('Дякуємо за участь в опитуванні')
            this.removeSurvey(surveyId);
        } 
        else {
            alert('Ви не обрали відповідь на опитування');
        }
    }

    renderExistingSurveys(surveys) {
        let answersCount = 0;
        surveys.forEach((survey, i) => {
            this.surveyView.renderSurvey(survey, i, answersCount);
            answersCount += survey.answers.length;
        });
    }
}