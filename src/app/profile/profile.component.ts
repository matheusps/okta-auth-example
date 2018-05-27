import { Component, OnInit } from '@angular/core';
import { OktaAuthService, UserClaims } from '@okta/okta-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any = { email: "" }

  constructor( private oktaAuth: OktaAuthService) { }

  async ngOnInit() {
    this.user = await this.oktaAuth.getUser();
    
    this.oktaAuth.getUser().then(
      (user:UserClaims) => this.user = user
    );

  }

}
