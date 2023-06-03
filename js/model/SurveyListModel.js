export default class SurveyListModel {
    constructor() {
        this.surveys = [];

    }

    add(survey) {
        this.surveys.push(survey);
    }
}