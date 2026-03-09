document.getElementById("complaintForm")?.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value
let email = document.getElementById("email").value
let issue = document.getElementById("issue").value
let desc = document.getElementById("desc").value

let ticketID = "IT" + Math.floor(Math.random()*10000)

let complaint = {
ticketID,
name,
email,
issue,
desc,
status:"Pending"
}

let complaints = JSON.parse(localStorage.getItem("complaints")) || []

complaints.push(complaint)

localStorage.setItem("complaints", JSON.stringify(complaints))

alert("Complaint Submitted! Your Ticket ID: " + ticketID)

})

function trackTicket(){

let id = document.getElementById("ticketInput").value

let complaints = JSON.parse(localStorage.getItem("complaints")) || []

let found = complaints.find(c => c.ticketID === id)

if(found){
document.getElementById("result").innerText =
"Issue: "+found.issue+" | Status: "+found.status
}else{
document.getElementById("result").innerText="Ticket not found"
}

}

function loadTickets(){

let complaints = JSON.parse(localStorage.getItem("complaints")) || []

let html=""

complaints.forEach(c=>{
html += `<p>${c.ticketID} - ${c.issue} - ${c.status}</p>`
})

document.getElementById("ticketList").innerHTML = html

}