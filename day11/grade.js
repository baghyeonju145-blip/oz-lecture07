// DAY 11 실습 02 — 점수 등급 계산기

const score = 87; // 바꿔 가며 확인합니다 : 100, 90, 89, 60, 59, 0, -5, 105

// 1. 0~100 밖의 점수는 먼저 걸러 냅니다 — 둘 중 하나만 맞아도 잘못된 점수이므로 ||
if (score < 0 || score > 100) {
  console.log("0부터 100 사이의 점수를 넣어 주세요.");
} else {
  // 2. 등급 — 높은 점수부터 차례로 검사합니다 else if
  let grade;
  if(score >= 90){
    grade= "A";
  }else if (score>= 80){
    grade="B";
  }else if (score>= 70){
    grade="c";
  }
  else if (score>= 60){
    grade="D";
  
else (grade="F"}

  // 3. 등급마다 한마디 — 정해진 값 가운데 하나이므로 switch
  let message;
switch (grade) {
    case "A":
        console.log("아주 휼륭해요!");
        break;
        case "B":
        console.log("잘했어요!");
        break;
        case "C":
        case "D":
        console.log("조금 더 노력해요!");
        break;
        case "F":
        console.log("다시 도전해요!");
        break;
}

  // 4. 합격 여부 — 값 하나를 고르므로 삼항 연산자
  // const result

  // console.log(`점수 ${score}점 → ${grade}등급 (${result})`);
  console.log(message);
 const passed = score >= 60 ? "합격" : "불합격";
 console.log(passed);