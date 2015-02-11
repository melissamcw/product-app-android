$(document).ready(function() {

              //store hash value for querying json array
              window.hashvalue = window.localStorage.getItem("productIndexSelected");

              paparesults(window.jsonproductsarray);


              //setup callback method for when papa parse is finished
              function paparesults(results){
                    
                    //run through json array and dump all the elements for the slider
                    $.each( results, function( key, value ) {
                        if( value['vertical'] == window.localStorage.getItem("verticalcategory")  ){
                            $('.swiper-wrapper').append('<div class="swiper-slide"><div class="product-slide"><div class="blue-box-product"> <h1>'+ value['name'] +'</h1> 
                              <img src="'+ value['imagefilename'] +'" alt="" /> <p>'+ value['description'] +'</p> <div class="datasheet-download-btn">
                              <a href="'+ value['pdf'] +'" title="">Share Datasheet</a></div></div></div>'
                            );                             
                        }
                    });               

                    //once we've run through the csv entries and added them to the dom, finally call and enable the swiper
                    window.mySwiper = $('.product-slider').swiper({
                        mode:'horizontal',
                        loop: false,
                        onSlideChangeEnd: function () {
                              $('#next_swiper').show();
                              $('#previous_swiper').show();
                              if(window.mySwiper.activeIndex==0){
                                    $('#previous_swiper').hide()
                              }
                              if(window.mySwiper.activeIndex==window.mySwiper.slides.length-1){
                                    $('#next_swiper').hide()
                              }
                         }
                    });

                    //once the slider is setup move to the previously selected product via it's index.
                     window.mySwiper.swipeTo( window.localStorage.getItem("productIndexSelected"), 10, true);

    }//closing paparesults

});