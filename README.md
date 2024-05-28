# CEDT-Community Website

A website for the CEDT-Community, a community of students from the Chulalongkorn University Faculty of Engineering.
Computer Engineering And Digital Technology Department. The website is built using Next.js, NextUI, and Tailwind CSS.
goal of the website is to provide information about the community, its activities, and its members.
showcase the projects and activities of the community, and provide a platform for members to exchange ideas and collaborate on projects.

## Getting Started (Development)
- Clone the repository
<!-- TODO: Add Guidelines about envs later -->
- Install dependencies using `pnpm install` or `npm install` or `yarn install` (preferably use `pnpm`)
- Run the development server using `pnpm dev` or `npm run dev` or `yarn dev`

## Contribution Guidelines
### Code Of Conduct
- Respect the design system and conventions used in the project.
- Respect the design references and guidelines provided by the design team.
### Contributing
#### Pull Requests
- Fork the repository and create a new branch for your feature or bug fix (Direct commits to the main branch will be rejected).
- If testing branch is available, PR to that branch (maintainers will merge it to the main branch after testing).
- Make sure to follow the coding style and conventions used in the project.
- Make sure to test your code before creating a pull request (ensure it Builds and Runs without errors).
- Create a pull request with a clear description of the changes you made.
- Make sure to follow the commit message guidelines.
#### Issues
- If you find a bug or have a feature request, create an issue in the repository.
- Make sure to provide a clear description of the issue or feature request.
- Make sure to provide steps to reproduce the bug or steps to implement the feature.
- If possible please provide references or examples to help the maintainers understand the issue or feature request.
### Commit Messages
- We're not strict with the message but please use conventional commits as much as possible. such as `feat: add new feature`, `fix: fix a bug`, `chore: update dependencies`, etc.
- Please use the present tense ("add feature" not "added feature") and use the imperative mood ("move cursor to..." not "moves cursor to...").
- DO NOT use emojis in commit messages 😱.
### Design System
The website uses the NextUI design system, which is a set of components and utilities built on top of Tailwind CSS.
#### Components
- Avoid reinventing the wheel, use the components and utilities provided by NextUI as much as possible.
- If you need to create a new component, make sure it's not already available in NextUI.
#### Theme and Colour Scheme
- Always use the theme and colour scheme provided by NextUI.
- If custom colours are needed, add them to the `tailwind.config.js` file. such as `primary`, `secondary`, `accent`, etc.
- Avoid using custom colours in components, use the theme colours as much as possible. since reusing the theme colours makes the website more consistent and easier to maintain.

## Resource & Technologies Used
### Design
- [Our Figma Design by @Gunsua](https://www.figma.com/file/sWz4sWAIyFydHSnXQ02Ebp/cedt.community?type=design&node-id=0%3A1&mode=design&t=WBxCIIDkfzbPfiN1-1)
- (If you want to contribute to the design please contact the @HRNPH for design file access)
### Development
- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [Prisma (not yet implemented)](https://www.prisma.io/)
- [pnpm (package manager)](https://pnpm.io/)
### Database
- [PostgreSQL (not yet implemented)](https://www.postgresql.org/)
### API Architecture
- RESTful API
- CRUD Operations
### Testing
<!-- we Only Do End2End testing since it's faster to write -->
- [Playwright (not yet implemented)](https://playwright.dev/) 
### Monitoring
- [Sentry (not yet implemented)](https://sentry.io/)
- [New Relic (Log Drain) (not yet implemented)](https://newrelic.com/)
### CI/CD
- [Coolify](https://coolify.io/)
- [Docker](https://www.docker.com/)
- [GitHub Actions](https://github.com/features/actions)

## License
Licensed under the [MIT license](https://github.com/nextui-org/next-app-template/blob/main/LICENSE).

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://api-development.co"><img src="https://avatars.githubusercontent.com/u/48971612?v=4?s=100" width="100px;" alt="Pinsita(Kunsue)"/><br /><sub><b>Pinsita(Kunsue)</b></sub></a><br /><a href="#design-Gunsua" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/hrnph"><img src="https://avatars.githubusercontent.com/u/51855316?v=4?s=100" width="100px;" alt="Hirunkul Phimsiri(Guide)"/><br /><sub><b>Hirunkul Phimsiri(Guide)</b></sub></a><br /><a href="#code-hrnph" title="Code">💻</a> <a href="#maintenance-hrnph" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/esthxrs"><img src="https://avatars.githubusercontent.com/u/143799250?v=4?s=100" width="100px;" alt="esthxrs"/><br /><sub><b>esthxrs</b></sub></a><br /><a href="#code-esthxrs" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->