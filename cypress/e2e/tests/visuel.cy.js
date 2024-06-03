/// <reference types="Cypress" />

import Entete from "../pages/page-de-test-maasil";
const entete = new Entete();

describe("Vérifiez la Section d'En-tête",()=>{
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


    it("VIS_100_2 - Vérifiez le titre de la section d'en-tête",()=>{

        entete.verifiezText(entete.titre_entete, testData.titre.text);

    })

    it("VIS_100_3 - Vérifiez le sous titre de la section d'en-tête",()=>{

        entete.verifiezText(entete.sousTitre_entete, testData["Sous titre"].text);

    })

    it("VIS_100_4 - Vérifiez la présence du bouton étiqueté <<RECEVEZ VOTRE DOCUMENT GRATUIT>>",()=>{

        entete.elementExit(entete.btn_entete);
        entete.verifiezText(entete.textDansBtn_entete, testData.btn.text);

    })

    it("VIS_100_5 - Vérifiez la présence du texte en dessous du bouton <<RECEVEZ VOTRE DOCUMENT GRATUIT>>",()=>{

        entete.verifiezText(entete.textDessousBtn_entete, testData.btn.text2);

    })
})