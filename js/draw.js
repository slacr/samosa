$(document).ready(function() {
   var paper = Raphael(10, 10, 500, 500);
   
   var pix = paper.rect(20, 20, 50, 50);
   pix.attr({
      fill: "green"
   });

   function sequence_char(seq_num, char_pos) {
      // An object representing a character in a sequence.
      this.seq_num = seq_num;
      this.char_pos = char_pos;
      this.color = "red";

      this.setColor = setColor;
      function setColor(color) {
         this.color = color;
      }
   }
});
