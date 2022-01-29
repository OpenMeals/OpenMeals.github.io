
import template from './Page.js';


function ingredientToHTML(ingredient){

    let { Name , Type , Amount } = ingredient;

    if(Type)
        Name = `${ Type } ${ Name }`;

    let content = `<b>${ Name }</b>`;

    if(Amount)
        content += `<br>\n${ Amount }`;

    return `<li>${ content }</li>\n`
}


export default function(recipe){

    console.log(recipe);

    const { Ingredients } = recipe;

    let html = '';

    const ingredients = Ingredients
        .map(ingredientToHTML)
        .join('<br>');

    html += `<ul>${ ingredients }</ul>`;

    return template('',html);
}
