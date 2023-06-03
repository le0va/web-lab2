export default class SurveyView {
    constructor() {
        this.controllerOnSubmitSurvey = null;
    }

    setControllerOnSubmitSurvey(controllerOnSubmitSurvey) {
        this.controllerOnSubmitSurvey = controllerOnSubmitSurvey;
    }

    removeSurvey(surveyId) {
        document.getElementById(`survey-${surveyId}`).remove();
    }

    renderSurvey(survey, surveyId, firstAnswerId) {
        const lastAnswerId = firstAnswerId + survey.answers.length - 1;
        const card = document.createElement('div');
        card.className = 'col-md-6';   
        card.innerHTML = `
            <form class="card" id="survey-${surveyId}">
                <div class="card-body">
                    <h5 class="card-title">Опитуванння №${surveyId+1}</h5>
                    <p class="card-text">${survey.question}</p>
                    ${survey.answers.map((answer, i) => 
                        `<div class="form-check">
                            <input class="form-check-input" type="checkbox" name="answer${firstAnswerId+i}" id="answer${firstAnswerId+i}" value="answer${firstAnswerId+i}">
                            <label class="form-check-label" for="answer${firstAnswerId+i}">${answer}</label>
                        </div>`
                        ).join('')
                    }
                    
                </div>
                <button type="submit" class="btn btn-primary">Зберегти відповідь</button>
            </form>
        `;
        document.getElementById('surveys-container').appendChild(card);
        document.getElementById(`survey-${surveyId}`).addEventListener('submit', (e) => this.controllerOnSubmitSurvey(e, surveyId, firstAnswerId, lastAnswerId));
    }
}