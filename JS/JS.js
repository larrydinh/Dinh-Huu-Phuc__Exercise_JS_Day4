/** 1: sorting
 * 
Input: X, Y, Z 
Output: A, B, C
Action: 
1. If (X>Y): 
.True: Judge Y and Z. If X>Z => X>Y and X>Z, X is the maximum number => set X =C. Then judge if (Y<Z) => Y = A, Z =B
. False(X<Y): Judge X and Z. If X>Z =>Y>X and Y>Z, Y is the maximum number => set Y=C. Since X >Z => X=B, Z =A
*/
console.log(
  "Bai 1____________________________________________________________________________________________"
);

document.getElementById("btnSort").addEventListener("click", function () {
  var X = document.getElementById("numX").value;
  var Y = document.getElementById("numY").value;
  var Z = document.getElementById("numZ").value;
  var A,
    B,
    C = 0;
  if (X > Y) {
    if (X > Z) {
      C = X;
      if (Y < Z) {
        A = Y;
        B = Z;
      } else {
        (A = Z), (B = Y);
      }
    } else {
      C = Z;
      B = X;
      A = Y;
    }
  } else {
    if (X > Z) {
      C = Y;
      B = X;
      A = Z;
    } else {
      if (Y < Z) {
        C = Z;
        B = Y;
        A = X;
      } else {
        C = Y;
        B = Z;
        A = X;
      }
    }
  }
  document.getElementById("txtDisp").innerHTML =
    "Các số được sắp xếp tăng dần là " + A + "," + B + "," + C;
});

console.log(
  "Bai 2____________________________________________________________________________________________"
);

/** Exercise 2: greeting 
 * 
Input: dad, mum, sis, me
Output: text
Action: display "Hé lô " + text;" when people make a choice
*/

document.getElementById("btnAccess").addEventListener("click", function () {
  var dad = document.getElementById("dad");
  var mum = document.getElementById("mum");
  var sis = document.getElementById("sis");
  var me = document.getElementById("me");
  var text = "";
  if (dad.checked) {
    text = "dad";
    document.getElementById("txtDisp2").innerHTML = "Hé lô " + text;
  } else if (mum.checked) {
    text = "mum";
    document.getElementById("txtDisp2").innerHTML = "Hé lô " + text;
  } else if (sis.checked) {
    text = "sis";
    document.getElementById("txtDisp2").innerHTML = "Hé lô " + text;
  } else if (me.checked) {
    text = "me";
    document.getElementById("txtDisp2").innerHTML = "Hé lô " + text;
  } else {
    console.log("ko xac dinh");
  }
});
console.log(
  "Bai 3____________________________________________________________________________________________"
);

/** Exercise 3: greeting 
 * 
Input: numA1, numB1, numC1, numA1_mod, numB1_mod, numC1_mod
Output: countOdd, countEven
Action: 
numA1_mod = numA1 % 2;
numB1_mod = numB1 % 2;
numC1_mod = numC1 % 2;
 if ((numA1_mod == 0)) {
    countEven++;
  } else {
    countOdd++;
*/
document.getElementById("btnCount").addEventListener("click", function () {
  var numA1 = parseInt(document.getElementById("numA").value);
  var numB1 = parseInt(document.getElementById("numB").value);
  var numC1 = parseInt(document.getElementById("numC").value);
  var countOdd = 0;
  var countEven = 0;
  var numA1_mod = numA1 % 2;
  console.log(numA1_mod);
  var numB1_mod = numB1 % 2;
  console.log(numB1_mod);
  var numC1_mod = numC1 % 2;
  console.log(numC1_mod);
  if (numA1_mod == 0) {
    countEven++;
  } else {
    countOdd++;
  }
  if (numB1_mod == 0) {
    countEven++;
  } else {
    countOdd++;
  }
  if (numC1_mod == 0) {
    countEven++;
  } else {
    countOdd++;
  }
  console.log("so chan la " + countEven);
  console.log("so le la " + countOdd);
  document.getElementById("txtDisp3").innerHTML =
    "Số lượng số chẵn là " + countEven + "; " + "Số lượng số lẻ là " + countOdd;
});

console.log(
  "Bai 4____________________________________________________________________________________________"
);

/**
 * Input: AB, BC, AC
 *Output:
 *Condition (to be a triangle)
 *    AB, BC, AC > 0
 *    AB+BC -AC >0
 *    AB+AC -BC >0
 *    BC+ AC - AB >0
 */
document.getElementById("btnClassify").addEventListener("click", function () {
  var AB = parseFloat(document.getElementById("canhA").value);
  var BC = parseFloat(document.getElementById("canhB").value);
  var AC = parseFloat(document.getElementById("canhC").value);
  if (
    AB > 0 &&
    BC > 0 &&
    AC > 0 &&
    (AB + BC - AC) > 0 &&
    (AB + AC - BC) > 0 &&
    (BC + AC - AB) > 0
  ) {
    if (AB == BC && AB == AC) {
      console.log("Đây là một tam giác đều");
      document.getElementById("txtDisp4").innerHTML = "Đây là một tam giác đều";
    } else if (
      AB == Math.sqrt(AC * AC + BC * BC) ||
      BC == Math.sqrt(AC * AC + AB * AB) ||
      AC == Math.sqrt(AB * AB + BC * BC)
    ) {
      console.log("Đây là một tam giác vuông");
      document.getElementById("txtDisp4").innerHTML = "Đây là một tam giác vuông";
    } else if (AB == BC || AB == AC || AC == BC) {
      console.log("Đây là một tam giác cân");
      document.getElementById("txtDisp4").innerHTML = "Đây là một tam giác cân";
    } else {
      console.log("Đây là một tam giác thường");
      document.getElementById("txtDisp4").innerHTML = "Đây là một tam giác thường";
    }
  } 
  else { console.log("Đây không phải là tam giác");
  document.getElementById("txtDisp4").innerHTML = "Đây không phải là tam giác";}
});
