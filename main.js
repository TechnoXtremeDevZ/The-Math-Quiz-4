function addUser() {
    var name1 = document.getElementById("p1_login").value;
    var name2 = document.getElementById("p2_login").value;

    localStorage.setItem("player1_name", name1);
    localStorage.setItem("player2_name", name2);
    window.location = "quiz.html";
}