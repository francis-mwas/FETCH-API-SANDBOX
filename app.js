document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getApi);

//function to get text.
function getText(){
  fetch('test.txt')
  .then(function(response){
     return response.text();
  })
  .then(function(data){
    console.log(data);
    document.getElementById('output').innerHTML = data;
  })
}

//function to get json data.
function getJson(){
  fetch('posts.json')
  .then(function(response){
     return response.json();
  })
  .then(function(data){
    let output = '';
    data.forEach(data => {
      output +=`<li>${data.title}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch((err)=>{
    console.log(err);
  })

}


//function to get api from github api.
function getApi(){
  fetch('https://api.github.com/users')
  .then(function(response){
     return response.json();
  })
  .then(function(data){
    let output = '';
    data.forEach(users => {
      output +=`<li>${users.login}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch((err)=>{
    console.log(err);
  })

}
