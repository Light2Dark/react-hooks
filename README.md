This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
Huge thanks to [Theo](https://www.youtube.com/watch?v=PKy2lYEnhgs&ab_channel=Theo-T3Tools) and his cool team for providing a [boilerplate](https://init.tips/) for me yay! (eventhough Im not really utilizing Next here haha)

## Intro

This is a react-hooks website + tailwind css combo I worked on. I did not mean this to be instructional content but if you'd like to learn about
- #### React Hooks
- #### Typescript & React

check this out!

Visit the website at [Electro](https://electro-light2dark.vercel.app/)


Or if you're cloning this repo:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

If you wanna learn about these hooks, I've attached resources to each hook and the challenges for you which I did in this website:

- Typescript Reference: [Typescript React cheatsheet](https://github.com/typescript-cheatsheets/react)

### [useState Hook](https://reactjs.org/docs/hooks-state.html)
- Challenge: Build a counter that you can increment and decrement with buttons

### [useReducer Hook](https://dmitripavlutin.com/react-usereducer/)
- Challenge: Build a stopwatch with "Start", "Stop" and "Reset" buttons

### [useEffect Hook](https://www.youtube.com/watch?v=Yl0hbt_kK_I&t=708s&ab_channel=LogRocket)
- Challenge: Fetch some data from some website somewhere (axios is friend) and display it. Have a button which changes the data / renews it.

### [useRef Hook](https://www.w3schools.com/react/react_useref.asp)
- Challenge: 1) Have a counter for the number of times you click a button OR 2) Enter a name and click a button which puts that name in another div somewhere.

### [useContext Hook](https://medium.com/@jrwebdev/react-hooks-in-typescript-88fce7001d0d)
- Challenge: Build a light/dark mode toggle using useContext to get values down various components

### [useMemo Hook](https://reactjs.org/docs/hooks-reference.html#usememo)
- useMemo Hook is to optimize performance for existing functions so I have not used it but it's very simple to learn.
- a memoized function / calculation means that the result of function is cached so that repeated function calls are not expensive in performance

### [useCallback Hook](https://reactjs.org/docs/hooks-reference.html#usecallback)
- useCallback hooks returns a memoized callback.
