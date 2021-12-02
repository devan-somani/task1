
// var review=[];
// var rating_given=[];
// $(document).ready(function(){
//       $('input[type="checkbox"]').click(function(){
//             if($(this).prop("checked") == false){
//                   $("#js").hide();
//                   $("rating").hide();
//             }
//             else{
//                   debugger;
//             document.getElementById("Reviews paragraph").innerHTML=review.toString();           
//             }
//       })
// });

// $(document).ready(function(){
//       $("#Save").click(function(){
//       var text=document.getElementById("reviews").value;
//       review.push(text);
//       $('input[type="checkbox"]').click(function(){
//             if($(this).prop("checked") == false){
//                   $("#js").hide();
//             }
//             else{
//             document.getElementById("Reviews paragraph").innerHTML=review.toString();           
//             }
//             })
//       })

// });   



$(document).ready(function(){
      var review=[];
      var series_ID=[];
  
      
      // $("#div_").hide();
      $("#Bold").click(function(){
            var text=document.getElementById("reviews");
            if( text.style.fontWeight  == "bolder" ) { 
                  text.style.fontWeight  = "none"; 
            }
            else { 
                  text.style.fontWeight  = "bolder";
                  console.log(text)
            } 
      })

      $("#Italic").click(function(){
            var text=document.getElementById("reviews");
            if( text.style.fontStyle  == "italic" ) { 
                  text.style.fontStyle  = "none"; 
            }
            else { 
                  text.style.fontStyle  = "italic";
            } 
      })

      $("#Underline").click(function(){
            var text=document.getElementById("reviews");
            if( text.style.textDecoration == "underline" ) { 
                  text.style.textDecoration = "none"; 
            }
            else { 
                  text.style.textDecoration = "underline";
            } 
      })

      $("#Save").click(function(){
           
            var text = $('#reviews').val();
            var text1 = $('#Reviews_paragraph').val();
            text1+= "<br>"+text;
            review.push(text);
              
            $('#Reviews_paragraph').append(text1);

      })
      
       function print(r) {
            document.getElementById("Reviews_paragraph").innerHTML=" ";    
            for(var i=0;i<r.length;i++){
                  var id=new Object();
                  var temp=i+1;
                  id.post=r[i];
                  id.comment="";
                  series_ID.push(id);
                  var x=r[i]+"<br>"+series_ID[i].comment+"<br>"+`<textarea type=text id=${i} placeholder=Comment></textarea><button id=b${temp}>Add</button>`+"<br>";   
                  $('#Reviews_paragraph').append(x); 
                  $("#b"+temp).click(function(){ 
                        var j=temp-1;
                        var text = $('#'+j).val();  
                        series_ID[j].comment=text;
                        console.log(series_ID);
                        // var x=r[i]+"<br>"+series_ID[i].comment+"<br>"+`<textarea type=text id=${i} placeholder=Comment></textarea><button id=b${temp}>Add</button>`+"<br>";
                        // $('#Reviews_paragraph').append(x);
                  });
                  

            }

            
      }
  

      $("#comments").click(function(){
            var checkBox = document.getElementById("comments");
           
            if (checkBox.checked == true){
                  print(review);
                       
            }
            else
            {
                  $("#div_").hide();
            }
      })
      

})

