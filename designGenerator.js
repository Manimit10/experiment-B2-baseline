const designData = [
  {
    name: 'Air Resistance and Gravity',
    description:
      'Describe the effects of air resistance and gravity on the arrow to memorize how a better result can be achieved. ',
    Author: '',
    link: './previews/preview1.html',
    Time: '',
  },
  {
    name: 'Compass in classroom',
    description: 'list items required to create a compass in the classroom and describe the steps.',
    Author: '',
    link: './Previews/preview2.html',
    Time: '',
  },
  {
    name: 'Plant vocabulary',
    description: 'Design a list of vocabulary cards related to plants.',
    Author: '',
    link: './Previews/preview3.html',
    Time: '',
  },
  {
    name: 'Create Career Path by Gathering Data',
    description:
      'Through research, gather data about aspiration of family members and invent career paths for these people and show the skills needed.',
    Author: '',
    link: './Previews/preview4.html',
    Time: '',
  },
  {
    name: 'Conductor and Insulators',
    description: 'Develop a set of conductors and insulators.',
    Author: '',
    link: './Previews/preview5.html',
    Time: '',
  },
  {
    name: 'Hypothesis of eukaryotic',
    description: 'Design a hypothesis to study the effect of fungal cells in eukaryotic.',
    Author: '',
    link: './Previews/preview6.html',
    Time: '',
  },
];

function age(birthYear) {
  let calculatedAge = new Date().getFullYear() - birthYear;
  if (calculatedAge == 1) {
    return '1 year old';
  } else if (calculatedAge == 0) {
    return 'Baby';
  } else {
    return `${calculatedAge} years old`;
  }
}

function foods(foods) {
  return `
  <h4>Favorite Foods</h4>
  <ul class="foods-list">
  ${foods.map((food) => `<li>${food}</li>`).join('')}
  </ul>
  `;
}
function designTemplate(design) {
  return `
    <div class="mt-5 col-sm-1 col-md-1 col-lg-3 col-xl-3">
     <div class="card" style="18rm">
      <div class="card-body">
        <h5 class="card-title">${design.name}</h5>
         <p class="card-text">${design.description} </p>
              <a href="${design.link}" class="btn btn-primary btn-sm"
                >Preview</a
              >
              <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#confirmModal">
          Select
        </button>
            </div>
          </div>
        </div>
    `;
}
// function petTemplate(pet) {
//   return `
//       <div class="animal">
//       <img class="pet-photo" src="${pet.photo}">
//       <h2 class="pet-name">${pet.name} <span class="species">(${pet.species})</span></h2>
//       <p><strong>Age:</strong> ${age(pet.birthYear)}</p>
//       ${pet.favFoods ? foods(pet.favFoods) : ''}
//       </div>
//     `;
// }

// document.getElementById('app').innerHTML = `
//     <h1 class="app-title">Pets (${designData.length} results)</h1>
//     ${designData.map(petTemplate).join('')}
//     <p class="footer">These ${designData.length} pets were added recently. Check back soon for updates.</p>
//   `;
document.getElementById('app').innerHTML = `
  
  ${designData.map(designTemplate).join('')}
  
`;
