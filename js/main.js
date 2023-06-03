import Controller from "./controller/Controller.js";
import SurveyView from "./view/SurveyView.js";
import SurveyModel from "./model/SurveyModel.js";

const surveyView = new SurveyView();
const surveyModel = new SurveyModel()
surveyModel.createSurvey('Пепсі або кола?', 'Пепсі\nКола');
surveyModel.createSurvey('Улюблений музикальний виконавець', 'Андрій Кузьменко\nПетро Моставчук');

let controller = new Controller(surveyView, surveyModel);
