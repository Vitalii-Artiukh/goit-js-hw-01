function getElementWidth(content, padding, border) {
  const width = (
    Number.parseFloat(content) +
    Number.parseFloat(padding) * 2 +
    Number.parseFloat(border) * 2
  );

  // console.log(width);
  return (
    Number.parseFloat(content) +
    Number.parseFloat(padding) * 2 +
    Number.parseFloat(border) * 2
  );
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));



// console.log(
//   getElementWidth(
//     Number.parseFloat("50px"),
//     Number.parseFloat("8px"),
//     Number.parseFloat("4px")
//   )
// );
// console.log(
//   getElementWidth(
//     Number.parseFloat("60px"),
//     Number.parseFloat("12px"),
//     Number.parseFloat("8.5px")
//   )
// );
// console.log(
//   getElementWidth(
//     Number.parseFloat("200px"),
//     Number.parseFloat("0px"),
//     Number.parseFloat("0px")
//   )
// );
