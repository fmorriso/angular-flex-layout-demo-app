import { Component, ViewEncapsulation, OnInit } from '@angular/core';
//
import { AngularVersionInformationService } from './shared/angular-version-information.service';
import { MaterialVersionInformationService } from './shared/material-version-information.service';
import { AngularFLexLayoutVersionInformationService } from './shared/angular-flex-layout-version-information.service';
import { FirebaseVersionInformationService } from './shared/firebase-version-information.service';
// Angular Firebase & Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [AngularFirestore, AngularFireModule],
})
export class AppComponent implements OnInit {
  constructor(
    private ngVersion: AngularVersionInformationService,
    private matVersion: MaterialVersionInformationService,
    private ngFlexVersion: AngularFLexLayoutVersionInformationService,
    private fbVersion: FirebaseVersionInformationService
  ) {}

  ngOnInit(): void {}

  public get angularVersion(): string {
    return this.ngVersion.versionFull;
  }

  public get materialVersion(): string {
    return this.matVersion.versionFull;
  }

  public get angularFlexVersion(): string {
    return this.ngFlexVersion.versionFull;
  }

  public get fireBaseSDKVersion(): string {
    return this.fbVersion.versionFull;
  }
}
