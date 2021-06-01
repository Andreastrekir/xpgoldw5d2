//Exercise 1 : Select A Kind Of Music
//Display the value of the selected option.
//Add an additional option to the select tag:
//<option value="classic">Classic</option>
//The newly added option should be selected by default.

document.querySelector("select").addEventListener("change",evt=>document.querySelector(`#selectedopt`).value=evt.target.value)





















