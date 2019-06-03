##Flow of the app->
  >index.js renders the App componet to the DOM
  >we are using two themes in the app, corresponding style is defined in theme-context.js
  >for handling themes, context api is used, from the App component, access to context api 
   is provided to child components upto the last level i.e. Button component
  >App component is using one child component i.e. Calculator commponent, all the functional logic of the calculator
   is defined in the Calculator component. 
  >Calculator component has two child components i.e. DisplayScreen and Keypad component, both are resusable 
   component
  >DisplayScreen is used for showing the result, and it has one child component Buttons
  >Keypad Component is used for providing buttons to get the inputs from the user, it also has
   one child component i.e. Buttons
  >Buttons is reusable component, Display and Keypad are using this component internally, For
   Display Component it is rendering input box and for Keypad component it is rendering rectangular
   shaped buttons

##For the styling purpose scss is used
##For running app locally, first execute 'npm install' and then 'npm start'