import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    var that = this;
    $('#avatar').on('change', function(){
      that.updateImageDisplay(this);
      that.postAvatarImage(this);
    })
  }

  updateImageDisplay(element: any){
    var file = element.files[0] as File;
    let reader = new FileReader();
    reader.onloadend = function(ev){
      $('.avatar').css('background-image', `url(${reader.result})`);

    }
    reader.readAsDataURL(file);
  }

  postAvatarImage(element: any){
    var file = element.files[0] as File;
    let data = new FormData();
    data.append('thumbnail', file, file.name);

    let headers = new HttpHeaders({
      'enctype': 'multipart/form-data'
    })

    const url = 'http://localhost:3000/profile/update/avatar';
    this.http.post(url, data, { headers }).subscribe((res) => {
      var x = res;
    })
  }

  onChangeImage(){
    $('#avatar').trigger('click');
  }

}
