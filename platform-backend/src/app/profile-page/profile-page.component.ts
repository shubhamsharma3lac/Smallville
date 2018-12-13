import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  private user: User;

  constructor(private http: HttpClient) { 
    this.user = JSON.parse(localStorage.getItem('admin'));
  }

  ngOnInit() {
    var that = this;
    $('#avatar').on('change', function(){
      that.updateAvatarImage(this);
    })
  }

  updateAvatarDisplay(element: any){
    var file = element.files[0] as File;
    let reader = new FileReader();
    reader.onloadend = function(ev){
      $('.avatar').css('background-image', `url(${reader.result})`);

    }
    reader.readAsDataURL(file);
  }

  updateAvatarImage(element: any){
    var file = element.files[0] as File;
    
    let formData = new FormData();
    formData.append('avatar', file, file.name);
    formData.append('userid', "" + this.user.id);

    let headers = new HttpHeaders({
      'enctype': 'multipart/form-data'
    })

    const url = 'http://localhost:3000/profile/update/';
    this.http.post(url, formData, { headers }).subscribe((res) => {
      this.updateAvatarDisplay(element);
    })
  }

  onChangeImage(){
    $('#avatar').trigger('click');
  }

}
