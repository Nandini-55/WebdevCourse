**What is Tailwind?**
-

- " Rapidly build modern websites without ever leaving your HTML."

- "Utility-first" means the framework's main focus is on providing utility classes.

- It helps to write less in css file , just by adding classes to html elements.

**Benefits**
- 
-  Less confusion - to give styling using classes.
- Bundle size limited - if you are using two classes then your bundle will be imported of those two classes only , no extra unused classes.

**Installation**
- 
- Link - https://tailwindcss.com/docs/installation
- Step 1 - npm install tailwindcss ```@tailwindcss/postcss postcss```
- Step 2 - ```npm i vite```
- Step 3 - create - postcss.config.mjs and add ```export default {
  plugins: {
    "@tailwindcss/postcss": {},
  }
}```
- Step 4 - add ```@import "tailwindcss";``` in css file. 
- Step 5 - add ```"scripts": {
    "start": "vite"
  }``` in package.json.
- Step 5 - link css in html.
- Step 6 - run ```npm run start```

**Key Points**:
- Tailwind refreshes all stylings in elements. (All elements will be appear similar before adding stylings.Even if it is h1 tag or h6 tag , they will appear same.)

- In inspect -> sources ->style.css - you will see many lines of css (default tailwind css)even if the style sheet is empty due to "@import "tailwindcss";". At the end of the file you can the classes you have used in your html.

- for custom styling use classes like - ``` class= " h-[20px]"``` - this will set the height to 20px , but it will create a new class will added into bundle(data send to browser) and increase bundle size.