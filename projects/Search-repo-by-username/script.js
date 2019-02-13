function handleSubmit(){
    $('form').submit(
      event => {
      event.preventDefault();
      $('.result').empty()
      const username=$('.username').val()
      const url=`https://api.github.com/users/${username}/repos`
      getRepo(url)
    });
  }
  
  function getRepo(url){
    fetch(url)
    .then(response => response.json())
    .then(function(responseJson){
      const repoList=[]
      for (let i=0; i<responseJson.length; i++){
        repoList.push(responseJson[i].name)
      }
      console.log(repoList)
      displayRepo(repoList)
    })
  }
  
  function displayRepo(list){
    for(let i=0; i<list.length; i++){
      $('.result').append(`<li>${list[i]}</li>`)
    }
  }
  
  $(handleSubmit)