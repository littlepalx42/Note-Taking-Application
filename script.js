const tit = document.getElementById("title");
const txt = document.getElementById("text");
const sbtn = document.getElementById("save");
const not = document.getElementById("notes");

sbtn.addEventListener("click", () => {
  const titl = tit.value;
  const txtn = txt.value;
  const notdiv = document.createElement("div");
  const newtit = document.createElement("h3");
  const newtxt = document.createElement("p");
  const delbtn = document.createElement("button");
  newtit.textContent = titl
  newtxt.textContent = txtn
  delbtn.textContent = "Delete";
  not.append(notdiv);
  notdiv.append(newtit);
  notdiv.append(newtxt);
  notdiv.append(delbtn);
  notdiv.classList.add("newdiv");
//   newtit.append(titl);
//   stit.append(newtit);
//   newtxt.append(txtn);
//   stxt.append(newtxt);
  delbtn.addEventListener("click", () => {
    notdiv.remove();
  });

  tit.value = "";
  txt.value = "";
});
