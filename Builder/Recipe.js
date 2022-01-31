
import template from './Page.js';

function tagToHTML(tag){
    return `<div>${ tag }</div>`;
}

function ingredientToHTML(ingredient){

    let { Name , Type , Amount } = ingredient;

    if(Type)
        Name = `${ Type } ${ Name }`;

    let content = `<b>${ Name }</b>`;

    if(Amount)
        content += `<br>\n${ Amount }`;

    return `<li>${ content }</li>\n`;
}

function stepToHTML(step){

    const { Type } = step;

    let content = '';

    switch(Type){
    case 'Refine':

        const { Ingredient , Description } = step;

        if(Description){
            content += `
                <p>
                    <b>${ Ingredient }</b><br>
                    ${ Description }
                </p>
            `;
            break;
        }

        const { Method } = step;

        if(Method){
            switch(Method){
            case 'Dice':
                content += `<p>Dice the ${ Ingredient }</p>`;
                break
            }

            break;
        }


        break;
    case 'Preheat':

        break;
    case 'Heat':

        break;
    case 'Cook':

        break;
    case 'Store':

        break;
    case 'Combine':

        break;
    case 'Chill':

        break;
    }

    return `
        <li>
            <img
                alt = '${ Type }'
                src = 'https://github.com/OpenMeals/Icons/raw/main/Operations/${ Type }.png'
            >
            ${ content }
        </li>`;
}


export default function(recipe){

    console.log(recipe);

    const { Name , Ingredients , Steps , Tags } = recipe;

    const tags = Tags
        .map(tagToHTML)
        .join('');

    let html = `
        <h1>${ Name }</h1>
        <div class = 'tags'>${ tags }</div>
    `;

    const ingredients = Ingredients
        .map(ingredientToHTML)
        .join('<br>');

    html += `
        <h2>Ingredients:</h2>
        <ul>${ ingredients }</ul>
    `;

    const steps = Steps
        .map(stepToHTML)
        .join('<br>');

    html += `
        <h2>Steps:</h2>
        <ul>${ steps }</ul>
    `;

    return template('',html);
}
