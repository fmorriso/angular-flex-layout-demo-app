import { Component, ViewEncapsulation, OnInit } from '@angular/core';
//
import { AngularVersionInformationService } from './shared/angular-version-information.service';
import { MaterialVersionInformationService } from './shared/material-version-information.service';
import { AngularFLexLayoutVersionInformationService } from './shared/angular-flex-layout-version-information.service';
// Angular Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseVersionInformationService } from './shared/firebase-version-information.service';
// import { SDK_VERSION as firebaseSdkVersionInfo } from 'firebase';


@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [AngularFirestore, AngularFireModule]
})
export class AppComponent implements OnInit {
  angularVersion: string;
  materialVersion: string;
  angularFlexVersion: string;
  fireBaseSDKVersion: string;

  constructor(
    private ngVersion: AngularVersionInformationService,
    private matVersion: MaterialVersionInformationService,
    private ngFlexVersion: AngularFLexLayoutVersionInformationService,
    private fbVersion: FirebaseVersionInformationService
  ) {}

  ngOnInit(): void {
    this.angularVersion = this.ngVersion.versionFull;
    this.materialVersion = this.matVersion.versionFull;
    this.angularFlexVersion = this.ngFlexVersion.versionFull;
    this.fireBaseSDKVersion = this.fbVersion.versionFull;
  }

}
