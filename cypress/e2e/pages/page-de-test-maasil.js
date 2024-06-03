// Définir la classe Entete
class Entete {
    // Propriétés de classe pour les sélecteurs CSS
    titre_entete = "h1 > span";
    sousTitre_entete = "h4 > strong";
    textDansBtn_entete = "#button_link_4285615 > span";
    btn_entete = "#button_link_4285615";
    textDessousBtn_entete = "#element4285616 > .maincontainer > .content > .texte > h5";
  
    /**
     * Méthode pour vérifier qu'un élément contient le texte spécifié
     * @param {string} el - Le sélecteur CSS de l'élément
     * @param {string} txt - Le texte à vérifier dans l'élément
     */
    verifiezText(el, txt) {
      // Utiliser Cypress pour obtenir l'élément et vérifier qu'il contient le texte spécifié
      cy.get(el).should("contain.text", txt);
    }
  
    /**
     * Méthode pour vérifier qu'un élément a la couleur spécifiée
     * @param {string} el - Le sélecteur CSS de l'élément
     * @param {string} couleur - La couleur attendue de l'élément (au format RGB)
     */
    verifiezCouleur(el, couleur) {
      // Utiliser Cypress pour obtenir l'élément et vérifier qu'il a la couleur spécifiée
      cy.get(el).should("have.css", "color", couleur);
    }
  
    /**
     * Méthode pour cliquer sur un bouton
     * @param {string} el - Le sélecteur CSS du bouton
     */
    btnClique(el) {
      // Utiliser Cypress pour obtenir l'élément du bouton et effectuer un clic
      cy.get(el).click();
    }

    /**
     * Méthode pour vérifier qu'un élément existe sur la page
     * @param {string} el - Le sélecteur CSS de l'élément
     */
  elementExit(el){
    // Utiliser Cypress pour vérifier si l'élément existe
    cy.get(el).should("exist");
}
  }
export default Entete