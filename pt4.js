let first,second,third;
let item1,item2,item3;

    let result = 0;
    let percent = 0;
    let res = 0;
    function computeQuiz() {

        first = parseInt(document.getElementById("first").value);
        second = parseInt(document.getElementById("second").value);
        third = parseInt(document.getElementById("third").value);
        
        item1 = parseInt(document.getElementById("1").value);
        item2 = parseInt(document.getElementById("2").value);
        item3 = parseInt(document.getElementById("3").value);

        result = first+second+third;
        percent = item1+item2+item3;
        s = (result/percent)*100;
        res = (result/percent)*20;
        document.getElementById("outputs").value = s;
        document.getElementById("output").value = res;
    }
    document.getElementById("btn").addEventListener("click",computeQuiz);

    let pt1,pt2,pt3;
    let score1,score2,score3;

    let final = 0;
    let finals = 0;
    let rest = 0;
    function pt() {

        pt1 = parseInt(document.getElementById("pts1").value);
        pt2 = parseInt(document.getElementById("pts2").value);
        pt3 = parseInt(document.getElementById("pts3").value);

        score1 = parseInt(document.getElementById("4").value);
        score2 = parseInt(document.getElementById("5").value);
        score3 = parseInt(document.getElementById("6").value);

        final = pt1+pt2+pt3;
        finals = score1+score2+score3;
        r = (final/finals)*100;
        res = (final/finals)*60;
        document.getElementById("out").value = r;
        document.getElementById("outs").value = rest;
    }
    document.getElementById("btns").addEventListener("click",pt);

    let exam;
    let totalofExam;

    let results = 0;
    let resu = 0;
    function computeExam() {
        exam = parseInt(document.getElementById("exmas").value);
        totalofExam = parseInt(document.getElementById("10").value);

        exam = (exam/totalofExam)*100;
        resu = (exam/totalofExam)*20;
        document.getElementById("outpu").value = exam;
        document.getElementById("o").value = resu;
    }
    document.getElementById("bn").addEventListener("click", computeExam);

    let grade = 0;

    function computeGrade() {
        
        grade = (res+rest+resu)*100;

        document.getElementById("grades").value = grade;

    }
    document.getElementById("b").addEventListener("click", computeGrade);