const saveButtons = document.querySelectorAll('.saveBtn');

saveButtons.forEach(button => {
  button.addEventListener('click', function() {
    const timeBlock = this.closest('.time-block');
    const id = timeBlock.getAttribute('id');
    const description = timeBlock.querySelector('.description').value;

    localStorage.setItem(id, description);
  });
});

window.onload = function() {

  const textareas = document.querySelectorAll('.description');


  textareas.forEach(textarea => {
    const timeBlockId = textarea.parentNode.id; 
    const data = localStorage.getItem(timeBlockId); 
    if (data) {
      textarea.value = data;
    }
  });
}



var currentHour = dayjs().hour();


$('.time-block').each(function() {

var blockHour = parseInt($(this).attr('id').split('-')[1]);

console.log('blockHour:', blockHour);
console.log('currentHour:', currentHour);


if (blockHour < currentHour) {
  $(this).addClass('past');
} else if (blockHour === currentHour) {
  $(this).addClass('present');
} else {
  $(this).addClass('future');
}
});

var currentDate = dayjs().format('dddd, MMMM D');

$('#currentDay').text(currentDate);
