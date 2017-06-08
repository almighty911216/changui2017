var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4&maxResults=6&type=video&videoDefinition=any&key=AIzaSyBHttiMMRLEf02TbNQLKcLk-Y5NmN2OKN0",
  "method": "GET",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "acc1273d-08e9-d2e1-48f4-95944b5970c9"
  }
}

$.ajax(settings).done(function (response) {
  $('#img1').attr('src', response.items[0].snippet.thumbnails.high.url);
  $('#img_title1').text(response.items[0].snippet.title);
  $('#img_content1').text(response.items[0].snippet.title);
  var urlstr = "https://www.youtube.com/watch?v=" + response.items[0].id.videoId;
  $('#img_uhref1').attr('href', urlstr);
  $('#img_dhref1').attr('href', urlstr);

  $('#img2').attr('src', response.items[1].snippet.thumbnails.high.url);
  $('#img_title2').text(response.items[1].snippet.title);
  $('#img_content2').text(response.items[1].snippet.title);
  urlstr = "https://www.youtube.com/watch?v=" + response.items[1].id.videoId;
  $('#img_uhref2').attr('href', urlstr);
  $('#img_dhref2').attr('href', urlstr);

  $('#img3').attr('src', response.items[2].snippet.thumbnails.high.url);
  $('#img_title3').text(response.items[2].snippet.title);
  $('#img_content3').text(response.items[2].snippet.title);
  urlstr = "https://www.youtube.com/watch?v=" + response.items[2].id.videoId;
  $('#img_uhref3').attr('href', urlstr);
  $('#img_dhref3').attr('href', urlstr);

  $('#img4').attr('src', response.items[3].snippet.thumbnails.high.url);
  $('#img_title4').text(response.items[3].snippet.title);
  $('#img_content4').text(response.items[3].snippet.title);
  urlstr = "https://www.youtube.com/watch?v=" + response.items[3].id.videoId;
  $('#img_uhref4').attr('href', urlstr);
  $('#img_dhref4').attr('href', urlstr);

  $('#img5').attr('src', response.items[4].snippet.thumbnails.high.url);
  $('#img_title5').text(response.items[4].snippet.title);
  $('#img_content5').text(response.items[4].snippet.title);
  urlstr = "https://www.youtube.com/watch?v=" + response.items[4].id.videoId;
  $('#img_uhref5').attr('href', urlstr);
  $('#img_dhref5').attr('href', urlstr);

    $('#img6').attr('src', response.items[5].snippet.thumbnails.high.url);
  $('#img_title6').text(response.items[5].snippet.title);
  $('#img_content6').text(response.items[5].snippet.title);
  urlstr = "https://www.youtube.com/watch?v=" + response.items[5].id.videoId;
  $('#img_uhref6').attr('href', urlstr);
  $('#img_dhref6').attr('href', urlstr);

});