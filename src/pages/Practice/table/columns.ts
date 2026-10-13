import type { TableColumnsType } from 'antd';

export interface TrainingContent {
  key: string;
  phase: string;
  topic: string;
  source: string;
  task: string;
  type: string;
  evidence: string;
}

export const dataSource: TrainingContent[] = [
  {
    "key": "1",
    "phase": "Day 0 - Setup",
    "topic": "Running JavaScript",
    "source": "Main Guide 0.2",
    "task": "Install Node.js LTS and confirm it with node --version",
    "type": "Setup",
    "evidence": "Terminal shows a Node version number"
  },
  {
    "key": "2",
    "phase": "Day 0 - Setup",
    "topic": "Running JavaScript",
    "source": "Main Guide 0.2",
    "task": "Predict, then run console.log('10' + 5) in the browser console",
    "type": "Practice",
    "evidence": "Written prediction plus actual result ('105'), with a one-line reason"
  },
  {
    "key": "3",
    "phase": "Day 0 - Setup",
    "topic": "Running JavaScript",
    "source": "Main Guide 0.2",
    "task": "Create practice.js and run it with node practice.js",
    "type": "Practice",
    "evidence": "Script output visible in terminal"
  },
  {
    "key": "4",
    "phase": "Day 0 - Setup",
    "topic": "React project",
    "source": "Main Guide 0.3",
    "task": "Create a Vite React project (npm create vite, npm install, npm run dev) and open it on localhost",
    "type": "Setup",
    "evidence": "App running at http\\://localhost:5173"
  },
  {
    "key": "5",
    "phase": "Day 0 - Setup",
    "topic": "React project",
    "source": "Main Guide 0.3",
    "task": "Edit text in App.jsx and confirm the browser hot-reloads without manual refresh",
    "type": "Practice",
    "evidence": "Change visible in browser after save"
  },
  {
    "key": "6",
    "phase": "Day 0 - Setup",
    "topic": "React project",
    "source": "Main Guide 0.3",
    "task": "Delete node_modules and restore the project with npm install",
    "type": "Practice",
    "evidence": "Project runs again; can explain what npm install does"
  },
  {
    "key": "7",
    "phase": "Day 0 - Setup",
    "topic": "JS syntax",
    "source": "Main Guide 0.4",
    "task": "Write 3 console lines: a name variable, an age variable, and a console.log printing both (predict output first)",
    "type": "Practice",
    "evidence": "Can explain semicolons, curly braces, comments, camelCase and case-sensitivity"
  },
  {
    "key": "8",
    "phase": "Day 0 - Setup",
    "topic": "Arrow functions",
    "source": "Main Guide 0.5",
    "task": "Write isEven as an arrow function, rewrite square() as a one-line arrow, and explain why x => { x * 2 } returns undefined",
    "type": "Practice",
    "evidence": "isEven(4)=true, isEven(7)=false; correct verbal explanation"
  },
  {
    "key": "9",
    "phase": "Day 0 - Setup",
    "topic": "Template literals",
    "source": "Main Guide 0.6",
    "task": "Build 'Sara has 3 items in cart' with a template literal from two variables",
    "type": "Practice",
    "evidence": "Correct output; can explain backticks vs quotes"
  },
  {
    "key": "10",
    "phase": "Day 0 - Setup",
    "topic": "Git basics",
    "source": "Main Guide 0.7",
    "task": "git init a folder, make two commits with clear messages, view them with git log",
    "type": "Practice",
    "evidence": "git log shows two commits"
  },
  {
    "key": "11",
    "phase": "Day 0 - Setup",
    "topic": "Git basics",
    "source": "Main Guide 0.7",
    "task": "Create a branch, commit a change, merge it back into main",
    "type": "Practice",
    "evidence": "git log on main includes the branch commit"
  },
  {
    "key": "12",
    "phase": "Day 0 - Setup",
    "topic": "Git basics",
    "source": "Main Guide 0.7",
    "task": "Push the Vite project to the company Git remote",
    "type": "Deliverable",
    "evidence": "Repo link shared with reviewer"
  },
  {
    "key": "13",
    "phase": "Day 0 - Setup",
    "topic": "Checkpoint",
    "source": "Main Guide Day 0",
    "task": "Self-verify the Day 0 'Ready to move on' checklist (project runs, syntax, arrow fn + template literal from memory, branch/merge without lookup)",
    "type": "Checkpoint",
    "evidence": "All 4 items confirmed with reviewer"
  },
  {
    "key": "14",
    "phase": "Level 0 - Foundation",
    "topic": "Types and variables",
    "source": "Main Guide 1",
    "task": "Predict and test Number() for priceText values '', 'abc', '0', '-5', '250'",
    "type": "Practice",
    "evidence": "Prediction table vs actual results"
  },
  {
    "key": "15",
    "phase": "Level 0 - Foundation",
    "topic": "Types and variables",
    "source": "Main Guide 1",
    "task": "Write validatePrice(priceText) returning a number or an error message",
    "type": "Build",
    "evidence": "Function rejects '', 'abc', '0', '-5' and accepts '250'"
  },
  {
    "key": "16",
    "phase": "Level 0 - Foundation",
    "topic": "Types and variables",
    "source": "Main Guide 1",
    "task": "Explain empty string vs null vs undefined and pick a team convention for 'not selected yet'",
    "type": "Explain",
    "evidence": "Short written note"
  },
  {
    "key": "17",
    "phase": "Level 0 - Foundation",
    "topic": "Conditions",
    "source": "Main Guide 2",
    "task": "Extend canAddToCart with isArchived and write an isLowStock condition (stock > 0 and < 5)",
    "type": "Practice",
    "evidence": "Both conditions written and tested"
  },
  {
    "key": "18",
    "phase": "Level 0 - Foundation",
    "topic": "Conditions",
    "source": "Main Guide 2",
    "task": "List all falsy values and explain why a disabled button is not a security rule",
    "type": "Explain",
    "evidence": "Correct list (false, 0, '', null, undefined, NaN) and explanation"
  },
  {
    "key": "19",
    "phase": "Level 0 - Foundation",
    "topic": "Functions",
    "source": "Main Guide 3",
    "task": "Write discountFor(total) (10% only above Rs. 5,000) and test 0, 5000, 5001, 10000",
    "type": "Build",
    "evidence": "Outputs 0, 0, 500.1, 1000"
  },
  {
    "key": "20",
    "phase": "Level 0 - Foundation",
    "topic": "Functions",
    "source": "Main Guide 3",
    "task": "Explain parameter vs argument, pure functions, and when a function should throw",
    "type": "Explain",
    "evidence": "Verbal or written explanation using lineTotal"
  },
  {
    "key": "21",
    "phase": "Level 0 - Foundation",
    "topic": "Arrays and objects",
    "source": "Main Guide 4",
    "task": "Use filter/map/reduce on a product array; add a category field and filter in-stock drinks",
    "type": "Practice",
    "evidence": "Correct labels, total and drinks list"
  },
  {
    "key": "22",
    "phase": "Level 0 - Foundation",
    "topic": "Arrays and objects",
    "source": "Main Guide 4",
    "task": "Write affordableProducts(products, limit), test an empty result, and use find() for a product ID",
    "type": "Build",
    "evidence": "Returns [] without errors; find returns undefined when missing"
  },
  {
    "key": "23",
    "phase": "Level 0 - Foundation",
    "topic": "Scope",
    "source": "Main Guide 5",
    "task": "Write examples of global, function, block and module scope",
    "type": "Practice",
    "evidence": "Annotated code sample"
  },
  {
    "key": "24",
    "phase": "Level 0 - Foundation",
    "topic": "Loops",
    "source": "Supplement 4",
    "task": "Rewrite the cart-total loop with reduce and add a rule that skips quantity 0",
    "type": "Practice",
    "evidence": "Both versions return the same total"
  },
  {
    "key": "25",
    "phase": "Level 0 - Foundation",
    "topic": "Self-assessment",
    "source": "Main Guide Level 0",
    "task": "Run 10 snippets covering types, conditions, functions, arrays and scope; predict each first",
    "type": "Assessment",
    "evidence": "At least 8/10 predicted correctly"
  },
  {
    "key": "26",
    "phase": "Level 0 - Foundation",
    "topic": "Self-assessment",
    "source": "Main Guide Level 0",
    "task": "Write a short explanation of user action -> data change -> state -> render",
    "type": "Explain",
    "evidence": "One paragraph"
  },
  {
    "key": "27",
    "phase": "Level 0 - Foundation",
    "topic": "Checkpoint",
    "source": "Main Guide Level 0",
    "task": "Answer Level 0 scenario questions (250450 total, block-scoped variable, shared global total)",
    "type": "Checkpoint",
    "evidence": "Answers reviewed and correct"
  },
  {
    "key": "28",
    "phase": "Week 1 - JS Execution",
    "topic": "Hoisting / TDZ",
    "source": "Main Guide 6",
    "task": "Create 3 hoisting/TDZ/const output snippets and write the reason for each",
    "type": "Practice",
    "evidence": "Correct predictions with reasons"
  },
  {
    "key": "29",
    "phase": "Week 1 - JS Execution",
    "topic": "Hoisting / TDZ",
    "source": "Main Guide 6",
    "task": "Convert a var setTimeout loop to let and explain 3 3 3 vs 0 1 2",
    "type": "Practice",
    "evidence": "Working code and explanation"
  },
  {
    "key": "30",
    "phase": "Week 1 - JS Execution",
    "topic": "Call stack",
    "source": "Main Guide 7",
    "task": "Set a breakpoint in validateCustomer, inspect data, and record the call stack",
    "type": "Practice",
    "evidence": "Screenshot or notes of call stack"
  },
  {
    "key": "31",
    "phase": "Week 1 - JS Execution",
    "topic": "Call stack",
    "source": "Main Guide 7",
    "task": "Wrap submitCustomer in try/catch and show a friendly message",
    "type": "Build",
    "evidence": "Friendly message shown; can explain why saveCustomer never ran"
  },
  {
    "key": "32",
    "phase": "Week 1 - JS Execution",
    "topic": "Closures",
    "source": "Main Guide 8",
    "task": "Create addCoffee (ID 9) with createAddHandler and alternate calls with addTea",
    "type": "Practice",
    "evidence": "Independent click counters shown"
  },
  {
    "key": "33",
    "phase": "Week 1 - JS Execution",
    "topic": "Closures",
    "source": "Main Guide 8",
    "task": "Build a private counter with increase, decrease, reset and get",
    "type": "Build",
    "evidence": "Counter works; can explain closure in own words"
  },
  {
    "key": "34",
    "phase": "Week 1 - JS Execution",
    "topic": "Closures",
    "source": "Main Guide 8",
    "task": "Explain onClick={save} vs onClick={save()} and how stale closures happen in React",
    "type": "Explain",
    "evidence": "Correct explanation"
  },
  {
    "key": "35",
    "phase": "Week 1 - JS Execution",
    "topic": "Event loop",
    "source": "Main Guide 9",
    "task": "Write 3 snippets mixing console.log, Promise.resolve and setTimeout; explain each using stack, microtask and task",
    "type": "Practice",
    "evidence": "Correct order and explanation"
  },
  {
    "key": "36",
    "phase": "Week 1 - JS Execution",
    "topic": "Fetch and errors",
    "source": "Main Guide 10",
    "task": "Write loadProducts with response.ok checks; map 404 to 'Product not found' and 500 to 'Service unavailable'",
    "type": "Build",
    "evidence": "Function throws the right message per status"
  },
  {
    "key": "37",
    "phase": "Week 1 - JS Execution",
    "topic": "Fetch and errors",
    "source": "Main Guide 10",
    "task": "Force a failed request and match the Network entry to the Console error",
    "type": "Practice",
    "evidence": "Screenshot of Network + Console"
  },
  {
    "key": "38",
    "phase": "Week 1 - JS Execution",
    "topic": "Web app flow",
    "source": "Supplement 1",
    "task": "Draw the full request path for product search (browser -> API -> server -> DB -> UI)",
    "type": "Explain",
    "evidence": "Diagram"
  },
  {
    "key": "39",
    "phase": "Week 1 - JS Execution",
    "topic": "Web app flow",
    "source": "Supplement 1",
    "task": "Write one possible failure and one debugging step for each layer: browser, API, server, database",
    "type": "Explain",
    "evidence": "4-row table"
  },
  {
    "key": "40",
    "phase": "Week 1 - JS Execution",
    "topic": "Client vs server",
    "source": "Supplement 2",
    "task": "List 5 client-owned tasks and 5 server-owned tasks; explain UX vs security validation",
    "type": "Explain",
    "evidence": "Written list and explanation"
  },
  {
    "key": "41",
    "phase": "Week 1 - JS Execution",
    "topic": "Browser DevTools",
    "source": "Supplement 3",
    "task": "Inspect one request, one DOM node and one storage value in a real app",
    "type": "Practice",
    "evidence": "Notes/screenshots of each panel"
  },
  {
    "key": "42",
    "phase": "Week 1 - JS Execution",
    "topic": "Browser DevTools",
    "source": "Supplement 3",
    "task": "Set a breakpoint inside a click handler and record the call stack",
    "type": "Practice",
    "evidence": "Call stack notes"
  },
  {
    "key": "43",
    "phase": "Week 1 - JS Execution",
    "topic": "DOM and events",
    "source": "Supplement 5",
    "task": "Build event delegation with Edit and Delete buttons distinguished by data-action",
    "type": "Build",
    "evidence": "One listener handles both actions"
  },
  {
    "key": "44",
    "phase": "Week 1 - JS Execution",
    "topic": "DOM and events",
    "source": "Supplement 5",
    "task": "Explain event bubbling and how submit differs from click",
    "type": "Explain",
    "evidence": "Correct explanation incl. preventDefault"
  },
  {
    "key": "45",
    "phase": "Week 1 - JS Execution",
    "topic": "Self-assessment",
    "source": "Main Guide Week 1",
    "task": "Complete 10 output snippets on hoisting, TDZ, closure, Promise and timers",
    "type": "Assessment",
    "evidence": "At least 8/10 correct with reasons"
  },
  {
    "key": "46",
    "phase": "Week 1 - JS Execution",
    "topic": "Self-assessment",
    "source": "Main Guide Week 1",
    "task": "Fix a var timer loop twice: once with let and once with a closure factory",
    "type": "Assessment",
    "evidence": "Both fixes print 0 1 2"
  },
  {
    "key": "47",
    "phase": "Week 1 - JS Execution",
    "topic": "Submission",
    "source": "Training Plan",
    "task": "Submit Week 1 work and answer Week 1 + Supplement Section 1 scenario questions",
    "type": "Submission",
    "evidence": "Reviewer sign-off"
  },
  {
    "key": "48",
    "phase": "Week 2 - React Basics",
    "topic": "Modules",
    "source": "Main Guide 11",
    "task": "Create api/customers.js with getCustomers and createCustomer",
    "type": "Build",
    "evidence": "Both functions check response.ok"
  },
  {
    "key": "49",
    "phase": "Week 2 - React Basics",
    "topic": "Spread / immutability",
    "source": "Main Guide 11",
    "task": "Update a nested details object without mutating the original",
    "type": "Practice",
    "evidence": "Original object unchanged after update"
  },
  {
    "key": "50",
    "phase": "Week 2 - React Basics",
    "topic": "Components and lists",
    "source": "Main Guide 12",
    "task": "Build ProductCard + ProductList with stable keys, an onSale badge and an empty state",
    "type": "Build",
    "evidence": "List renders by product.id; empty state shows for []"
  },
  {
    "key": "51",
    "phase": "Week 2 - React Basics",
    "topic": "State and derived values",
    "source": "Main Guide 13",
    "task": "Build ProductsPage with search, category and in-stock toggle; visibleProducts is derived, not stored",
    "type": "Build",
    "evidence": "Filters combine correctly; no duplicated state"
  },
  {
    "key": "52",
    "phase": "Week 2 - React Basics",
    "topic": "State and derived values",
    "source": "Main Guide 13",
    "task": "Write test cases for empty query, no results, category filter and combined filter",
    "type": "Practice",
    "evidence": "4 cases listed with expected results"
  },
  {
    "key": "53",
    "phase": "Week 2 - React Basics",
    "topic": "Controlled forms",
    "source": "Main Guide 14",
    "task": "Build controlled ProductForm with name, price and category validation",
    "type": "Build",
    "evidence": "Fields clear only after a successful submit"
  },
  {
    "key": "54",
    "phase": "Week 2 - React Basics",
    "topic": "Controlled forms",
    "source": "Main Guide 14",
    "task": "Test empty name, whitespace, zero price, negative price, letters and a valid price",
    "type": "Practice",
    "evidence": "All 6 cases behave as expected"
  },
  {
    "key": "55",
    "phase": "Week 2 - React Basics",
    "topic": "Data flow",
    "source": "Main Guide 13",
    "task": "Draw the one-way data flow (props down, callbacks up) for your own product page",
    "type": "Explain",
    "evidence": "Diagram"
  },
  {
    "key": "56",
    "phase": "Week 2 - React Basics",
    "topic": "Component lifecycle",
    "source": "Supplement 6",
    "task": "Build a WindowWidth component that subscribes to resize and cleans up; explain mount/update/unmount",
    "type": "Build",
    "evidence": "Listener removed on unmount"
  },
  {
    "key": "57",
    "phase": "Week 2 - React Basics",
    "topic": "Routing",
    "source": "Supplement 7",
    "task": "Define routes for product list, detail, cart and checkout; test each via in-app navigation AND direct refresh",
    "type": "Build",
    "evidence": "Each route works both ways (or the refresh gap is explained)"
  },
  {
    "key": "58",
    "phase": "Week 2 - React Basics",
    "topic": "State ownership",
    "source": "Supplement 8",
    "task": "Classify 10 values in your app as local, shared, server or derived; remove one duplicated derived value",
    "type": "Practice",
    "evidence": "Classification table + code change"
  },
  {
    "key": "59",
    "phase": "Week 2 - React Basics",
    "topic": "Submission",
    "source": "Training Plan",
    "task": "Submit Week 2 work and explain props vs state for every component written",
    "type": "Submission",
    "evidence": "Reviewer sign-off"
  },
  {
    "key": "60",
    "phase": "Week 3 - APIs / Redux / TS",
    "topic": "HTTP and API contracts",
    "source": "Main Guide 15",
    "task": "Write GET, PATCH and DELETE examples for customer ID 7 with expected status codes",
    "type": "Practice",
    "evidence": "Contracts written (200, 200, 204)"
  },
  {
    "key": "61",
    "phase": "Week 3 - APIs / Redux / TS",
    "topic": "HTTP and API contracts",
    "source": "Main Guide 15",
    "task": "Inspect a real request: method, URL, headers, body, status and response",
    "type": "Practice",
    "evidence": "Notes/screenshot from Network"
  },
  {
    "key": "62",
    "phase": "Week 3 - APIs / Redux / TS",
    "topic": "useEffect and cleanup",
    "source": "Main Guide 16",
    "task": "Build customer search with useEffect + AbortController; throttle Network and type fast",
    "type": "Build",
    "evidence": "Final list always matches the latest query"
  },
  {
    "key": "63",
    "phase": "Week 3 - APIs / Redux / TS",
    "topic": "UI states",
    "source": "Main Guide 17",
    "task": "Implement loading, empty, error (with retry) and success; force each state once",
    "type": "Build",
    "evidence": "All 4 states demonstrated"
  },
  {
    "key": "64",
    "phase": "Week 3 - APIs / Redux / TS",
    "topic": "UI states",
    "source": "Main Guide 17",
    "task": "Build a dashboard where one failing panel does not block the others",
    "type": "Build",
    "evidence": "Only the failed panel shows retry"
  },
  {
    "key": "65",
    "phase": "Week 3 - APIs / Redux / TS",
    "topic": "Redux Toolkit",
    "source": "Main Guide 18",
    "task": "Create a cart slice with addItem, removeItem and changeQuantity",
    "type": "Build",
    "evidence": "Repeated add increments quantity"
  },
  {
    "key": "66",
    "phase": "Week 3 - APIs / Redux / TS",
    "topic": "Redux Toolkit",
    "source": "Main Guide 18",
    "task": "Write selectors for count, subtotal, discount and payable total",
    "type": "Build",
    "evidence": "Selectors return correct values"
  },
  {
    "key": "67",
    "phase": "Week 3 - APIs / Redux / TS",
    "topic": "Custom hooks",
    "source": "Main Guide 18",
    "task": "Create one custom hook only if it removes real duplication; justify the decision",
    "type": "Build",
    "evidence": "Hook + one-line justification (or justified decision not to)"
  },
  {
    "key": "68",
    "phase": "Week 3 - APIs / Redux / TS",
    "topic": "TypeScript",
    "source": "Main Guide 19",
    "task": "Type Product, CartItem, Customer, component props and API functions; add ProductStatus union",
    "type": "Build",
    "evidence": "Project compiles with no any"
  },
  {
    "key": "69",
    "phase": "Week 3 - APIs / Redux / TS",
    "topic": "TypeScript",
    "source": "Main Guide 19",
    "task": "Type summarizeCart(items: CartItem[]) and show one TypeScript error you fixed",
    "type": "Practice",
    "evidence": "Before/after of a real TS error"
  },
  {
    "key": "70",
    "phase": "Week 3 - APIs / Redux / TS",
    "topic": "Auth",
    "source": "Supplement 9",
    "task": "Explain 401 vs 403; design session-expired UI for a failed save; list actions needing server auth checks",
    "type": "Explain",
    "evidence": "Written answers + UI sketch"
  },
  {
    "key": "71",
    "phase": "Week 3 - APIs / Redux / TS",
    "topic": "Accessibility",
    "source": "Supplement 10",
    "task": "Keyboard-test a form, a menu and a modal; write one bug report for a label or focus issue",
    "type": "Practice",
    "evidence": "Test notes + bug report"
  },
  {
    "key": "72",
    "phase": "Week 3 - APIs / Redux / TS",
    "topic": "Code review",
    "source": "Supplement 11",
    "task": "Review a small cart change: list 3 behavioral risks and write one evidence-based review comment",
    "type": "Practice",
    "evidence": "Review comment written"
  },
  {
    "key": "73",
    "phase": "Week 3 - APIs / Redux / TS",
    "topic": "Assessment",
    "source": "Training Plan",
    "task": "Complete the Customer List assessment (loading, empty, error, retry, success, typed)",
    "type": "Assessment",
    "evidence": "Reviewer sign-off; can explain every state branch"
  },
  {
    "key": "74",
    "phase": "Week 3 - APIs / Redux / TS",
    "topic": "Submission",
    "source": "Training Plan",
    "task": "Submit Week 3 work and answer Week 3 scenario questions",
    "type": "Submission",
    "evidence": "Reviewer sign-off"
  },
  {
    "key": "75",
    "phase": "Week 4 - Engineering",
    "topic": "Performance",
    "source": "Main Guide 20",
    "task": "Record a Network waterfall and identify the two largest costs",
    "type": "Practice",
    "evidence": "Screenshot with costs named"
  },
  {
    "key": "76",
    "phase": "Week 4 - Engineering",
    "topic": "Performance",
    "source": "Main Guide 20",
    "task": "Profile a list render in React DevTools and write one measured bottleneck",
    "type": "Practice",
    "evidence": "Component name + ms value"
  },
  {
    "key": "77",
    "phase": "Week 4 - Engineering",
    "topic": "Testing",
    "source": "Main Guide 20b",
    "task": "Set up Vitest + React Testing Library and add an npm run test script",
    "type": "Setup",
    "evidence": "npm run test runs"
  },
  {
    "key": "78",
    "phase": "Week 4 - Engineering",
    "topic": "Testing",
    "source": "Main Guide 20b",
    "task": "Write tests for validatePrice, discountFor boundary (5000/5001) and ProductCard 'Sold out'",
    "type": "Build",
    "evidence": "At least 3 passing tests"
  },
  {
    "key": "79",
    "phase": "Week 4 - Engineering",
    "topic": "Architecture",
    "source": "Main Guide 21",
    "task": "Move discount/payable rules into pricing.ts and use it everywhere",
    "type": "Build",
    "evidence": "Formula exists in one place only"
  },
  {
    "key": "80",
    "phase": "Week 4 - Engineering",
    "topic": "Architecture",
    "source": "Main Guide 21",
    "task": "Write manual tests for add, remove, increment, decrement, empty cart and discount boundary",
    "type": "Practice",
    "evidence": "Test table with expected vs actual"
  },
  {
    "key": "81",
    "phase": "Week 4 - Engineering",
    "topic": "AI workflow",
    "source": "Main Guide 21",
    "task": "Write an AI journal entry: prompt, files changed, tests run, rejected suggestion + evidence",
    "type": "Deliverable",
    "evidence": "Journal entry"
  },
  {
    "key": "82",
    "phase": "Week 4 - Engineering",
    "topic": "Architecture review",
    "source": "Main Guide Week 4",
    "task": "Write a one-page architecture review (components, state, hooks, API calls, folders, repeated code, top changes)",
    "type": "Deliverable",
    "evidence": "One-page document"
  },
  {
    "key": "83",
    "phase": "Week 4 - Engineering",
    "topic": "Git / CI / CD",
    "source": "Supplement 12",
    "task": "Run the full flow on a real repo: branch, git status, commit, push, PR, CI, merge; .env in .gitignore",
    "type": "Practice",
    "evidence": "Merged PR link"
  },
  {
    "key": "84",
    "phase": "Week 4 - Engineering",
    "topic": "Git / CI / CD",
    "source": "Supplement 12",
    "task": "Write a PR checklist and list 5 environment differences that can break staging",
    "type": "Deliverable",
    "evidence": "Checklist + list"
  },
  {
    "key": "85",
    "phase": "Week 4 - Engineering",
    "topic": "Architecture vocabulary",
    "source": "Supplement 4 table",
    "task": "Explain backend, DB, cache, CDN, load balancer, microservices, API gateway, serverless, queue, cron, sharding: one sentence + frontend impact each",
    "type": "Explain",
    "evidence": "11-row table"
  },
  {
    "key": "86",
    "phase": "Week 4 - Engineering",
    "topic": "Backend errors",
    "source": "Supplement 13",
    "task": "Design UI for duplicate email (400), server 500 and network offline; map API field errors to form fields",
    "type": "Build",
    "evidence": "Field-level error shown for 400"
  },
  {
    "key": "87",
    "phase": "Week 4 - Engineering",
    "topic": "Caching",
    "source": "Supplement 14",
    "task": "Inspect Cache-Control/ETag headers and write a stale-data checklist (browser, CDN, API cache, React state)",
    "type": "Practice",
    "evidence": "Header notes + checklist"
  },
  {
    "key": "88",
    "phase": "Week 4 - Engineering",
    "topic": "Queues / microservices",
    "source": "Supplement 15",
    "task": "Build pending/ready/failed/expired states for an export job; design catalog-OK/inventory-failed UI",
    "type": "Build",
    "evidence": "All 4 job states render"
  },
  {
    "key": "89",
    "phase": "Week 4 - Engineering",
    "topic": "Race conditions",
    "source": "Supplement 16",
    "task": "Reproduce an old-search-overwrites-new bug, then guard success, error and loading with a request ID",
    "type": "Build",
    "evidence": "Bug reproduced, then fixed"
  },
  {
    "key": "90",
    "phase": "Week 4 - Engineering",
    "topic": "Memoization / virtualization",
    "source": "Supplement 17",
    "task": "Profile a slow filter before and after useMemo; explain whether a 40-row list needs virtualization",
    "type": "Practice",
    "evidence": "Before/after numbers + explanation"
  },
  {
    "key": "91",
    "phase": "Week 4 - Engineering",
    "topic": "WebSockets",
    "source": "Supplement 18",
    "task": "Design connecting/connected/lost/reconnecting states and explain fallback polling and dedupe by ID",
    "type": "Explain",
    "evidence": "State UI + written note"
  },
  {
    "key": "92",
    "phase": "Week 4 - Engineering",
    "topic": "Design patterns",
    "source": "Supplement 19",
    "task": "Write a Customer API adapter and centralize one repeated mapping in your project",
    "type": "Build",
    "evidence": "Adapter used by all consumers"
  },
  {
    "key": "93",
    "phase": "Week 4 - Engineering",
    "topic": "Monitoring",
    "source": "Supplement 20",
    "task": "Write a monitoring checklist for the store and build image-failure fallback UI",
    "type": "Deliverable",
    "evidence": "Checklist + working fallback"
  },
  {
    "key": "94",
    "phase": "Week 4 - Engineering",
    "topic": "Submission",
    "source": "Training Plan",
    "task": "Submit Week 4 work and answer Week 4 + Supplement Sections 3-5 scenario questions",
    "type": "Submission",
    "evidence": "Reviewer sign-off"
  },
  {
    "key": "95",
    "phase": "Final Project (7 days)",
    "topic": "Setup",
    "source": "Main Guide Final",
    "task": "Create the React + TypeScript store with Vite and push it to the Git remote",
    "type": "Setup",
    "evidence": "Repo link"
  },
  {
    "key": "96",
    "phase": "Final Project (7 days)",
    "topic": "Data",
    "source": "Main Guide Final",
    "task": "Load the provided 20 products through a data/API module",
    "type": "Build",
    "evidence": "Products load from module, not hardcoded in components"
  },
  {
    "key": "97",
    "phase": "Final Project (7 days)",
    "topic": "Product list",
    "source": "Main Guide Final",
    "task": "Render product cards with stable keys and useful empty states",
    "type": "Build",
    "evidence": "Keys use product.id"
  },
  {
    "key": "98",
    "phase": "Final Project (7 days)",
    "topic": "Filters",
    "source": "Main Guide Final",
    "task": "Implement live search, category filter and in-stock toggle as source state; derive visible products",
    "type": "Build",
    "evidence": "No stored filtered list"
  },
  {
    "key": "99",
    "phase": "Final Project (7 days)",
    "topic": "Cart",
    "source": "Main Guide Final",
    "task": "Add to cart: repeated Add increases quantity",
    "type": "Build",
    "evidence": "Test proves row count stays the same"
  },
  {
    "key": "100",
    "phase": "Final Project (7 days)",
    "topic": "Cart",
    "source": "Main Guide Final",
    "task": "Support remove, decrement, count, subtotal, discount above Rs. 5,000 and payable total",
    "type": "Build",
    "evidence": "Boundary at 5000/5001 correct"
  },
  {
    "key": "101",
    "phase": "Final Project (7 days)",
    "topic": "TypeScript",
    "source": "Main Guide Final",
    "task": "Type Product, CartItem, props, API responses and function return types",
    "type": "Build",
    "evidence": "No any; compiles cleanly"
  },
  {
    "key": "102",
    "phase": "Final Project (7 days)",
    "topic": "UI states",
    "source": "Main Guide Final",
    "task": "Handle loading, empty, error, retry and success states",
    "type": "Build",
    "evidence": "Each state demonstrated"
  },
  {
    "key": "103",
    "phase": "Final Project (7 days)",
    "topic": "Testing",
    "source": "Main Guide Final",
    "task": "Write automated tests for pricing and validation logic",
    "type": "Build",
    "evidence": "Tests pass in npm run test"
  },
  {
    "key": "104",
    "phase": "Final Project (7 days)",
    "topic": "AI notes",
    "source": "Main Guide Final",
    "task": "Maintain AI notes: prompts, accepted code, rejected suggestions, evidence, tests",
    "type": "Deliverable",
    "evidence": "AI notes file in repo"
  },
  {
    "key": "105",
    "phase": "Final Project (7 days)",
    "topic": "Mock evaluation",
    "source": "Main Guide Final Part A",
    "task": "Explain scope, props vs state, async/response.ok, auth vs authorization, and state types through examples",
    "type": "Assessment",
    "evidence": "Reviewer sign-off"
  },
  {
    "key": "106",
    "phase": "Final Project (7 days)",
    "topic": "Mock evaluation",
    "source": "Main Guide Final Part B",
    "task": "Predict all 5 output questions with reasons",
    "type": "Assessment",
    "evidence": "5/5 correct"
  },
  {
    "key": "107",
    "phase": "Final Project (7 days)",
    "topic": "Mock evaluation",
    "source": "Main Guide Final Part C",
    "task": "Debug and rewrite the Cart component without unnecessary state/effect; name the tests to run",
    "type": "Assessment",
    "evidence": "Correct rewrite"
  },
  {
    "key": "108",
    "phase": "Final Project (7 days)",
    "topic": "Mock evaluation",
    "source": "Main Guide Final Part D",
    "task": "Answer the 5 scenario-reasoning questions (partial failure, duplicate saves, race, refresh 404, AI review)",
    "type": "Assessment",
    "evidence": "Reviewer sign-off"
  },
  {
    "key": "109",
    "phase": "Final Project (7 days)",
    "topic": "Mock evaluation",
    "source": "Supplement mock eval",
    "task": "Answer Supplement theory and scenario questions",
    "type": "Assessment",
    "evidence": "Reviewer sign-off"
  },
  {
    "key": "110",
    "phase": "Final Project (7 days)",
    "topic": "Practical",
    "source": "Supplement mock eval",
    "task": "Build the practice dashboard: customer list, detail route, UI states, race fix, keyboard-tested modal, fake export job + notes",
    "type": "Build",
    "evidence": "Dashboard + bug trace + per-term notes"
  },
  {
    "key": "111",
    "phase": "Final Project (7 days)",
    "topic": "Review call",
    "source": "Training Plan rubric",
    "task": "Pass the review call: explain code, choices, bugs, fixes and AI-assisted changes",
    "type": "Assessment",
    "evidence": "Overall score >= 70% with all weekly submissions done"
  },
  {
    "key": "112",
    "phase": "Final Project (7 days)",
    "topic": "Readiness",
    "source": "Both guides",
    "task": "Confirm every item on the Main Guide final readiness checklist and the Supplement coverage checklist",
    "type": "Checkpoint",
    "evidence": "All items confirmed with reviewer"
  }
];

export const columns: TableColumnsType<TrainingContent> = [
  { title: 'Phase', dataIndex: 'phase', key: 'phase', width: 190, fixed: 'left' },
  { title: 'Topic', dataIndex: 'topic', key: 'topic', width: 190 },
  { title: 'Source', dataIndex: 'source', key: 'source', width: 170 },
  {
    title: 'Task',
    dataIndex: 'task',
    key: 'task',
    width: 440,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    width: 140,
  },
  {
    title: 'Done When (Evidence)',
    dataIndex: 'evidence',
    key: 'evidence',
    width: 360,
  },
];