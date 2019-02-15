'use strict';

const apiKey='fghQoC7RT6qn61skgapP0EvBYdZC1Tei1tGPG96h'
const apiUrl='https://developer.nps.gov/api/v1/parks'


function handleSubmit(){
  $('form').submit(
    event => {
    event.preventDefault();
    $('.result').empty()
    const state=$('.state').val()
    const searchNumber=$('.searchNumber').val()
    displayParks(state,searchNumber)
  });
}

function formatUrl(params){
  const queryItems = Object.keys(params)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&');
}

function displayParks(state,searchNumber){
  const params={
    api_key:apiKey,
    limit: searchNumber,
    stateCode: state,
    start:0
  }
  const queryString=formatUrl(params)
  const searchUrl=apiUrl+'?'+queryString

  getPark(searchUrl)
// remove hidden result section
}
function getPark(url){
  fetch(url)
  .then(response => response.json())
  .then(function(responseJson){
    console.log(responseJson)
    for(let i=0; i<responseJson.data.length; i++){
      $('.results').append(
        `<h2>${responseJson.data[i].name}</h2>
        <p>${responseJson.data[i].description}</p>
        <a href=${responseJson.data[i].url}>${responseJson.data[i].url}</a>`
      )
    }    
  })
}


$(handleSubmit)

