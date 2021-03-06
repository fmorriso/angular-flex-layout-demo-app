import { Injectable } from '@angular/core';
//
import firebase from 'firebase/app';
//
@Injectable({
  providedIn: 'root'
})
export class FirebaseVersionInformationService {
  public get versionFull(): string {
    return firebase.SDK_VERSION;
  }
  constructor() { }
}
