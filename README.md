## Assingment Text

### useEffect demonstration in different scenarios and its test cases using cypress

There are two repositories - my-app and boilerplate

boilerplate contains the buggy code means there are some questions that needs to be solved.
The question are -

```
Limit the useEffect from calling multiple times, means restrict it to be called only once i.e., when the component is mounted
```
```
modify the useEffect such that it is called only when the count state changes
```
```
modify the useEffect such that 'Interval cleared' is printed only when the component is unmounted
```

These questions are also mentioned as comments in the Counter.jsx inside the Component folder.
Path to the file -

```
/src/Component/Counter.jsx
```

#### How to run and test

Open a terminal and install the requirements using npm install and run the server
```
cd boilerplate
npm install
npm start
```

Now run the cypress to test the code (Open a new terminal and execute these commands there)
```
cd boilerplate
npm run cypress
```
Then in the cypress window go to the component testing and click Counter.cy.jsx