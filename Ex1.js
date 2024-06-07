document.addEventListener('DOMContentLoaded', (event) => {
    function gestioColors() {
        const colors = ['verd', 'vermell', 'groc', 'blau', 'negre', 'blanc'];

        function mostraResultat(frase, resultat) {
            const div = document.getElementById('resultat');
            const p = document.createElement('p');
            p.innerHTML = `<span class="bold">${frase}</span> ${resultat}`;
            div.appendChild(p);
        }

        const totsMenorsQueMarro = colors.every(color => color < 'marró');
        mostraResultat("Tots els colors són menors que 'marró':", totsMenorsQueMarro);

        const colorsMenorsQueMarro = colors.filter(color => color < 'marró');
        mostraResultat("Colors menors que 'marró':", colorsMenorsQueMarro.join(', '));

        const darrersDosColors = colors.slice(-2);
        mostraResultat("Darrers 2 colors:", darrersDosColors.join(', '));

        colors.push('turquesa');
        mostraResultat("Colors després d'afegir 'turquesa':", colors.join(', '));

        const indexVerd = colors.indexOf('verd');
        if (indexVerd !== -1) {
            colors.splice(indexVerd, 1);
        }
        mostraResultat("Colors després d'eliminar 'verd':", colors.join(', '));
    }

    gestioColors();
});
