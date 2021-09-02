
 const errorDiv=document.getElementById('error');
const searchCountries =()=>{
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;

    searchInput.value='';
    if(searchText===''){
     errorDiv.innerText="search field cannot be empty";
    }
 const spinner = document.getElementById('spinner');
spinner.classList.remove('d-none');
    const url=(`https://restcountries.eu/rest/v2/name/${searchText}`);
    fetch(url)
    .then(res => res.json())
    .then(data => searchCountriesName(data))
  }
//Error handaling
    
const searchCountriesName =(countries)=>{
  if(countries.status === 404)
    {
      errorDiv.innerText = 'No Result Found';
    }
    else{
      errorDiv.innerText ='';
    } 

    const countryField = document.getElementById('country-field');
    // const errorDiv = document.getElementById('error');
   countryField.innerHTML='';
   for(const country of countries){
    const countries =document.createElement('div');
    countries.classList.add('col-md-3');
    countries.innerHTML=`
                <img src="${country.flag}" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${country.name}</h5>
                  <button onclick="showDetails('${country.alpha3Code}')">learn More</button>
                </div>
              
   `;
   countryField.appendChild(countries);
   spinner.classList.add('d-none');
}
}
const showDetails=(alphaCode)=>{
  const url=`https://restcountries.eu/rest/v2/alpha/${alphaCode}` ;
  fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data))
  
}
 const displayDetails = (value) =>{
 const showInformation = document.getElementById('show-details');
 showInformation.innerHTML='';
 const createElement = document.createElement('div');
 createElement.classList.add('col-6');
 createElement.innerHTML=`
 <h1>${value.name}</h1>
 <img src="${value.flag}" class="card-img-top img-fluid" alt="...">
 <h5>${value.capital}</h5>
 <p>${value.altSpellings}</p>
 `;
 showInformation.appendChild(createElement);
 }
 