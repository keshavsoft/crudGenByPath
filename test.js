let set = { a : 1, b : 2, c : 3 };
let subset = { a : null, b : null,d : 16 };
try {
  Object.assign(Object.seal(subset), set);
} catch (e) {
  console.log('its ok I meant to do that <(^.^)^');
}
console.log(subset);