const table = document.querySelector(".table");
const columns = document.querySelector(".columns");
const values = document.querySelector(".values");
const forCopy = document.getElementById("forCopy");
const errorMsg = document.querySelector(".errorMessage");
const columnRefO = document.getElementById("colRef0");

let columnNames = ["undefined"];
let columnValues = ["null"];
let availableSlot = [0];
let completeQuery = "";
let valuesCount = 1;

function addColumn(){
  let index = 1;
  
  while(availableSlot.includes(index)){
    index++;
    if(index > 10) return alert("MySQL 1117 ERROR_TOO_MANY_COLUMNS (>10)");
  }
  availableSlot.push(index);
  
  const moreColumnDiv = document.createElement("div");
  moreColumnDiv.id = `colRef${index}`;
  
  // const moreColumnBtnAdd = document.createElement("button");
  // moreColumnBtnAdd.innerHTML = "+";
  // moreColumnBtnAdd.classList = "addColumn";
  // moreColumnBtnAdd.onclick = (event) => {
  //   addColumn();
  // }
  
  const moreColumnBtnRemove = document.createElement("button");
  moreColumnBtnRemove.innerHTML = "-";
  moreColumnBtnRemove.classList = "removeColumn";
  moreColumnBtnRemove.onclick = (event) => {
    const revIndex = availableSlot.indexOf(parseInt(moreColumnDiv.id.slice(6, moreColumnDiv.id.length)));
    availableSlot.splice(revIndex, 1);
    columnNames.splice(revIndex, 1);
    columnValues.splice(revIndex, 1);
    
    moreColumnDiv.remove();
    updateQuery();
    removeValue();
  }
  
  const moreColumn = document.createElement("input");
  moreColumn.placeholder = "Column" +"_Name";
  moreColumn.id = `column${index}`;
  
  moreColumn.onchange = (event) => {
    setColumnNames(availableSlot.indexOf(parseInt(moreColumnDiv.id.slice(6, moreColumnDiv.id.length))), moreColumn.value);
    updateQuery();
  };
  
  moreColumn.oninput = (event) => {
    moreColumn.value.length == 1 ? moreColumn.size = 1 : moreColumn.size = (moreColumn.value.length)-1;
  }
  
  //moreColumnDiv.appendChild(moreColumnBtnAdd);
  moreColumnDiv.appendChild(moreColumn);
  moreColumnDiv.appendChild(moreColumnBtnRemove);
  
  columns.appendChild(moreColumnDiv);
  
  const moreValue = document.createElement("select");
  moreValue.classList = `column${index} orange`;
  const offsetValue = document.createElement("option");
  moreValue.onchange = (event) => {
    setColumnValues(availableSlot.indexOf(parseInt(moreColumnDiv.id.slice(6, moreColumnDiv.id.length))), moreValue.value);
    updateQuery();
  };
  
  offsetValue.innerHTML = "null";
  offsetValue.selected = true;
  
  const value1 = document.createElement("option");
  value1.innerHTML = "ID/s";
  value1.value = "Random_ID";
  const value2 = document.createElement("option");
  value2.innerHTML = "Name/s";
  value2.value = "Random_Name";
  
  moreValue.appendChild(offsetValue);
  moreValue.appendChild(value1);
  moreValue.appendChild(value2);

  values.appendChild(moreValue);
  
  columnNames[availableSlot.indexOf(parseInt(moreColumnDiv.id.slice(6, moreColumnDiv.id.length)))] = "undefined";
  columnValues[availableSlot.indexOf(parseInt(moreColumnDiv.id.slice(6, moreColumnDiv.id.length)))] = "null";
  
  updateQuery();
  function removeValue(){
    moreValue.remove();
  }
}

function setColumnNames(i, value){
  value != "" ? columnNames[i] = value : columnNames[i] = "undefined";
}

function setColumnValues(i, value){
  columnValues[i] = value;
}

function updateQuery(){
  let query = "INSERT INTO ";
  query += table.value ? table.value : "undefined";
  query += " (";
  
  let tempColNames = "", tempColValues = "";
  if(columnNames.length > 1){
    let nth2 = false;
    for(let values of columnNames){
      if(nth2) tempColNames += ", ";
      tempColNames += values;
      if(!nth2) nth2 = true;
    }
    query += tempColNames.trim();
  }else{
    query += columnNames[0];
  }
  
  query += ") VALUES (";
  if(columnValues.length > 1){
    let nth2 = false;
    for(let values of columnValues){
      if(nth2) tempColValues += ", ";
      tempColValues += values;
      if(!nth2) nth2 = true;
    }
    query += tempColValues;
  }else{
    query += columnValues[0];
  }
  
  query += ");";
  forCopy.innerHTML = query;
  
  upgradeQuery();
}

updateQuery();

function copyQuery() {
    if(table.value == "" || columnNames.includes("undefined")){
      return errorMsg.classList.add("show");
    }else{
      errorMsg.classList.remove("show");
    }
    upgradeQuery();
    
    const textArea = document.createElement('textarea');
    textArea.textContent = completeQuery;
    document.body.append(textArea);
    
    textArea.select();
    document.execCommand("copy");
    
    cButton.innerText = "Query Copied";
    setTimeout(() => {
      cButton.innerText = "Copy Query";
    }, 3000);
    
    textArea.remove();
}

const randomNames = ["John", "Elijah", "Brian"];

function upgradeQuery(){
  let finalQuery = forCopy.innerHTML, tempQuery = "", nth2 = false; finalQuery = finalQuery.slice(0, finalQuery.indexOf(" VALUES (") + 9);
  for(const typeOfData of columnValues){
    if(columnValues.length > 1){
      if(nth2){
        tempQuery += ", ";
      }
      if(!nth2) nth2 = true;
    }
    
    switch(typeOfData){
      case "Random_Name":
        tempQuery += randomNames[0];
        break;
      case "Random_ID":
        tempQuery += "10";
        break;
      default:
        tempQuery += "null";
    }
  }
  
  if(valuesCount > 1){
    for(let i = 0; i < valuesCount; i++){
      let nth3 = false;
      tempQuery += "), ("
      for(const typeOfData of columnValues){
        if(columnValues.length > 1){
          if(nth3){
            tempQuery += ", ";
          }
          if(!nth3) nth3 = true;
        }
        
        switch(typeOfData){
          case "Random_Name":
            tempQuery += randomNames[0];
            break;
          case "Random_ID":
            tempQuery += "10";
            break;
          default:
            tempQuery += "null";
        }
      }
    }
  }
  
  completeQuery = finalQuery +tempQuery +");";
}

function setCount(value){
  valuesCount = value;
  
  updateQuery();
  upgradeQuery();
}
/*var columnArrageTable = document.querySelectorAll("[id=arrColumn]");
let selectedValues = 0;

function setOptionValue(id, n){
  if(document.getElementById(id).checked){
    columnArrageTable.forEach((el) => {
    const x = document.createElement("option");
    x.innerHTML = id; x.value = "ID"; x.id = `o${n}`;
    
    // const xx = document.createElement("option");
    // xx.innerHTML = "Select"; xx.value="Null";
    // el.appendChild(xx);
    //document.getElementById("arrColumn").appendChild(x);
    el.appendChild(x);
    });
    selectedValues++;
  }else{
    columnArrageTable.forEach((el) => {
      document.getElementById(`o${n}`).remove();
    })
    selectedValues--;
  }
  valuesSelected();
}

function valuesSelected(){
  console.log(selectedValues);
  let tableArray = [document.getElementById("t1"), document.getElementById("t2"), document.getElementById("t3"), document.getElementById("t4")];
  
  for(let i = 0; i < tableArray.length; i++){
    if(i < selectedValues){
      tableArray[i].style.display = "block";
    }else{
      tableArray[i].style.display = "none";
    }
  }
}*/
