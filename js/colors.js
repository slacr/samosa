$( document ).ready(function() {
  $('table.sequence').each(function (iseq) {
    // Add class sequence-n to each sequence
    $(this).addClass("sequence-" + iseq);
    $(this).find('tr.row').each(function (irow) {
      // Add class row-n to each row for each sequence
      $(this).addClass("row-" + irow);
    });
    $(this).find('td.nucleotide').each(function(inuc) {
      // Add class nucleotide-n to each nucleotide for each sequence
      $(this).addClass("char-" + inuc); 
    });
  });
});
