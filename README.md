Angular 2 - Demo App
====================

TypeScript to JavaScript
---



Compile TypeScript files in `src/` to JavaScript in `app/` folder.

```
tsc --watch -m commonjs -t es5 --emitDecoratorMetadata src/*.ts --outDir app/ 2>&1 
```

Run the server
---

```
http-server
```

View in the Browser at [http://localhost:8080](http://localhost:8080)
