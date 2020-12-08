("Switch");

//example
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

//syntax
switch (expression) {
  case value1:
    //Statements executed when the
    //result of expression matches value1
    break;
  case value2:
    //Statements executed when the
    //result of expression matches value2
    break;
  case valueN:
    //Statements executed when the
    //result of expression matches valueN
    break;
  default:
    //Statements executed when none of
    //the values match the value of the expression
    break;
}
