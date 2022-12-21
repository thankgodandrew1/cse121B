const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",

    sections:[{sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'},
  ], 
  enrollStudent: function (sectionNum){
    const sectionIndex = this.sections.findIndex((section) =>
    section.sectionNum == sectionNum);
    if (sectionIndex >=  0) {
      this.sections[sectionIndex].enrolled++;
      renderSections(this.sections);
    }          
  },
  dropStudent: function(sectionNum) {
    //find the right section....Array.findIndex will work here
    const sectionIndex = this.sections.findIndex((
    section) => section.sectionNum == sectionNum);
    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled--;
      renderSections(this.sections);
    }
  },
  };

    function setCourseInfo(course){
    const name = document.getElementById('courseName');
    const code = document.getElementById('courseCode');
    name.textContent = course.name;
    code.textContent = course.code;

  }
  // Create another function that will output the sections into 
  // the table identified by #sections. You should pass the sections you want rendered into the function.
  function renderSections(sections){
    const html = sections.map(
      (section) => `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
    );
    document.getElementById('sections').innerHTML = html.join('')
  }
  document.querySelector('#enrollStudent').addEventListener('click', function (){
    const sectionNum = document.querySelector('#sectionNumber').value;
    aCourse.enrollStudent(sectionNum);
  });
  document.querySelector('#dropStudent').addEventListener('click', function (){
    const sectionNum =document.querySelector('#sectionNumber').value;
    aCourse.dropStudent(sectionNum);
  });

setCourseInfo(aCourse);
renderSections(aCourse.sections);

// Take a look at the enrollStudent and dropStudent methods. Notice how much of the code is the same!

// How could you refactor (change) these methods to have less duplication? How could they be combined into one function? Make that change.

// Solution 3
// changeEnrollment: function (sectionNum, add = true) {
//     // find the right section...Array.findIndex will work here
//     const sectionIndex = this.sections.findIndex(
//       (section) => section.sectionNum == sectionNum
//     );
//     if (sectionIndex >= 0) {
//       if (add) {
//         this.sections[sectionIndex].enrolled++;
//       } else {
//         this.sections[sectionIndex].enrolled--;
//       }
//       renderSections(this.sections);
//     }
//   }
// let aboutMe = {
//   'My Name': {name: 'ThankGod Andrew'}, 
//   'image': {photo: 'images/myself.png'}, 
//   'Foods': {favoriteFoods: ['Fried Rice', 'Egusi Soup', 'African Salad', 'Fried Chicken']}, 
//   'hobby': {hobbies: ['Reading', 'Gaming', 'Playing Basketball', 'writing']}, 
//   'places': {placesLived: [{'place': 'Port Harcourt', 'length': '12 years'}, {'place': 'Lagos State', 'length': '2months'}, {'place': 'Benin City', 'length': '3 months'}]
// }
