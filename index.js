document.querySelector(".box")


document.querySelector(".box").innerHTML

document.querySelector(".container").innerHTML

documnet.querySelector(".box").innerText

document.querySelector(".box").innerText

document.querySelector(".container").outer
undefined
document.querySelector(".container").outerHTML
// '<div class="container">\n        <div class="box">Hey I am box</div>\n    </div>'
document.querySelector(".container").tagName
// 'DIV'
document.querySelector(".container").nodeName
// 'DIV'
document.querySelector(".container").textContent
// '\n        Hey I am box\n    '
document.querySelector(".container").hidden 
// false
document.querySelector(".container").hidden = true
// true
document.querySelector(".box").innerHTML = "Hey i am Sachin"
// 'Hey i am Sachin'

document.querySelector(".box").innerHTML = "Hey I am Sachin"
'Hey I am Sachin'
document.querySelector(".box").hasAttribute("style")
false

document.querySelector(".box").getAttribute("style")
'display: flex;'
document.querySelector(".box").setAttribute("style","display:inline")
undefined
document.querySelector(".box").attributes
// NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}
document.querySelector(".box").removeAttribute("style")
// undefined
document.designMode = "on"



document.querySelector(".box").dataset
// DOMStringMap {createdby: 'Sachin'}



document.querySelector(".container").classList


// DOMTokenList(3) ['container', 'red', 'bg-Green', value: 'container red bg-Green']0: "container"1: "red"2: "bg-Green"length: 3value: "container red bg-Green"[[Prototype]]: DOMTokenList
document.querySelector(".container").className
// 'container red bg-Green'
document.querySelector(".container").classList.add("Sachin")
// undefined
document.querySelector(".container").classList.remove("red")
// undefined
document.querySelector(".container").classList.toggle("red")
// true

document.querySelector(".container").classList.toggle("red")