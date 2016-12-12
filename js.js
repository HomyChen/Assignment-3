$(document).ready(function(){
    console.log('ready');
    
    var bottom = document.getElementById("bottom");
    
    var name_check = /^[a-zA-Z0-9]{8,15}$/;
    
    var imglink_check = /.(jpg|png|gif)$/;
    
    var movie_check = /^[a-zA-Z ]{1,100000}$/;
    
    var comment_check = /^[a-zA-Z0-9 .,?!]{1,100}$/;
    
    var submit = document.getElementById("submit");
    var username = document.getElementById("username");
    var img_link = document.getElementById("img_link");
    var movie_title = document.getElementById("movie_title");
    var comment = document.getElementById("comment");
    var error_display = document.getElementById("error_display");
    
    var username_clear = false;
    var img_link_clear = false;
    var movie_title_clear = false;
    var comment_clear = false;
    
    username.onkeyup = function(){
        if(name_check.test(username.value) == true){
            username.style.color = 'green';
            error_display.innerHTML = '';
            username_clear = true;
        }else if(username.value == ''){
            username_clear = false;
            error_display.innerHTML = 'Username must be filled';
        }else{
            username.style.color = 'red';
            error_display.innerHTML = 'Username must be 8 - 15 characters and contain only alphabets or numbers';
            username_clear = false;
        }
    }
    
    img_link.onkeyup = function(){
        if(imglink_check.test(img_link.value) == true){
            img_link.style.color = 'green';
            error_display.innerHTML = '';
            img_link_clear = true;
        }else if(img_link.value == ''){
            img_link_clear = false;
            error_display.innerHTML = 'Image link must be filled';
        }else{
            img_link.style.color = 'red';
            error_display.innerHTML = 'Image link must end in .jpg, .png, or .gif';
            img_link_clear = false;
        }
    }
    
    movie_title.onkeyup = function(){
        if(movie_check.test(movie_title.value) == true){
            movie_title.style.color = 'green';
            error_display.innerHTML = '';
            movie_title_clear = true;
        }else if(movie_title.value == ''){
            movie_title_clear = false;
            error_display.innerHTML = 'Movie title must be filled';
        }else{
            movie_title.style.color = 'red';
            error_display.innerHTML = 'Movie title may only contain alphabets and space';
            movie_title_clear = false;
        }
    }
    
    comment.onkeyup = function(){
        if(comment_check.test(comment.value) == true){
            comment.style.color = 'green';
            error_display.innerHTML = '';
            comment_clear = true;
        }else if(comment.value == ''){
            comment_clear = false;
            error_display.innerHTML = 'Comment must be filled';
        }else{
            comment.style.color = 'red';
            error_display.innerHTML = 'Comments may only contain alphabets, numbers, space, and punctuation (,.?!)';
            comment_clear = false;
        }
    }
    
    submit.onclick = function(){
        if (username_clear == true && img_link_clear == true && movie_title_clear == true && comment_clear == true){
            var display = document.createElement("div");
            var display_comment = document.createElement("div");
            bottom.appendChild(display);
            display.style.backgroundColor = 'aliceblue';
            display.style.width = '100vw';
            display.style.height = '40vh';
            display.style.border = '2px black solid';
            display.appendChild(display_comment);
            display_comment.innerHTML = comment.value;
            display_comment.style.fontFamily = 'Calibri';
            display_comment.style.position = 'absolute';
            display_comment.style.marginTop = '20vh';
            display_comment.style.marginLeft = '15vw';
            display_comment.style.fontSize = '30px';
            var display_img = document.createElement("img");
            display.appendChild(display_img);
            display_img.style.position = 'absolute';
            display_img.style.width = '10vw';
            display_img.style.height = 'auto';
            display_img.src = img_link.value;
            display_img.style.marginTop = '1vw';
            display_img.style.marginLeft = '2vh';
            $.ajax({
            url: "http://www.omdbapi.com/?s="+movie_title.value,
            dataType: "jsonp",
            success: function(resp){
                var display_poster = document.createElement("img");
                display_poster.src = resp.Search[0].Poster;
                display.appendChild(display_poster);
                display_poster.style.position = 'absolute';
                display_poster.style.width = '7vw';
                display_poster.style.height = 'auto';
                display_poster.style.marginLeft = '93vw';
            }    
            })
            var display_name = document.createElement("div");
            display.appendChild(display_name);
            display_name.style.position = 'absolute';
            display_name.style.width = '20vw';
            display_name.style.marginLeft = '80vw';
            display_name.style.height = '10vh';
            display_name.style.marginTop = '30vh';
            display_name.style.fontFamily = 'Calibri';
            display_name.style.fontSize = '45px';
            display_name.style.color = 'dimgrey';
            display_name.style.fontWeight = 'bold';
            display_name.innerHTML = username.value;
            display_name.style.border = '1px gray solid';
            display_name.style.borderRadius = '5px';
            display_name.style.textAlign = 'center';
        }else{
            error_display.innerHTML = 'Please make sure you filled everything properly.';
        }   
    }
    
    
});