/**
 * 2nd Attempt at E27: Five problems every software engineer should be able to solve (Part 2)
 * 12:24
 * Created by Mary Santabarbara on 9/19/2016.
 */

const alpList = ['a', 'b', 'c'];
const numList = [1, 2, 3];

function zipList(list1, list2) {
  const combinedList = [];
  let index = 0;
  while (index < list1.length) {
    combinedList.push(list1[index], list2[index]);
    index += 1;
  }
  return combinedList;
}

console.log(zipList(alpList, numList));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(alpList, numList));
