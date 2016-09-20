/**
 * Practice Wod: E27: Five problems every software engineer should be able to solve (Part 2)
 * 25:15
 * Created by Mary Santabarbara on 9/19/2016.
 */


const alphaList = ['a', 'b', 'c'];
const numList = [1, 2, 3];

function zipList(listOne, listTwo){

  let combinedList = [];
  let i = 0;

  while(i < listOne.length){
    combinedList.push(listOne[i]);
    combinedList.push(listTwo[i]);
    i += 1;
  }

  return combinedList;
}

console.log(zipList(alphaList, numList));

function zipListTheSimpleWay(listOne, listTwo) {
  return _.zip(listOne, listTwo);
}

console.log(zipList(alphaList, numList));