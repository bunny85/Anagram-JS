$(document).ready(function() {
    /* function to verify if anagram*/
      var anagram = function(str1, str2){
      return str1.split("").sort().join("") === str2.split("").sort().join("");
    }
    
    $('.checkAna').on('click', function(e) {
        e.preventDefault();
        if($('#string1').val() == '') {
            $('#string1').addClass('error');
            if($('#string2').val() == '') {
                $('#string2').addClass('error');
            }
            $('.results').empty();
            $('.results').hide();
        } else {
            $('#string1').removeClass('error');
            if($('#string2').val() == '') {
                $('#string2').addClass('error');
                $('.results').empty();
                $('.results').hide();
            } else {
                $('#string2').removeClass('error');
                var isAnagram = anagram($('#string1').val(), $('#string2').val());
                $('#string1').val('');
                $('#string2').val('')
                $('.results').show();
                $('.results').empty().append('Is Anagram: ' + isAnagram);
            }
        }
    });   
});