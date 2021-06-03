# Bánh Mì

A Web UI Kit that implements Be's Design System. Built on top of [Moai](https://github.com/thien-do/moai).

-   [Usage](#usage)
-   [Contributing](#contributing)

## Usage

### Installation

After initialized your project (we recommend [Next.js](https://nextjs.org/) and [create-react-app](https://create-react-app.dev/)), install these dependencies:

```
npm install --save-exact @moai/core @banhmi/core @banhmi/icon
```

Note that:

-   "save-exact" is highly recommended if you are building apps.
-   You don't need "@moai/icon" because "@banhmi/icon" replaces it completely.
-   You still need "@moai/core" because "@banhmi/core" is only a plugin.

And don't forget to have "light" or "dark" added to your html element!

### Initialization

Import Banhmi's CSS and init function after Moai:

```jsx
// Init Moai as usual
import "@moai/core/dist/font/remote.css";
import "@moai/core/dist/bundle.css";

// Init Banhmi after Moai
import "@banhmi/core/dist/bundle.css";
import "@banhmi/core";
```

These lines should be at the very beginning of your project, such as in Next.js's [\_app](https://nextjs.org/docs/advanced-features/custom-app) file or where you do `ReactDOM.render`.

### Use cases

Use Moai components the same way:

```jsx
import { Button } from "@moai/core";

const Foo = (): JSX.Element => (
	<Button onClick={() => alert("Hello")}>Say Hello</Button>
);
```

Use Banhmi's icons with Moai components:

```jsx
import { Button } from "@moai/core";
import { Add } from "@banhmi/icon/outline";

const Foo = (): JSX.Element => <Button icon={Add}>Add Project</Button>;
```

Use additional Banhmi's components:

```jsx
import { Sidebar } from "@banhmi/core";

const Foo = (): JSX.Element => <Sidebar tree={/* ... */} />;
```

## Contributing

### Packages

-   `core` are the primary works to apply Be's design system to Moai components.
    -   `npm run start` to run Storybook for local development
    -   `npm run release` to build and release
-   `icon` contains Be's iconsets. It uses the same setup as the [@moai/icon](https://github.com/thien-do/moai/tree/master/icon) project.
    -   `npm run release` to build and release
-   `site` is the Next.js app of https://banhmi.be.com.vn
    -   `npm run dev` for local development
    -   Deploy via Be's usual devops flow
