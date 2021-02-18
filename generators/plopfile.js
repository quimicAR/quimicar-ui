module.exports = function (plop) {
  // create your generators here
  plop.setGenerator('component', {
    description: 'this is a skeleton plopfile',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nome do componente:'
      }
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{lowerCase name}}.component.tsx',
        templateFile: 'templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{lowerCase name}}.spec.tsx',
        templateFile: 'templates/spec.tsx.hbs'
      },
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{lowerCase name}}.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{lowerCase name}}.styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      }
    ] // array of actions
  })
}
