let clicked = false;
$("document").ready(function(){
    $('.mad-libs > button:nth-child(5)').on('click',function(e){
        clicked = true;
        let str1 = $("#name").val();
        let str2 = $("#name2").val();
        let verb = $("#verb").val();
        let adverb = $("#adverb").val();
        let ans = `<div id="ans">Lorem ipsum ${str1} dolor sit ${str2} amet consectetur ${verb} adipisicing elit. Eum, ${adverb} praesentium?</div>`;
        // $('body input').reset();
        // $("#name2").val('');
        // $("#verb").val('');
        // $("#adverb").val('');
        if (clicked) { 
            $("#ans").remove();
            $(".output").append(ans);
        } else {
            $(".output").append(ans);
        }
        
        // console.log("basyldy");
        // console.log(str1 + str2 + verb + adverb);
    });
});

let clicked1 = false;
$('document').ready(function() {
    $('#button-calculate').on('click', function(e) {
        clicked1 = true;
        var val1 = parseInt ($('#input-width').val());
        var val2 = parseInt ($('#input-height').val());
        var val3 = parseInt ($('#number-colors').val());
        // console.log(typeof val1);
        // console.log(val1);
        // console.log(val2);
        // console.log(val3);
        var ans = ((val1 * val2 * val3 / 1024) / 8);
        var ans1 = `<div id="ans1">File is ${ans.toFixed(1)}KB which is OK</div>`
        if (clicked1) { 
            $("#ans1").remove();
            $(".output").append(ans1);
        } else {
            $(".output").append(ans1);
        }
        console.log(ans.toFixed(1));
    })
});
$.fn.nval = function() {
    return Number(this.val())
};

