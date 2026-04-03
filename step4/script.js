$(document).ready(function () {

    $("#addRow").click(function () {
        $("#courseTable tbody").append(`
            <tr>
                <td><input type="text" class="form-control course-name"></td>
                <td><input type="number" class="form-control credit"></td>
                <td>
                    <select class="form-control grade">
                        <option value="4">A</option>
                        <option value="3">B</option>
                        <option value="2">C</option>
                        <option value="1">D</option>
                        <option value="0">F</option>
                    </select>
                </td>
            </tr>
        `);
    });

    $("#calculate").click(function () {

        let totalCredits = 0;
        let totalPoints = 0;
        let courseNames = [];

        let valid = true;

        $("#courseTable tbody tr").each(function () {

            let name = $(this).find(".course-name").val();
            let credit = parseFloat($(this).find(".credit").val());
            let grade = parseFloat($(this).find(".grade").val());

            if (!name || !credit) {
                alert("Fill all fields!");
                valid = false;
                return false;
            }

            if (courseNames.includes(name)) {
                alert("Duplicate course!");
                valid = false;
                return false;
            }

            courseNames.push(name);

            totalCredits += credit;
            totalPoints += credit * grade;
        });

        if (!valid) return;

        let gpa = totalPoints / totalCredits;

        $("#result").text("GPA: " + gpa.toFixed(2));

        updateProgressBar(gpa);

        $.post("save.php", {
            name: $("#studentName").val(),
            semester: $("#semester").val(),
            gpa: gpa
        }, function (res) {
            console.log(res);
        });

    });

    function updateProgressBar(gpa) {
        let percent = (gpa / 4) * 100;

        $("#gpaBar").css("width", percent + "%");
        $("#gpaBar").text(gpa.toFixed(2));

        if (gpa >= 3.5) {
            $("#gpaBar").attr("class", "progress-bar bg-success");
        } else if (gpa >= 3) {
            $("#gpaBar").attr("class", "progress-bar bg-primary");
        } else if (gpa >= 2) {
            $("#gpaBar").attr("class", "progress-bar bg-warning");
        } else {
            $("#gpaBar").attr("class", "progress-bar bg-danger");
        }
    }

});
