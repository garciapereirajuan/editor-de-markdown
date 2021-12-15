import { createStore } from "redux";

const text = `# Marked y Markdown\n\n## Entendiendo Markdown\n\n_Escriba en el editor y vea el resultado en vivo en esta sección_.\n\n[Markdown](https://daringfireball.net/projects/markdown/) le permite escribir usando un formato de texto plano fácil de leer y escribir, y luego convertirlo a XHTML (o HTML) estructuralmente válido.\n\n[Marked](https://marked.js.org/), por otra parte, es la herramienta que nos permite convertir Markdown en HTML.\nAquí algunos ejemplos: \n\n### Listas desordenadas\n- Elementos desordenados\n- Establece las etiquetas HTML \`<ul> </ul>\`\n- Y cada elemento de esta lista es un elemento \`<li>\`\n\n### Listas ordenadas\n1. Elementos ordenados por números\n2. Establece las etiquetas HTML \`<ol> </ol>\`\n3. También los elementos de esta listas son \`<li>\`\n\n### Representación de código en línea\n\nPodemos representar código haciendo uso de comillas invertidas \` \`\` \`.\n\nPara ilustrar el código en línea encerramos el texto en una comilla invertira de apertura y otra de cierre.\n\n\`<p>Mi código en línea</p>\`\n\n### Representación de código en bloque\nPara representar un bloque de código debemos usar tres comillas invertidas de apertura y tres comillas invertidas de cierre. \n\n\`\`\`\n\tconst MyComponent = () => {\n\n\t\treturn(\n\t\t<div> My Component </div>\n\t\t)\n\n\t}\n\`\`\`\n\n### Estilos de fuente\nPodemos darle un estilo bold a una palabra así: \`**bold**\` (**bold**)\nO podemos darle un estilo italic así: \`_italic_\` (_italic_)\n\n### Citas de bloque (Blockquote)\n> Podemos representar citas de bloque. \nLos **blockquotes** sirven para citar información externa, frases o párrafos.\n>\n>Y los agregamos utilizando el operador \`>\` seguido de el texto que vamos a ingresar.\n>\n>**Tabulación en blockquote:**\n>\n>Para representar tabulación en las citas de bloque utilizamos escribimos el operador dos veces seguidas.\n>>\`>>\`Texto que tendrá tabulación\n>\n>**Lista ordenada en blockquote:** \n> 1. Representando lista ordenada\n> 2. En el elemento blockquote\n>**Lista desordenada en blockquote:**\n> - Representando una lista desordenada\n> - Dentro del elemento blockquote\n\n### Enlaces (Links)\nPara agregar un link en markdown debemos usar esta sintaxis:\n\n\`[FreeCodeCamp](https://freecodecamp.org)\`\n\nY así tendremos un enlace a [FreeCodeCamp](https://freecodecamp.org)\n\n### Imagenes\nPara mostrar una imagen desde un link hacemos lo siguiente:\n\n\`![León](https://raw.githubusercontent.com/garciapereirajuan/Imagenes/master/leon.jpg)\`\n\nEs la misma sintaxis que usamos para los enlaces pero agregamos el signo \`!\` al comienzo para indicar que muestre la imagen que hay en el enlcace, y no sólo el link de la misma.\n\n![León](https://raw.githubusercontent.com/garciapereirajuan/Imagenes/master/leon.jpg)`;


const initialValue = {
    editorValue: text,
    sizeComplete: false,
    sizeEditor: 5, 
    sizePreview: 7,
    displayReverse: false,
    currentScreen: "preview"
}
                 
const reducer = (state = initialValue, action ) => {
    switch(action.type){
        case "SET_EDITOR_VALUE": 
        return {...state, editorValue: action.payload};
        case "SET_SIZE_COMPLETE":
        return {...state, sizeComplete: action.payload};
        case "SET_SIZE_EDITOR_AND_PREVIEW":
        return {...state, sizeEditor: action.valueSizeEditor, sizePreview: action.valueSizePreview};
        case "SET_DISPLAY_REVERSE":
        return {...state, displayReverse: action.payload};
        case "SET_CURRENT_SCREEN":
        return {...state, currentScreen: action.payload};
        default: return state;
    }
}

const store = createStore(reducer);

export default store;