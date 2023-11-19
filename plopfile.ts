// plopfile.ts
import { NodePlopAPI } from 'plop'

export default function (plop: NodePlopAPI) {
	plop.setGenerator('component', {
		description: 'Gerador de componentes React',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Nome do componente:',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/components/{{name}}/index.tsx',
				templateFile: 'generate/ComponentTemplate.tsx',
			},
		],
	})

	plop.setGenerator('page', {
		description: 'Gerador de páginas React',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Nome da página:',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/pages/{{name}}/index.tsx',
				templateFile: 'generate/PageTemplate.tsx',
			},
		],
	})
	plop.setGenerator('query', {
		description: 'Gerador de useQuery',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Nome do hook:',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/query/{{name}}.tsx',
				templateFile: 'generate/useQuery.ts',
			},
		],
	})
}
