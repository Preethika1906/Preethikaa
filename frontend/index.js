console.log("Hello from JS");
alert("Hello from JS");
const users=[
    {
        "name":"Jane Doe",
        "gender" : "Female",
        "image": "./images/jane.png"

    },
    {
        "name": "John Doe",
        "gender": "Male",
        "image":"./images/john.png"
    },
]
let cuUserId=0;

function toggle(){
    if(cuUserId==0){
        cuUserId=1;
    }
    else
        cuUserId=0;

    document.getElementById("img").src=users[cuUserId].image;
    document.getElementById("card-name").innerText=users[cuUserId].name;
    document.getElementById("card-gender").innerText = users[cuUserId].gender;


}

function getRandomUser()
{
  fetch("https://randomuser.me/api")
    .then(function (data){
      return data.json()
    })
    .then(function (parsedData){
      let gender = parsedData.results[0].gender;

      let first = parsedData.results[0].name.first;
      let last = parsedData.results[0].name.last;
      let name = first  + " " + last;
      let imageUrl = parsedData.results[0].picture.large;

      document.getElementById("card-gender").innerText=gender;
      document.getElementById("card-name").innerText=name
      document.getElementById("img").src=imageUrl

    })
    .catch(function(error) {
            console.log(error);
            alert("Failed to fetch user");
        });
}