// // let transferContainer1 = document.querySelector(".transfer-container-1");
// // let transferContainer2 = document.querySelector(".transfer-container-2");
// // let transferAllLeftBtn = document.querySelector("#transfer-all-left");
// // let transferAllRightBtn = document.querySelector("#transfer-all-right");

// using datalist;

// let languageList = [
//   "React",
//   "Vue",
//   "Svelte",
//   "Angular",
//   "HTML",
//   "CSS",
//   "JS",
//   "TS",
// ];

// let checkArr = {
//   firstCheckedContainerEle: [
//     "React",
//     "Vue",
//     "Svelte",
//     "Angular",
//     "HTML",
//     "CSS",
//     "JS",
//     "TS",
//   ],
//   secondCheckedContainerEle: [],
// };

// let temp = [];
// let dump = [];
// function paintUi(checkArr) {

//     let {firstCheckedContainerEle, secondCheckedContainerEle} = checkArr

// for (let i = 0; i < firstCheckedContainerEle?.length; i++) {
//     let langDiv = document.createElement("div");
//     langDiv.innerHTML = `
//           <input type="checkbox" id="${firstCheckedContainerEle[i].toLowerCase()}-check" data-language='${firstCheckedContainerEle[i]}'>
//           <label for="${firstCheckedContainerEle[i].toLowerCase()}-check">${
//       firstCheckedContainerEle[i]
//     }</label>
//           `;
//     transferContainer1.append(langDiv);
//   }

//   if (transferContainer1?.children.length === 8) {
//     transferAllLeftBtn.setAttribute("disabled", true);
//     transferAllRightBtn.removeAttribute("disabled");
//     transferContainer2.innerHTML = "";
//   }

//   for (let i = 0; i < secondCheckedContainerEle?.length; i++) {
//     let langDiv = document.createElement("div");
//     langDiv.innerHTML = `
//           <input type="checkbox" id="${secondCheckedContainerEle[i].toLowerCase()}-check" data-language='${secondCheckedContainerEle[i]}'>
//           <label for="${secondCheckedContainerEle[i].toLowerCase()}-check">${
//       secondCheckedContainerEle[i]
//     }</label>
//           `;
//     transferContainer2.append(langDiv);
//   }

//   if (transferContainer2?.children.length === 8) {
//     transferAllRightBtn.setAttribute("disabled", true);
//     transferAllLeftBtn.removeAttribute("disabled");
//     transferContainer1.innerHTML = "";

//   }
// }

// paintUi(checkArr);

// function transferAll(command){
//     transferContainer2.innerHTML = "";
//     transferContainer1.innerHTML = "";
//     temp = [];
//     dump = [];
//     if(command === "left"){
//         checkArr.firstCheckedContainerEle = languageList;
//         checkArr.secondCheckedContainerEle = [];
//         return paintUi(checkArr)
//     }else if(command === "right"){
//         checkArr.secondCheckedContainerEle = languageList;
//         checkArr.firstCheckedContainerEle = [];
//         return paintUi(checkArr)
//     }

// }

// transferContainer1.addEventListener("click", (e) => {
//     if(e.target.checked){
//         temp.push(e.target.dataset?.language)
//     }else if(!e.target.checked && e.target.dataset?.language){
//         temp = removeEleFromTemp(temp, e.target.dataset?.language)
//     }
// })

// // transferContainer2.addEventListener("click", (e) => {
// //     if(e.target.checked){
// //         dump.push(e.target.dataset?.language)
// //     }else if(!e.target.checked && e.target.dataset?.language){
// //         dump = removeEleFromTemp(dump, e.target.dataset?.language)
// //     }
// // })

// function transferCheckedLeft(){
//     // let temp = languageList.filter(x => !dump.includes(x))
//     // checkArr.firstCheckedContainerEle = temp;
//     // checkArr.secondCheckedContainerEle = dump;
//     // transferContainer2.innerHTML = "";
//     // transferContainer1.innerHTML = "";
//     console.log(temp, dump, "left")
//     // paintUi(checkArr);
// }

// function transferCheckedRight(){
//     dump = languageList.filter(x => !temp.includes(x));
//     checkArr.secondCheckedContainerEle = temp;
//     checkArr.firstCheckedContainerEle = dump;
//     transferContainer2.innerHTML = "";
//     transferContainer1.innerHTML = "";
//     paintUi(checkArr);
// }

// function removeEleFromTemp(arr, ele){
//     let ans = [];
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] !== ele){
//             ans.push(arr[i])
//         }
//     }
//     return ans;
// }

// using flags;

let transferContainer1 = document.querySelector(".transfer-container-1");
let transferContainer2 = document.querySelector(".transfer-container-2");
let transferAllLeftBtn = document.querySelector("#transfer-all-left");
let transferAllRightBtn = document.querySelector("#transfer-all-right");
let checkerLeftBtn = document.querySelector("#leftChecker");
let checkerRightBtn = document.querySelector("#rightChecker");

let transferChecker = [
  {
    React: {
      container1: true,
      container2: false,
    },
  },
  {
    Vue: {
      container1: true,
      container2: false,
    },
  },
  {
    Svelte: {
      container1: true,
      container2: false,
    },
  },
  {
    Angular: {
      container1: true,
      container2: false,
    },
  },
  {
    HTML: {
      container1: true,
      container2: false,
    },
  },
  {
    CSS: {
      container1: true,
      container2: false,
    },
  },
  {
    JS: {
      container1: true,
      container2: false,
    },
  },
  {
    TS: {
      container1: true,
      container2: false,
    },
  },
];

function paintUi(checker) {
  for (let key in checker) {
    for (let key1 in checker[key]) {
      const { container1, container2 } = checker[key][key1];
      if (container1) {
        let langDiv = document.createElement("div");
        langDiv.innerHTML = `
              <input type="checkbox" id="${key1.toLowerCase()}-check" data-language='${key1}'>
              <label for="${key1.toLowerCase()}-check">${key1}</label>
              `;
        transferContainer1.append(langDiv);
      } else if (container2) {
        let langDiv = document.createElement("div");
        langDiv.innerHTML = `
              <input type="checkbox" id="${key1.toLowerCase()}-check" data-language='${key1}'>
              <label for="${key1.toLowerCase()}-check">${key1}</label>
              `;
        transferContainer2.append(langDiv);
      }
    }
  }

  if (transferContainer1?.children.length === 8) {
    transferAllLeftBtn.setAttribute("disabled", true);
    transferAllRightBtn.removeAttribute("disabled");
    transferContainer2.innerHTML = "";
  } else if (transferContainer2?.children.length === 8) {
    transferAllRightBtn.setAttribute("disabled", true);
    transferAllLeftBtn.removeAttribute("disabled");
    transferContainer1.innerHTML = "";
  }
  // console.log(checkerLeftBtn, checkerRightBtn)
}

paintUi(transferChecker);

function transferAll(command) {
  transferContainer2.innerHTML = "";
  transferContainer1.innerHTML = "";
  checkerRightBtn.setAttribute("disabled", true);
  checkerLeftBtn.setAttribute("disabled", true);

  if (command === "left") {
    for (let key in transferChecker) {
      for (let key1 in transferChecker[key]) {
        transferChecker[key][key1].container1 = true;
        transferChecker[key][key1].container2 = false;
      }
    }
    return paintUi(transferChecker);
  } else if (command === "right") {
    for (let key in transferChecker) {
      for (let key1 in transferChecker[key]) {
        transferChecker[key][key1].container1 = false;
        transferChecker[key][key1].container2 = true;
      }
    }
    return paintUi(transferChecker);
  }
}

let count = 0;
transferContainer1.addEventListener("click", (e) => {
  if (e.target.checked) {
    for (let key in transferChecker) {
      for (let key1 in transferChecker[key]) {
        if (key1 === e.target.dataset?.language) {
          transferChecker[key][key1].container1 = false;
          transferChecker[key][key1].container2 = true;
        }
      }
    }
    count++;
  } else if (!e.target.checked && e.target.dataset?.language) {
    for (let key in transferChecker) {
      for (let key1 in transferChecker[key]) {
        if (key1 === e.target.dataset?.language) {
          transferChecker[key][key1].container1 = true;
          transferChecker[key][key1].container2 = false;
        }
      }
    }
    count--;
  }

  count === 0 ? checkerRightBtn.setAttribute("disabled", true) : checkerRightBtn.removeAttribute("disabled");
  
});

let count1;

transferContainer2.addEventListener("click", (e) => {

  if (e.target.checked) {
    for (let key in transferChecker) {
      for (let key1 in transferChecker[key]) {
        if (key1 === e.target.dataset?.language) {
          transferChecker[key][key1].container1 = true;
          transferChecker[key][key1].container2 = false;
          count1++;
        }
      }
    }
    
  } else if (!e.target.checked && e.target.dataset?.language) {
    for (let key in transferChecker) {
      for (let key1 in transferChecker[key]) {
        if (key1 === e.target.dataset?.language) {
          transferChecker[key][key1].container1 = false;
          transferChecker[key][key1].container2 = true;
          count1--;
        }
      }
    }
  }

  count1 === 0 ? checkerLeftBtn.setAttribute("disabled", true) : checkerLeftBtn.removeAttribute("disabled");
});

function transferCheckedRight() {
  transferContainer2.innerHTML = "";
  transferContainer1.innerHTML = "";
  checkerRightBtn.setAttribute("disabled", true);
  count1 = 0;
  count = 0;
  paintUi(transferChecker);
}

function transferCheckedLeft() {
  transferContainer2.innerHTML = "";
  transferContainer1.innerHTML = "";
  checkerLeftBtn.setAttribute("disabled", true);
  count = 0;
  count1  = 0;
  paintUi(transferChecker);
}






