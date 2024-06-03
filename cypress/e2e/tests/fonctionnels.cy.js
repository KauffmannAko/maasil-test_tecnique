/// <reference types="Cypress" />

import FormulaireEmail from "../pages/page-de-capture-pdf-musique";

const formulaire = new FormulaireEmail()

describe("Vérifiez que la fonctionnalité Recevoir le document par email fonctionne correctement",()=>{
    let testData;

   // Loads test data before test executions
    before(()=>{
        cy.fixture('data').then(function(Data){
            testData = Data;
        })
    })

    // Naviguez vers la page VIS_100_1
    beforeEach(()=>{

        cy.visit('/');
    })


    it("Fonc_200_2 - Cliquez sur le bouton <<RECEVEZ VOTRE DOCUMENT GRATUIT>>",()=>{

        formulaire.btnClique(formulaire.btn_entete);
        formulaire.verifiezText(formulaire.titre_Email, testData.email.text)

    })

    it("Fonc_200_3 - Remplissez tous les champs du formulaire avec vos noms et votre adresse e-mail. Ne cochez pas la case à cocher. Cliquez sur <<Valider>>",()=>{

        formulaire.btnClique(formulaire.btn_entete);
        formulaire.Remplissez(formulaire.prenom, testData.email.prenom);
        formulaire.Remplissez(formulaire.nom, testData.email.nom);
        formulaire.Remplissez(formulaire.email, testData.email.email);
        formulaire.btnClique(formulaire.btn_valider)
        formulaire.verifiezText(formulaire.titre_Email, testData.email.text)

    })

    it("Fonc_200_4 - Remplissez tous les champs du formulaire avec vos noms et votre adresse e-mail.cochez  la case à cocher. Cliquez sur <<Valider>>",()=>{

        formulaire.btnClique(formulaire.btn_entete);
        formulaire.Remplissez(formulaire.prenom, testData.email.prenom);
        formulaire.Remplissez(formulaire.nom, testData.email.nom);
        formulaire.Remplissez(formulaire.email, testData.email.email);
        formulaire.btnClique(formulaire.checkbox);
        formulaire.btnClique(formulaire.btn_valider);
        formulaire.elementExit(formulaire.alert_email);

    })



    
})