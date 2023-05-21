# VIDEO 04 - Tsconfig y Eslint para Typescript

En este vídeo hemos configurado un poco más las reglas de Eslint y el fichero tsconfig.

Tras el vídeo nuestro fichero tsconfig.json ha quedado así (el resto de propiedades están comentadas):

```tsx
{
  "compilerOptions": {
    "target": "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
    "module": "commonjs" /* Specify what module code is generated. */,
    "sourceMap": true /* Create source map files for emitted JavaScript files. */,
    "outDir": "./dist" /* Specify an output folder for all emitted files. */,
    "removeComments": true /* Disable emitting comments. */,
    "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */,
    "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,
    "strict": true /* Enable all strict type-checking options. */,
    "skipLibCheck": true /* Skip type checking all .d.ts files. */
  },
  "include": ["src/*.ts"],
  "exclude": ["**/*.spec.ts"]
}
```

Nuestro fichero eslintrc.js ha quedado así:

```tsx
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: "standard-with-typescript",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    project: ["./tsconfig.json"],
  },
  rules: {
    "semi": "off",
    "space-before-function-paren": "off",
    "quotes": [2, "double"],
    "quote-props": [2, "consistent"],
    "multiline-ternary": "off",
    "comma-dangle": "off",
    "@typescript-eslint/quotes": [2, "double"],
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/space-before-function-paren": "off",
  },
};
```

Para terminar nuestros scripts en el package.json han quedado así:

```tsx
"scripts": {
    "transpile": "tsc",
    "lint": "eslint ./src",
    "lint:fix": "eslint --fix ./src",
    "start": "node ./dist/index.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "prepare": "husky install"
},
```
