function btnDisable() {
  $('#cap').attr('disabled', true)
  $('#esp').attr('disabled', true)
  $('#milk').attr('disabled', true)
  $('#water').attr('disabled', true)
  $('#add').attr('disabled', true)
  $('#cancel').css('background-color', '#faa')
}

function btnEnable() {
  $('#cap').attr('disabled', false)
  $('#esp').attr('disabled', false)
  $('#milk').attr('disabled', false)
  $('#water').attr('disabled', false)
  $('#add').attr('disabled', false)
  $('#cancel').css('background-color', '')
}