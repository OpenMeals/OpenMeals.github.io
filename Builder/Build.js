
import { emptyDir } from 'FileSystem';
import { parse } from 'YAML';

import recipeTemplate from './Recipe.js';

const { readTextFile , writeTextFile } = Deno;


const Path_Recipes = './Recipes';


async function readYAML(path){
    const content = await readTextFile(path);
    return parse(content);
}

async function readRecipes(){
    return await readYAML(`${ Path_Recipes }/Recipes.yaml`);
}

async function createRecipe(recipe){

    const { path , name } = recipe;

    const data = await readYAML(`${ Path_Recipes }/${ path }`);
    const html = recipeTemplate(data);

    writeTextFile(`./docs/Recipes/${ name }.html`,html);
}


emptyDir('./docs/Recipes');

const recipes = await readRecipes();

for(const recipe of recipes)
    await createRecipe(recipe);
