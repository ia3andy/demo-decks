
**Let's get started**

1. Create project on code.quarkus.io with Renarde and QWB
2. Start with quarkus dev
3. Show result
4. Remove web-bundler.html page
5. Remove nav
6. Add {#bundle /}
7. Show index.html in dev console (contains `<script>`)

At this point you have a MVC framework, scss, js with live-reload and you can easilly add other web libraries with mvnpm.

**Let's make it look nice**

1. Add bootstrap and enable auto-import (explain that it's using the package.json info to import the right file, show generated index.js)
  
    ```
    quarkus.web-bundler.dependencies.auto-import=styles
    ```

2. Refresh to show style in the browser
3. Find a bootstrap Todo style on the web: https://mdbootstrap.com/docs/standard/extended/to-do-list/#section-4
4. Make it work with our todos from the backend and add scss completed style
5. Style the nav

**Let's make it feel nice** 

1. Add htmx in the dependencies (show generated index.js)
3. Add the csrf headers for security:

    ```html
    hx-headers='{"{inject:csrf.headerName}":"{inject:csrf.token}"}'
    ```
3. Add a button with a hx-get to load html in a specific div
5. Add hx-post to use htmx in the todo, show the result
6. Change the target
7. Add `isHtmxRequest()` and fragment to change the output when htmx
8. add an `id` to the Todo, change to boolean, add `findById()`
9. add `done()` put endpoint in controller
10. add `hx-put` in the template

We now have the beginning of a htmx app with a nice look and feel, it can easilly be deployed to a cluster.

- mention `hyperscript` which allows to add really specific animations and behaviour without javascript
- we will improve the htmx support in the near future
	- htmx annotation driven routing
	- tools for error handling