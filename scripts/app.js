console.log('script is connected')


//==================================================
//Function to grab API data and append it to the DOM
//Arguments take the index number of the class and the location of the classes photo
//API into is pulled and appened to various places in the DOM
//===================================================
const $getCharInfo = (index, pic) => {
  $.ajax({
      url: "https://api-beta.open5e.com/classes/"
  }).then(
      (data)=>{
        $('.class-info, .photo-box, .misc-info').css('display', 'flex');
        $('.photo').attr('src', pic).hide().fadeIn(1000)
        $('.class-info h1').text(`${data.results[index].name}:`.toUpperCase()).hide().fadeIn(2000);
        $('.class-info p').text(data.results[index].desc).hide().fadeIn(2000);
        $('.dice').text(' ' + data.results[index].hit_dice).hide().fadeIn(2500);
        $('.spells').text(' ' + data.results[index].spellcasting_ability).hide().fadeIn(2500);
        $('.prof').text(' ' + data.results[index].prof_saving_throws).hide().fadeIn(2500);
        $('.armor').text(' ' + data.results[index].prof_armor).hide().fadeIn(2500);
        $('.skills').text(' ' + data.results[index].prof_skills).hide().fadeIn(2500);
        $('.box-2 span').text(' ' + data.results[index].archetypes[0].name).hide().fadeIn(2500);
        $('.box-2 p').text(' ' + data.results[index].archetypes[0].desc).hide().fadeIn(2500);
      },
      ()=>{
          console.log('bad');
      }
  );
}

$(() => {
//Fades in the NavBar upon page load
$('.navbar').hide().fadeIn(1000);

//Listener to pull Barbarian API data and add it to the DOM
$('#barbarian').on('click', () => { $getCharInfo(0, "css/images/barbarian.png") })

//Listener to pull Bard API data and add it to the DOM
$('#bard').on('click', () => { $getCharInfo(1, "css/images/bard.png") })

//Listener to pull Cleric API data and add it to the DOM
$('#cleric').on('click', () => { $getCharInfo(2, "css/images/cleric.png") })

//Listener to pull Druid API data and add it to the DOM
$('#druid').on('click', () => { $getCharInfo(3, "css/images/druid.png") })

//Listener to pull Fighter API data and add it to the DOM
$('#fighter').on('click', () => { $getCharInfo(4, "css/images/fighter.png") })

//Listener to pull Monk API data and add it to the DOM
$('#monk').on('click', () => { $getCharInfo(5, "css/images/monk.png") })

//Listener to pull Paladin API data and add it to the DOM
$('#paladin').on('click', () => { $getCharInfo(6, "css/images/paladin.png") })

//Listener to pull Ranger API data and add it to the DOM
$('#ranger').on('click', () => { $getCharInfo(7, "css/images/ranger.png") })

//Listener to pull Rogue API data and add it to the DOM
$('#rogue').on('click', () => { $getCharInfo(8, "css/images/rogue.png") })

//Listener to pull Sorcerer API data and add it to the DOM
$('#sorceror').on('click', () => { $getCharInfo(9, "css/images/sorcerer.png") })

//Listener to pull Warlock API data and add it to the DOM
$('#warlock').on('click', () => { $getCharInfo(10, "css/images/warlock.png") })

//Listener to pull Wizard API data and add it to the DOM
$('#wizard').on('click', () => { $getCharInfo(11, "css/images/wizard.png") })



//Listener to open the modal when the About button is clicked
$('.modal-btn').on('click', () => {
  $('#modal-box').css('display', 'block');
  $('.container').css('filter', 'blur(3px)')
  })

//Listener to close the modal when the X is clicked
$('.close').on('click', () => {
  $('#modal-box').css('display', 'none')
  $('.container').css('filter', 'none')
})

//Listener to open the battle page
$('.battle').on('click', () => {
  window.open('battle.html', '_blank')
})

});
