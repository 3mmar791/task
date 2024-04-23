// function for tag name elements
function countElementOccurrences(elementName) {
  // Get all elements of the specified type
  const elements = document.getElementsByTagName(elementName);

  // Return the total count
  return elements.length;
}

// function for class name elements
function countElementOccurrencesClass(className) {
  // Get all elements of the specified type
  const elements = document.getElementsByClassName(className);

  // Return the total count
  return elements.length;
}

// function for Id name elements
function countElementOccurrencesId(elementId) {
  // Get all elements of the specified type
  const elements = document.getElementById(elementId);

  // Return the total count
  return 1;
}

// function for name attrebutes elements
function countElementOccurrencesname(name) {
  // Get all elements of the specified type
  const elements = document.getElementsByName(name);

  // Return the total count
  return elements.length;
}

let btn = document.getElementById("btn");

btn.onclick = () => {
  // for tag name elements
  const elementName = document.getElementById("input1").value.trim();
  const count1 = countElementOccurrences(elementName);
  let text1 = document.getElementById("text1");
  text1.innerHTML = `Number of ${elementName} elements: ${count1}`;

  // for class name elements
  const className = document.getElementById("input2").value.trim();
  const count2 = countElementOccurrencesClass(className);
  let text2 = document.getElementById("text2");
  text2.innerHTML = `Number of ${className} class: ${count2}`;

  // for class name elements
  const elementId = document.getElementById("input3").value.trim();
  const count3 = countElementOccurrencesId(elementId);

  let text3 = document.getElementById("text3");
  text3.innerHTML = `Number of ${elementId} id:  ${count3}`;

  // for class name elements
  const name = document.getElementById("input4").value.trim();
  const count4 = countElementOccurrencesname(name);

  let text4 = document.getElementById("text4");
  text4.innerHTML = `Number of ${name} name:  ${count4}`;
};
