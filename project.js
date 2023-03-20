//add and backdrop

const backdrop = document.getElementById("backdrop");
const backdropContent = document.getElementById("add-backdrop");
const add = document.querySelectorAll(".add-btn");
const cancel = document.getElementById("cancel");
const input = document.getElementById("input");
const addItem = document.getElementById("add-txt");
const allItems = document.querySelectorAll(".item");
//local storage
const itms = JSON.parse(localStorage.getItem("items")) || [];
let boxs = document.querySelectorAll(".box");

const addNewItem = function () {
  add[0].onclick = function () {
    backdrop.classList.toggle("visible");

    addItem.onclick = function () {
      if (input.value != "") {
        boxs[0].innerHTML += `
          <li draggable="true" class="item">
          <p>${input.value}</p>
          </li>
          `;
        let inpu = input.value;
        const itm = {
          inpu,
          done: false,
        };
        itms.push(itm);
        localStorage.setItem("items", JSON.stringify(itms));
        input.value = "";
        dragItem();
      }
    };
  };
  add[2].onclick = function () {
    backdrop.classList.toggle("visible");

    addItem.onclick = function () {
      if (input.value != "") {
        boxs[2].innerHTML += `
          <li draggable="true" class="item">
          <p>${input.value}</p>
        </li>
          `;
        let inpu = input.value;
        const itm = {
          inpu,
          done: false,
        };
        itms.push(itm);
        localStorage.setItem("items", JSON.stringify(itms));
        input.value = "";
        dragItem();
      }
    };
  };
  add[1].onclick = function () {
    backdrop.classList.toggle("visible");

    addItem.onclick = function () {
      if (input.value != "") {
        boxs[1].innerHTML += `
          <li draggable="true" class="item">
          <p>${input.value}</p>
        </li>
          `;
        let inpu = input.value;
        const itm = {
          inpu,
          done: false,
        };
        itms.push(itm);
        localStorage.setItem("items", JSON.stringify(itms));
        input.value = "";
        dragItem();
      }
    };
  };

  console.log(itms);
  function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {}).join("");
  }
  populateList(itms, boxs);

  function populateList(plates = [], platesList) {
    //   loop over the array and create the new list item html
    platesList.innerHTML = plates
      .map((plate, i) => {
        return `
          <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${
          plate.done ? "checked" : ""
        } />
            <label for="item${i}">${plate.text}</label>
          </li>
        `;
      })
      .join("");
  }
};

addNewItem();
cancel.onclick = function () {
  backdrop.classList.remove("visible");
};

//darg amd drop

let drag = null;

function dragItem() {
  let Items = document.querySelectorAll(".item");
  Items.forEach((item) => {
    item.addEventListener("dragstart", function () {
      drag = item;
      item.style.opacity = "0.5";
    });
    item.addEventListener("dragend", function () {
      drag = null;
      item.style.opacity = "1";
    });

    boxs.forEach((box) => {
      box.addEventListener("dragover", function (e) {
        e.preventDefault();
        this.style.background = "#015040";
      });
      box.addEventListener("dragleave", function () {
        this.style.background = "#009578";
      });
      box.addEventListener("drop", function () {
        box.append(drag);
        this.style.background = "#009578";
      });
    });
  });
}
dragItem();

console.log(cancel);
