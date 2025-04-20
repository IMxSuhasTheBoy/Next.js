# **Next.js v15+ TW v4+**

**NextJS simplifies the process of building production-ready web applications with a focus on performance, scalability, and developer experience. It provides a powerful set of features and tools that make it easy to create high-quality web applications quickly and efficiently.**

## Routing

      Automatically generates routes with file based routing system, without the need of any 3rd party library installations or configurations. This allows developers to create routes simply by creating files and folders in the `pages` directory, making it easy to manage and organize the application's structure.

_URLs you can access in the browser are determied by how the files and folders are organized._

1. all routes must be in the app directory
2. route files be named with the `.js` `.ts` `.jsx` or `.tsx` extension
3. each folder represents a route segment, and the folder name becomes part of the URL path
4. nested subfolders can create nested routes, allowing for a hierarchical structure for simple usecases
5. dynamic routes can be created using square brackets in the file name (e.g., `[id].js`), enabling the creation of flexible URL patterns that adapt to dynamic data, such as user IDs or product slugs, The dynamic segments are accessible in the page component through the `params` property (Promise), enabling seamless integration with dynamic content.
6. nested dynamic routes allowing for a more complex dynamic URL structure.
7. catch-all routes can be created using double square brackets (e.g., `[[...slug]].js`), allowing for more complex URL structures and the ability to handle multiple segments in a single route.

## API routes

      Backend APIs within the same nextjs application allowing seamless integration with frontend react components of the application.

## Rendering

      Both the Server side rendering and Client side rendering approach of rendering web pages are supported for improved performance & seo optimization.

## Data fetching

      With the built in async await support in react components, fetching data efficiently from an api is a breeze.

## Flexible styling approaches

      Suppots CSS Modules, SASS, SCSS, PostCSS, Tailwind CSS etc. This allows developers to choose the styling approach that best fits their needs and preferences.

## Optimization

      Includes built-in optimizations for images, fonts, and scritpts, which can significantly improve the performance of core web vitals like load time and performance metrics for overall better user experience.

## Dev and prod build system

      The built in dev and prod build system allows for easy development and deployment of applications, with features like hot reloading, error reporting, and performance monitoring, Eleminating the need for complex build systems or configurations.
