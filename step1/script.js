
function addCourse() {

    var row = document.createElement("div");
    row.className = "course-row";

    row.innerHTML =
        '<label>Course:</label>' +
        '<input type="text" name="course[]" required>' +

        '<label>Credits:</label>' +
        '<input type="number" name="credits[]" min="1" required>' +

        '<label>Grade:</label>' +
        '<select name="grade[]">' +
        '<option value="4.0">A</option>' +
        '<option value="3.0">B</option>' +
        '<option value="2.0">C</option>' +
        '<option value="1.0">D</option>' +
        '<option value="0.0">F</option>' +
        '</select>' +

        '<button type="button" onclick="this.parentNode.remove()">Remove</button>';

    document.getElementById("courses").appendChild(row);
}

function validateForm() {

    var courses = document.getElementsByName("course[]");
    var credits = document.getElementsByName("credits[]");

    for (var i = 0; i < courses.length; i++) {
        if (courses[i].value === "") {
            alert("Please fill all course names");
            return false;
        }
    }

    for (var i = 0; i < credits.length; i++) {
        if (credits[i].value <= 0) {
            alert("Credits must be positive");
            return false;
        }
    }

    return true;
}
