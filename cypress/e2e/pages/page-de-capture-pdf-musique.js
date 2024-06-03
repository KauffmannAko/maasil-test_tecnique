import Entete from "./page-de-test-maasil";

class FormulaireEmail extends Entete {
    // Propriétés de classe pour les sélecteurs CSS
    titre_Email = ".normal";
    prenom = "#form_input500729";
    nom = "#form_input500731";
    email = "#form_input500730";
    checkbox = "#rgpd500732";
    btn_valider = "#btn_submit_500733";
    alert_email = "h3";

    /**
     * Méthode pour remplir un champ de formulaire avec une valeur donnée
     * @param {string} el - Le sélecteur CSS du champ de formulaire
     * @param {string} val - La valeur à saisir dans le champ de formulaire
     */
    Remplissez(el, val) {
        // Utiliser Cypress pour saisir la valeur dans le champ de formulaire
        cy.get(el).type(val);
    }
}

export default FormulaireEmail;
